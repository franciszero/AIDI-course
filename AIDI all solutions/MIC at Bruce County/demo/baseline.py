from ultralyticsplus import YOLO, render_result
import os
import numpy as np
import os
import os.path as osp
import glob
import cv2
from transformers import DetrImageProcessor, DetrForObjectDetection
import torch
from PIL import Image
import requests
import cv2
import random
import os
import insightface

assert insightface.__version__ >= '0.4'


class YOLOv8:
    def __init__(self, wp):
        self.workspace = wp
        self.model = YOLO('ultralyticsplus/yolov8s')
        self.model.overrides['conf'] = 0.15  # NMS confidence threshold
        self.model.overrides['iou'] = 0.2  # NMS IoU threshold
        self.model.overrides['agnostic_nms'] = False  # NMS class-agnostic
        self.model.overrides['max_det'] = 1000  # maximum number of detections per image
        pass

    def cnt_person(self, filename, save_file=False):
        results = self.model.predict(self.workspace + '/' + filename)
        boxes = results[0]
        i = 0
        for r in boxes:
            if int(r.boxes.cls.numpy()[0]) == 0:
                i += 1
        print(str(i) + ' persons in ' + filename)
        if save_file:
            self.__save_result(filename, boxes)
        return i

    def __save_result(self, filename, boxes):
        path = self.workspace + '/' + filename
        render = render_result(model=self.model, image=path, result=boxes)
        render.save('results' + '/' + filename)
        pass


class InsightFace:
    def __init__(self):
        self.detector = insightface.model_zoo.get_model('scrfd_person_2.5g.onnx', download=True)
        self.detector.prepare(0, nms_thresh=0.5, input_size=(640, 640))
        pass

    def cnt_person(self, filename):
        cnt = 0
        return cnt


class DertResnet50:
    def __init__(self):
        # https://huggingface.co/facebook/detr-resnet-50
        processor = DetrImageProcessor.from_pretrained("facebook/detr-resnet-50")
        model = DetrForObjectDetection.from_pretrained("facebook/detr-resnet-50")
        pass

    def counting(self, filename):
        cnt = 0
        return cnt


class Baseline:
    def __init__(self):
        self.base = './images'
        self.yolov8 = YOLOv8()
        self.insightface = InsightFace()
        self.resnet = DertResnet50()
        pass

    @staticmethod
    def findAllFile(self, base):
        for root, ds, fs in os.walk(base):
            for f in fs:
                yield f

    def scanImgs(self):
        for i in self.findAllFile(self.base):

