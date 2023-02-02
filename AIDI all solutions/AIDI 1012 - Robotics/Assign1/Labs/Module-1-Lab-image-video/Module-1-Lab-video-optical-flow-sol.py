#!/usr/bin/env python
# coding: utf-8

# ### Video Optical Flow
# This will show you how to calculate frame rate per second (FPS) from a video by applying a Farnebacks Dense Optical Flow algorithm while resizing the images. You will do this on both a CPU and then on the second code block you will use a GPU.
# 
# Note, to ensure we can see the video output from within Jupyter Notebook remotely,  we are using an image ipywidget which is not the best performance for viewing a video.
# 
# If you run this locally to a jetson with a monitor and keyboard, you can comment out the image widgets and uncomment out the cv2.imshow lines. This will result in a small popup window that will show the video.  
# 
# This first code block is processing the video using a CPU. 

# In[24]:


#CPU
#https://github.com/spmallick/learnopencv/tree/master/Getting-Started-OpenCV-CUDA-Module
import argparse
import time
import ipywidgets
from IPython.display import display

import cv2
import numpy as np

video1 = ipywidgets.Image(format='jpeg')
video2 = ipywidgets.Image(format='jpeg')

display(video1)
display(video2)

video = 'boat.mp4'
device = 'cpu'
    # init dict to track time for every stage at each iteration
timers = {
        "full pipeline": [],
        "reading": [],
        "pre-process": [],
        "optical flow": [],
        "post-process": [],
    }

    # init video capture with video
cap = cv2.VideoCapture(video)

    # get default video FPS
fps = cap.get(cv2.CAP_PROP_FPS)

    # get total number of video frames
num_frames = cap.get(cv2.CAP_PROP_FRAME_COUNT)

    # read the first frame
ret, previous_frame = cap.read()


        # proceed if frame reading was successful
if ret:
            # resize frame
    frame = cv2.resize(previous_frame, (960, 540))

            # convert to gray
    previous_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

            # create hsv output for optical flow
    hsv = np.zeros_like(frame, np.float32)

            # set saturation to 1
    hsv[..., 1] = 1.0

    while True:
                # start full pipeline timer
        start_full_time = time.time()

                # start reading timer
        start_read_time = time.time()

                # capture frame-by-frame
        ret, frame = cap.read()

                # end reading timer
        end_read_time = time.time()

                # add elapsed iteration time
        timers["reading"].append(end_read_time - start_read_time)

                # if frame reading was not successful, break
        if not ret:
            break

                # start pre-process timer
        start_pre_time = time.time()
                # resize frame
        frame = cv2.resize(frame, (960, 540))

                # convert to gray
        current_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

                # end pre-process timer
        end_pre_time = time.time()

                # add elapsed iteration time
        timers["pre-process"].append(end_pre_time - start_pre_time)

                # start optical flow timer
        start_of = time.time()

                # calculate optical flow
        flow = cv2.calcOpticalFlowFarneback(
            previous_frame, current_frame, None, 0.5, 5, 15, 3, 5, 1.2, 0,
                )
            # end of timer
        end_of = time.time()

            # add elapsed iteration time
        timers["optical flow"].append(end_of - start_of)

                # start post-process timer
        start_post_time = time.time()

                # convert from cartesian to polar coordinates to get magnitude and angle
        magnitude, angle = cv2.cartToPolar(
                flow[..., 0], flow[..., 1], angleInDegrees=True,
                )

                # set hue according to the angle of optical flow
        hsv[..., 0] = angle * ((1 / 360.0) * (180 / 255.0))

                # set value according to the normalized magnitude of optical flow
        hsv[..., 2] = cv2.normalize(
                    magnitude, None, 0.0, 1.0, cv2.NORM_MINMAX, -1,
                )

                # multiply each pixel value to 255
        hsv_8u = np.uint8(hsv * 255.0)

                # convert hsv to bgr
        bgr = cv2.cvtColor(hsv_8u, cv2.COLOR_HSV2BGR)

                # update previous_frame value
        previous_frame = current_frame

                # end post-process timer
        end_post_time = time.time()

                # add elapsed iteration time
        timers["post-process"].append(end_post_time - start_post_time)

                # end full pipeline timer
        end_full_time = time.time()

                # add elapsed iteration time
        timers["full pipeline"].append(end_full_time - start_full_time)

                # visualization
        video1.value = bytes(cv2.imencode('.jpg', frame)[1])
        video2.value = bytes(cv2.imencode('.jpg', bgr)[1])
            #cv2.imshow("original", frame)
            #cv2.imshow("result", bgr)
            #k = cv2.waitKey(1)
            #if k == 27:
               # break



    # release the capture
cap.release()

    # destroy all windows
#cv2.destroyAllWindows()

    # print results
print("Number of frames : ", num_frames)

    # elapsed time at each stage
print("Elapsed time")
for stage, seconds in timers.items():
    print("-", stage, ": {:0.3f} seconds".format(sum(seconds)))

    # calculate frames per second
print("Default video FPS : {:0.3f}".format(fps))

of_fps = (num_frames - 1) / sum(timers["optical flow"])
print("Optical flow FPS : {:0.3f}".format(of_fps))

full_fps = (num_frames - 1) / sum(timers["full pipeline"])
print("Full pipeline FPS : {:0.3f}".format(full_fps))


# ### OpenCV and CUDA
# This second code block uses a GPU. Here you will note that each frame must be uploaded to the GPU device before applying the CV2 CUDA enabled transformation.
# 
# Note the faster FPS. 

# In[23]:


#https://github.com/spmallick/learnopencv/tree/master/Getting-Started-OpenCV-CUDA-Module
import argparse
import time
import cv2
import numpy as np
import ipywidgets
from IPython.display import display

video1 = ipywidgets.Image(format='jpeg')
video2 = ipywidgets.Image(format='jpeg')

display(video1)
display(video2)

video = 'boat.mp4'
device = 'gpu'
    # init dict to track time for every stage at each iteration
timers = {
        "full pipeline": [],
        "reading": [],
        "pre-process": [],
        "optical flow": [],
        "post-process": [],
    }

    # init video capture with video
cap = cv2.VideoCapture(video)

    # get default video FPS
fps = cap.get(cv2.CAP_PROP_FPS)

    # get total number of video frames
num_frames = cap.get(cv2.CAP_PROP_FRAME_COUNT)

    # read the first frame
ret, previous_frame = cap.read()

        # proceed if frame reading was successful
if ret:
            # resize frame
    frame = cv2.resize(previous_frame, (960, 540))

            # upload resized frame to GPU
    gpu_frame = cv2.cuda_GpuMat()
    gpu_frame.upload(frame)

            # convert to gray
    previous_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

            # upload pre-processed frame to GPU
    gpu_previous = cv2.cuda_GpuMat()
    gpu_previous.upload(previous_frame)

            # create gpu_hsv output for optical flow
    gpu_hsv = cv2.cuda_GpuMat(gpu_frame.size(), cv2.CV_32FC3)
    gpu_hsv_8u = cv2.cuda_GpuMat(gpu_frame.size(), cv2.CV_8UC3)

    gpu_h = cv2.cuda_GpuMat(gpu_frame.size(), cv2.CV_32FC1)
    gpu_s = cv2.cuda_GpuMat(gpu_frame.size(), cv2.CV_32FC1)
    gpu_v = cv2.cuda_GpuMat(gpu_frame.size(), cv2.CV_32FC1)

            # set saturation to 1
    gpu_s.upload(np.ones_like(previous_frame, np.float32))

    while True:
                # start full pipeline timer
        start_full_time = time.time()

                # start reading timer
        start_read_time = time.time()

                # capture frame-by-frame
        ret, frame = cap.read()

                # upload frame to GPU
        gpu_frame.upload(frame)

                # end reading timer
        end_read_time = time.time()

                # add elapsed iteration time
        timers["reading"].append(end_read_time - start_read_time)

                # if frame reading was not successful, break
        if not ret:
            break

                # start pre-process timer
        start_pre_time = time.time()

                # resize frame
        gpu_frame = cv2.cuda.resize(gpu_frame, (960, 540))

                # convert to gray
        gpu_current = cv2.cuda.cvtColor(gpu_frame, cv2.COLOR_BGR2GRAY)

                # end pre-process timer
        end_pre_time = time.time()

                # add elapsed iteration time
        timers["pre-process"].append(end_pre_time - start_pre_time)

                # start optical flow timer
        start_of = time.time()

                # create optical flow instance
        gpu_flow = cv2.cuda_FarnebackOpticalFlow.create(
                    5, 0.5, False, 15, 3, 5, 1.2, 0,
                )
                # calculate optical flow
        gpu_flow = cv2.cuda_FarnebackOpticalFlow.calc(
                gpu_flow, gpu_previous, gpu_current, None,
                )

                # end of timer
        end_of = time.time()

                # add elapsed iteration time
        timers["optical flow"].append(end_of - start_of)

                # start post-process timer
        start_post_time = time.time()

        gpu_flow_x = cv2.cuda_GpuMat(gpu_flow.size(), cv2.CV_32FC1)
        gpu_flow_y = cv2.cuda_GpuMat(gpu_flow.size(), cv2.CV_32FC1)
        cv2.cuda.split(gpu_flow, [gpu_flow_x, gpu_flow_y])

                # convert from cartesian to polar coordinates to get magnitude and angle
        gpu_magnitude, gpu_angle = cv2.cuda.cartToPolar(
                gpu_flow_x, gpu_flow_y, angleInDegrees=True,
                )

                # set value to normalized magnitude from 0 to 1
        gpu_v = cv2.cuda.normalize(gpu_magnitude, 0.0, 1.0, cv2.NORM_MINMAX, -1)

                # get angle of optical flow
        angle = gpu_angle.download()
        angle *= (1 / 360.0) * (180 / 255.0)

                # set hue according to the angle of optical flow
        gpu_h.upload(angle)

                # merge h,s,v channels
        cv2.cuda.merge([gpu_h, gpu_s, gpu_v], gpu_hsv)

                # multiply each pixel value to 255
        gpu_hsv.convertTo(cv2.CV_8U, 255.0, gpu_hsv_8u, 0.0)

                # convert hsv to bgr
        gpu_bgr = cv2.cuda.cvtColor(gpu_hsv_8u, cv2.COLOR_HSV2BGR)

                # send original frame from GPU back to CPU
        frame = gpu_frame.download()

                # send result from GPU back to CPU
        bgr = gpu_bgr.download()

                # update previous_frame value
        gpu_previous = gpu_current

                # end post-process timer
        end_post_time = time.time()

                # add elapsed iteration time
        timers["post-process"].append(end_post_time - start_post_time)

                # end full pipeline timer
        end_full_time = time.time()

                # add elapsed iteration time
        timers["full pipeline"].append(end_full_time - start_full_time)

         # visualization
        #using image widget for running in remote notebook
        #comment out these two video.value lines if running on local machine
        video1.value = bytes(cv2.imencode('.jpg', frame)[1])
        video2.value = bytes(cv2.imencode('.jpg', bgr)[1])
        #uncmment out the next five lines if running on local machine 
            #cv2.imshow("original", frame)
            #cv2.imshow("result", bgr)
            #k = cv2.waitKey(1)
            #if k == 27:
                #break

    # release the capture
cap.release()

    # destroy all windows
#cv2.destroyAllWindows()

    # print results
print("Number of frames : ", num_frames)

    # elapsed time at each stage
print("Elapsed time")
for stage, seconds in timers.items():
    print("-", stage, ": {:0.3f} seconds".format(sum(seconds)))

    # calculate frames per second
print("Default video FPS : {:0.3f}".format(fps))

of_fps = (num_frames - 1) / sum(timers["optical flow"])
print("Optical flow FPS : {:0.3f}".format(of_fps))

full_fps = (num_frames - 1) / sum(timers["full pipeline"])
print("Full pipeline FPS : {:0.3f}".format(full_fps))


# ### Lab-1.7-Exercise - Solution
# Now it is time to try this on your own.  
# Use the Hallway.mp4 video.  Read in the video and perform the same steps in the code block above to use the CUDA libraries to calculate FPS using the cuda enabled Farneback Optical Flow algorithms.  

# In[1]:


### Your code here

import argparse
import time
import cv2
import numpy as np
import ipywidgets
from IPython.display import display

video1 = ipywidgets.Image(format='jpeg')
video2 = ipywidgets.Image(format='jpeg')

display(video1)
display(video2)

video = 'hallway.mp4'
device = 'gpu'
    # init dict to track time for every stage at each iteration
timers = {
        "full pipeline": [],
        "reading": [],
        "pre-process": [],
        "optical flow": [],
        "post-process": [],
    }

    # init video capture with video
cap = cv2.VideoCapture(video)

    # get default video FPS
fps = cap.get(cv2.CAP_PROP_FPS)

    # get total number of video frames
num_frames = cap.get(cv2.CAP_PROP_FRAME_COUNT)

    # read the first frame
ret, previous_frame = cap.read()

        # proceed if frame reading was successful
if ret:
            # resize frame
    frame = cv2.resize(previous_frame, (960, 540))

            # upload resized frame to GPU
    gpu_frame = cv2.cuda_GpuMat()
    gpu_frame.upload(frame)

            # convert to gray
    previous_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

            # upload pre-processed frame to GPU
    gpu_previous = cv2.cuda_GpuMat()
    gpu_previous.upload(previous_frame)

            # create gpu_hsv output for optical flow
    gpu_hsv = cv2.cuda_GpuMat(gpu_frame.size(), cv2.CV_32FC3)
    gpu_hsv_8u = cv2.cuda_GpuMat(gpu_frame.size(), cv2.CV_8UC3)

    gpu_h = cv2.cuda_GpuMat(gpu_frame.size(), cv2.CV_32FC1)
    gpu_s = cv2.cuda_GpuMat(gpu_frame.size(), cv2.CV_32FC1)
    gpu_v = cv2.cuda_GpuMat(gpu_frame.size(), cv2.CV_32FC1)

            # set saturation to 1
    gpu_s.upload(np.ones_like(previous_frame, np.float32))

    while True:
                # start full pipeline timer
        start_full_time = time.time()

                # start reading timer
        start_read_time = time.time()

                # capture frame-by-frame
        ret, frame = cap.read()

                # upload frame to GPU
        gpu_frame.upload(frame)

                # end reading timer
        end_read_time = time.time()

                # add elapsed iteration time
        timers["reading"].append(end_read_time - start_read_time)

                # if frame reading was not successful, break
        if not ret:
            break

                # start pre-process timer
        start_pre_time = time.time()

                # resize frame
        gpu_frame = cv2.cuda.resize(gpu_frame, (960, 540))

                # convert to gray
        gpu_current = cv2.cuda.cvtColor(gpu_frame, cv2.COLOR_BGR2GRAY)

                # end pre-process timer
        end_pre_time = time.time()

                # add elapsed iteration time
        timers["pre-process"].append(end_pre_time - start_pre_time)

                # start optical flow timer
        start_of = time.time()

                # create optical flow instance
        gpu_flow = cv2.cuda_FarnebackOpticalFlow.create(
                    5, 0.5, False, 15, 3, 5, 1.2, 0,
                )
                # calculate optical flow
        gpu_flow = cv2.cuda_FarnebackOpticalFlow.calc(
                gpu_flow, gpu_previous, gpu_current, None,
                )

                # end of timer
        end_of = time.time()

                # add elapsed iteration time
        timers["optical flow"].append(end_of - start_of)

                # start post-process timer
        start_post_time = time.time()

        gpu_flow_x = cv2.cuda_GpuMat(gpu_flow.size(), cv2.CV_32FC1)
        gpu_flow_y = cv2.cuda_GpuMat(gpu_flow.size(), cv2.CV_32FC1)
        cv2.cuda.split(gpu_flow, [gpu_flow_x, gpu_flow_y])

                # convert from cartesian to polar coordinates to get magnitude and angle
        gpu_magnitude, gpu_angle = cv2.cuda.cartToPolar(
                gpu_flow_x, gpu_flow_y, angleInDegrees=True,
                )

                # set value to normalized magnitude from 0 to 1
        gpu_v = cv2.cuda.normalize(gpu_magnitude, 0.0, 1.0, cv2.NORM_MINMAX, -1)

                # get angle of optical flow
        angle = gpu_angle.download()
        angle *= (1 / 360.0) * (180 / 255.0)

                # set hue according to the angle of optical flow
        gpu_h.upload(angle)

                # merge h,s,v channels
        cv2.cuda.merge([gpu_h, gpu_s, gpu_v], gpu_hsv)

                # multiply each pixel value to 255
        gpu_hsv.convertTo(cv2.CV_8U, 255.0, gpu_hsv_8u, 0.0)

                # convert hsv to bgr
        gpu_bgr = cv2.cuda.cvtColor(gpu_hsv_8u, cv2.COLOR_HSV2BGR)

                # send original frame from GPU back to CPU
        frame = gpu_frame.download()

                # send result from GPU back to CPU
        bgr = gpu_bgr.download()

                # update previous_frame value
        gpu_previous = gpu_current

                # end post-process timer
        end_post_time = time.time()

                # add elapsed iteration time
        timers["post-process"].append(end_post_time - start_post_time)

                # end full pipeline timer
        end_full_time = time.time()

                # add elapsed iteration time
        timers["full pipeline"].append(end_full_time - start_full_time)

         # visualization
        #using image widget for running in remote notebook
        #comment out these two video.value lines if running on local machine
        video1.value = bytes(cv2.imencode('.jpg', frame)[1])
        video2.value = bytes(cv2.imencode('.jpg', bgr)[1])
        #uncmment out the next five lines if running on local machine 
            #cv2.imshow("original", frame)
            #cv2.imshow("result", bgr)
            #k = cv2.waitKey(1)
            #if k == 27:
                #break

    # release the capture
cap.release()

    # destroy all windows
#cv2.destroyAllWindows()

    # print results
print("Number of frames : ", num_frames)

    # elapsed time at each stage
print("Elapsed time")
for stage, seconds in timers.items():
    print("-", stage, ": {:0.3f} seconds".format(sum(seconds)))

    # calculate frames per second
print("Default video FPS : {:0.3f}".format(fps))

of_fps = (num_frames - 1) / sum(timers["optical flow"])
print("Optical flow FPS : {:0.3f}".format(of_fps))

full_fps = (num_frames - 1) / sum(timers["full pipeline"])
print("Full pipeline FPS : {:0.3f}".format(full_fps))


# In[ ]:




