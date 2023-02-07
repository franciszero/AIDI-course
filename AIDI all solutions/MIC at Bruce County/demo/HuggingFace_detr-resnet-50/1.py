from transformers import DetrImageProcessor, DetrForObjectDetection
import torch
from PIL import Image
import requests
import cv2
import random
import os

# https://huggingface.co/facebook/detr-resnet-50
processor = DetrImageProcessor.from_pretrained("facebook/detr-resnet-50")
model = DetrForObjectDetection.from_pretrained("facebook/detr-resnet-50")


def foo(img_name):
    if os.path.exists(os.path.abspath('.') + '/bbox/' + img_name):
        print('file_exists: .bbox/' + img_name)
        return
    img_raw = cv2.imread(base + '/' + img_name)

    # url = "https://apiwp.thelocal.com/wp-content/uploads/2019/07/e54a92d3593dc8d20b84feb8f2654b2b7e8c3b6983b7be057e57769980052843.jpg"
    # image = Image.open(requests.get(url, stream=True).raw)
    image = Image.open(base + '/' + img_name)
    inputs = processor(images=image, return_tensors="pt")
    outputs = model(**inputs)

    # convert outputs (bounding boxes and class logits) to COCO API
    # let's only keep detections with score > 0.9
    target_sizes = torch.tensor([image.size[::-1]])
    results = processor.post_process_object_detection(outputs, target_sizes=target_sizes, threshold=0.65)[0]

    for score, label, box in zip(results["scores"], results["labels"], results["boxes"]):
        box = [round(i, 2) for i in box.tolist()]
        item_name = model.config.id2label[label.item()]
        print(
            f"Detected {item_name} with confidence "
            f"{round(score.item(), 3)} at location {box}"
        )
        if item_name == 'person':
            x1 = int(box[0])
            y1 = int(box[1])
            x2 = int(box[2])
            y2 = int(box[3])
            cv2.rectangle(img_raw, (x1, y1), (x2, y2),
                          (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)), 2)

    # cv2.imshow('image', img_raw)
    # cv2.waitKey()

    cv2.imwrite('./bbox/' + img_name, img_raw)


# for i in range(5):
#     foo(i)


def findAllFile(base):
    for root, ds, fs in os.walk(base):
        for f in fs:
            yield f


base = './images'
for i in findAllFile(base):
    if not i.endswith("avif") and not i.endswith("png"):
        print("processing : " + i)
        foo(i)
