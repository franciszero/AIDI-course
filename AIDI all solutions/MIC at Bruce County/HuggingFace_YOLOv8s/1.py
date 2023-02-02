from ultralyticsplus import YOLO, render_result
import os

# load model
model = YOLO('ultralyticsplus/yolov8s')

# set model parameters
model.overrides['conf'] = 0.25  # NMS confidence threshold
model.overrides['iou'] = 0.45  # NMS IoU threshold
model.overrides['agnostic_nms'] = False  # NMS class-agnostic
model.overrides['max_det'] = 1000  # maximum number of detections per image

# set image
image = 'https://github.com/ultralytics/yolov5/raw/master/data/images/zidane.jpg'
image = "https://apiwp.thelocal.com/wp-content/uploads/2019/07/e54a92d3593dc8d20b84feb8f2654b2b7e8c3b6983b7be057e57769980052843.jpg"


def findAllFile(base):
    for root, ds, fs in os.walk(base):
        for f in fs:
            yield f


base = './images'
for i in findAllFile(base):
    if not i.endswith("avif") and not i.endswith("png"):
        print("processing : " + i)
        # perform inference
        results = model.predict(base + '/' + i)

        # observe results
        print(results[0].boxes)
        # tmp = 'results/Burlington-Beachway-park-e1653057907969.jpg'
        render = render_result(model=model, image=base + '/' + i, result=results[0])
        tmp = results[0]
        # render.show()
        render.save('results' + '/' + i)