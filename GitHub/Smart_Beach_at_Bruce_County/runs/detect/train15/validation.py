from models.YOLOv8.YOLOv8 import AnnotationYOLOv8
from models.DertResNet50.ResNet import AnnotationResNet
from models.InsightFace.InsightFace import AnnotationInsightFace
from models.SAHI_YOLO.SAHI_YOLOv8 import AnnotationSahiYOLOv8
import sys

batch_path = None
if len(sys.argv) == 2:
    batch_path = "./data/%s/" % str(sys.argv[1])  # e.g. "./data/batch_20230318_0/"
else:
    exit(250)

# AnnotationResNet(batch_path, model_id=0).foo()
# AnnotationYOLOv8(batch_path, model_id=1).foo()
# AnnotationInsightFace(batch_path, model_id=2).foo()
# AnnotationSahiYOLOv8(batch_path, model_id=3).foo()
# AnnotationYOLOv8(batch_path, model_id=4, model_weights='./runs/detect/train37/weights/best.pt').foo()
AnnotationSahiYOLOv8(batch_path, model_id=7, model_weights='./runs/detect/train16/weights/last.pt').foo()
