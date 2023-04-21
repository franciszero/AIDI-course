#!/bin/bash

# kill jupyter
ID_jupyter=`sudo docker ps -a | grep jetbot_jupyter | awk -F ' ' '{print $1}'`
echo "ID_jupyter: ${ID_jupyter}"
echo "sudo docker stop ${ID_jupyter}"
sudo docker stop ${ID_jupyter}
echo "sudo docker rm ${ID_jupyter}"
sudo docker rm ${ID_jupyter}
echo -e "success\n"

# kill display
ID_display=`sudo docker ps -a | grep jetbot_display | awk -F ' ' '{print $1}'`
echo "ID_display: ${ID_display}"
echo "sudo docker stop ${ID_display}"
sudo docker stop ${ID_display}
echo "sudo docker rm ${ID_display}"
sudo docker rm ${ID_display}
echo -e "success\n"

# kill camera
ID_camera=`sudo docker ps -a | grep jetbot_camera | awk -F ' ' '{print $1}'`
echo "ID_camera: ${ID_camera}"
echo "sudo docker stop ${ID_camera}"
sudo docker stop ${ID_camera}
echo "sudo docker rm ${ID_camera}"
sudo docker rm ${ID_camera}
echo -e "success\n"


source configure.sh
JUPYTER_WORKSPACE=${1:-$HOME}
JETBOT_CAMERA="zmq_camera"

# start camera
echo "start camera: ./camera/enable.sh"
./camera/enable.sh
ID_camera=`sudo docker ps -a | grep jetbot_camera | awk -F ' ' '{print $1}'`
echo "New ID_camera: ${ID_camera}"
echo -e "success\n"

# start display
echo "start display ./display/enable.sh"
./display/enable.sh
ID_display=`sudo docker ps -a | grep jetbot_display | awk -F ' ' '{print $1}'`
echo "New ID_display: ${ID_display}"
echo -e "success\n"

# start jupyter
echo "start jupyter ./jupyter/enable.sh $JUPYTER_WORKSPACE $JETBOT_CAMERA"
./jupyter/enable.sh $JUPYTER_WORKSPACE $JETBOT_CAMERA
ID_jupyter=`sudo docker ps -a | grep jetbot_jupyter | awk -F ' ' '{print $1}'`
echo "New ID_jupyter: ${ID_jupyter}"
echo -e "success\n"

echo "`sudo docker ps -a`"
echo -e "end\n"
