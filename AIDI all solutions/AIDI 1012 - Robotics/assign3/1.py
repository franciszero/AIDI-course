# % % time
# # creative common video from https://www.youtube.com/watch?v=BLaf9_jHQyQ
#
# import ipywidgets
# from IPython.display import display
# import numpy as np
# import base64
# import cv2
#
# # rimage_widget = ipywidgets.Image(format='jpeg')
#
# # display(rimage_widget)
#
# vwidth = 640
# vheight = 480
#
# cap = cv2.VideoCapture('/content/drive/MyDrive/AIDI/AIRobot/faceR.mp4')
#
# frames = []
#
# fpath = 'cucascades/haarcascade_frontalface_alt.xml'
#
# cuImage = cv2.cuda_GpuMat()
#
# face_detect = cv2.cuda_CascadeClassifier.create(fpath)
#
# while (1):
#     try:
#         _, frame = cap.read()
#
#         # fgmask = cv2.Canny(frame, 100, 100)
#         frame_resized = cv2.resize(frame, (int(vwidth), int(vheight)))
#         imgframe = cv2.cvtColor(frame_resized, cv2.COLOR_BGR2RGB)
#         # gray = cv2.cvtColor(imgframe, cv2.COLOR_BGR2GRAY)
#
#         cuImage.upload(imgframe)
#         gray = cv2.cuda.cvtColor(cuImage, cv2.COLOR_BGR2GRAY)
#         faces = face_detect.detectMultiScale(gray).download()
#         gray = gray.download()
#
#         # faces = face_detect.detectMultiScale(gray, 1.3, 5)
#         for (x, y, w, h) in faces[0]:
#             cv2.rectangle(frame_resized, (x, y), (x + w, y + h), (255, 0, 0), 2)
#             roi_gray = gray[y:y + h, x:x + w]
#             roi_color = frame_resized[y:y + h, x:x + w]
#             roi = cv2.GaussianBlur(roi_color, (23, 23), 30)
#             # impose this blurred image on original image to get final image
#             frame_resized[y:y + roi.shape[0], x:x + roi.shape[1]] = roi
#         # rimage_widget.value = bytes(cv2.imencode('.jpg', frame_resized)[1])
#         frames.append(frame_resized)
#
#     except Exception:
#         break
#
# filename = 'output_gpu.mp4'
# print(filename)
#
# fourcc = cv2.VideoWriter_fourcc(*'avc1')
# writer = cv2.VideoWriter(filename, fourcc, 25, (int(vwidth), int(vheight)))
#
# for frame in frames:
#     writer.write(frame)
#
# cap.release()
# writer.release()
#
# print(len(frames))
