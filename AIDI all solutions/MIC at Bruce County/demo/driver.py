from ultralyticsplus import YOLO, render_result
import numpy as np
import glob
from transformers import DetrImageProcessor, DetrForObjectDetection
import torch
from PIL import Image
import cv2
import random
import os
import insightface

assert insightface.__version__ >= '0.4'


class YOLOv8:
    def __init__(self, i, o):
        self.input = i
        self.output = o
        self.model = YOLO('ultralyticsplus/yolov8s')
        self.model.overrides['conf'] = 0.5  # NMS confidence threshold
        self.model.overrides['iou'] = 0.5  # NMS IoU threshold
        self.model.overrides['agnostic_nms'] = False  # NMS class-agnostic
        self.model.overrides['max_det'] = 1000  # maximum number of detections per image
        pass

    def cnt_person(self, filename, save_file=False):
        if filename.endswith("avif"):  # or filename.endswith("png"):
            return -1
        results = self.model.predict(self.input + '/' + filename, verbose=0)
        boxes = results[0]
        cnt = 0
        for r in boxes:
            if int(r.boxes.cls.numpy()[0]) == 0:
                cnt += 1
        if save_file:
            self.__save_result(cnt, filename, boxes)
        return cnt

    def __save_result(self, cnt, filename, boxes):
        render = render_result(model=self.model, image=self.input + filename, result=boxes)
        filename, file_extension = os.path.splitext(filename)
        render.save(self.output + filename + '_' + str(cnt) + '_YOLOv8.' + 'jpg')
        pass


class InsightFace:
    def __init__(self, i, o):
        self.input = i
        self.output = o
        self.detector = insightface.model_zoo.get_model('scrfd_person_2.5g.onnx', download=True)
        self.detector.prepare(0, nms_thresh=0.5, input_size=(640, 640))
        pass

    def detect_person(self, img):
        bboxes, kpss = self.detector.detect(img)
        bboxes = np.round(bboxes[:, :4]).astype(int)
        kpss = np.round(kpss).astype(int)
        kpss[:, :, 0] = np.clip(kpss[:, :, 0], 0, img.shape[1])
        kpss[:, :, 1] = np.clip(kpss[:, :, 1], 0, img.shape[0])
        vbboxes = bboxes.copy()
        vbboxes[:, 0] = kpss[:, 0, 0]
        vbboxes[:, 1] = kpss[:, 0, 1]
        vbboxes[:, 2] = kpss[:, 4, 0]
        vbboxes[:, 3] = kpss[:, 4, 1]
        return bboxes, vbboxes

    def cnt_person(self, filename, save_file=False):
        if filename.endswith("avif"):  # or filename.endswith("png"):
            return -1
        # if not filename.endswith("jpg") and not filename.endswith("jpeg"):
        #     return -1
        path = self.input + filename
        img = cv2.imread(path)
        bboxes, vbboxes = self.detect_person(img)
        cnt = bboxes.shape[0]
        if save_file:
            self.__save_result(cnt, filename, img, bboxes, vbboxes)
        return cnt

    def __save_result(self, cnt, filename, img, bboxes, vbboxes):
        for i in range(bboxes.shape[0]):
            bbox = bboxes[i]
            vbbox = vbboxes[i]
            x1, y1, x2, y2 = bbox
            vx1, vy1, vx2, vy2 = vbbox
            cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 1)
            alpha = 0.8
            color = (255, 0, 0)
            for c in range(3):
                img[vy1:vy2, vx1:vx2, c] = img[vy1:vy2, vx1:vx2, c] * alpha + color[c] * (1.0 - alpha)
            cv2.circle(img, (vx1, vy1), 1, color, 2)
            cv2.circle(img, (vx1, vy2), 1, color, 2)
            cv2.circle(img, (vx2, vy1), 1, color, 2)
            cv2.circle(img, (vx2, vy2), 1, color, 2)
        filename, file_extension = os.path.splitext(filename)
        cv2.imwrite(self.output + filename + '_' + str(cnt) + '_InsightFace.' + 'jpg', img)
        pass


class DertResnet50:
    def __init__(self, i, o):
        self.input = i
        self.output = o
        # https://huggingface.co/facebook/detr-resnet-50
        self.processor = DetrImageProcessor.from_pretrained("facebook/detr-resnet-50")
        self.model = DetrForObjectDetection.from_pretrained("facebook/detr-resnet-50")
        pass

    def cnt_person(self, filename, save_file=False):
        if filename.endswith("avif"):  # or filename.endswith("png"):
            return -1
        # url = "https://apiwp.thelocal.com/wp-content/uploads/2019/07/e54a92d3593dc8d20b84feb8f2654b2b7e8c3b6983b7be057e57769980052843.jpg"
        # image = Image.open(requests.get(url, stream=True).raw)
        image = Image.open(self.input + filename).convert('RGB')
        inputs = self.processor(images=image, return_tensors="pt")
        outputs = self.model(**inputs)

        # convert outputs (bounding boxes and class logits) to COCO API
        target_sizes = torch.tensor([image.size[::-1]])
        results = self.processor.post_process_object_detection(outputs, target_sizes=target_sizes, threshold=0.65)[0]

        lst = list()
        id2label = self.model.config.id2label
        for score, label, box in zip(results["scores"], results["labels"], results["boxes"]):
            box = [round(i, 2) for i in box.tolist()]
            item_name = id2label[label.item()]
            if item_name == 'person':
                lst.append([int(box[0]), int(box[1]), int(box[2]), int(box[3])])  # x1, y1, x2, y2
        cnt = len(lst)
        if save_file:
            self.__save_result(cnt, filename, lst)
        return cnt

    def __save_result(self, cnt, filename, lst):
        img = cv2.imread(self.input + filename)
        for [x1, y1, x2, y2] in lst:
            cv2.rectangle(img, (x1, y1), (x2, y2),
                          (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)), 2)
        filename, file_extension = os.path.splitext(filename)
        cv2.imwrite(self.output + filename + '_' + str(cnt) + '_ResNet.' + 'jpg', img)
        pass


class Driver:
    def __init__(self, i='./images/', o='./results/'):
        self.input = i
        self.output = o
        self.yolo_v8 = YOLOv8(self.input, self.output)
        self.insightface = InsightFace(self.input, self.output)
        self.resnet = DertResnet50(self.input, self.output)
        pass

    def findAllFile(self):
        for root, ds, fs in os.walk(self.input):
            for f in fs:
                yield f

    def conv2rgb(self, filename):
        img = Image.open(self.input + filename)
        return img.convert('RGB')

    def scanImages(self, overwrite=False):
        for filename in self.findAllFile():
            if filename == '.DS_Store':
                continue
            print('processing : ' + filename)
            if not overwrite:
                f1, f2 = os.path.splitext(filename)
                img_paths = glob.glob(self.output + f1 + '*.jpg')
                if len(img_paths) > 0:
                    print('Skipping.\n')
                    continue
            c1 = self.resnet.cnt_person(filename, save_file=True)
            print('Detected %2d persons with %s' % (c1, 'ResNet'))
            c2 = self.yolo_v8.cnt_person(filename, save_file=True)
            print('Detected %d persons with %s' % (c2, 'YOLOv8'))
            c3 = self.insightface.cnt_person(filename, save_file=True)
            print('Detected %d persons with %s' % (c3, 'InsightFace'))
            print("")
        pass


if __name__ == '__main__':
    foo = Driver(i='./data/test_data/', o='./data/result_for_test_data/')
    # foo = Driver(i='./data/beach_use/', o='./data/result_of_beach_use/')
    foo.scanImages(overwrite=True)
