# deepcv_project_demo
deepcv_project_demo

我的博客学习技术共享网站：https://blog.csdn.net/weixin_41194129?type=blog


windows环境docker pull continuumio/anaconda3

记得安装vs code 和wsl进行穿透

docker  Windows 数据  python可视化  https://blog.csdn.net/qq_42693848/article/details/108780048

其他：
docker run -it python:3.9-slim bash -c "pip -q install opencv-python; python -c 'import cv2'"

测试代码：
```cpp
import numpy as np
import cv2

# Create a black image
img = np.zeros((512,512,3), np.uint8)

# Draw a diagonal blue line with thickness of 5 px
cv2.line(img,(0,0),(511,511),(255,0,0),5)
cv2.imshow('line',img)
cv2.waitKey()   
# sudo apt-get install qt5-default/tools qtcreator
# export DISPLAY=host.docker.internal:0
# export DISPLAY=10.53.132.251:0.0
# export QT_DEBUG_PLUGINS=1  # 打印过程
# apt-get install libxcb-xinerama0
# apt-get update
#apt-get install libx11-dev libxext-dev libxtst-dev
#apt-get install xlibmesa-gl-dev libglu1-mesa-dev
#apt-get install ffmpeg libsm6 libxext6  -y
#apt-get update && apt-get install -y opencv-python-headless
# pip install opencv-python==4.3.0.38  #报错 的时候可能cv版本过高，需要降低一下
#pip install opencv-python-headless -i https://pypi.doubanio.com/simple/  --trusted-host pypi.doubanio.com
#apt-get update && apt-get install libgl1
# apt-get install python3-tk
# apt install cmake make libgtk2.0-dev pkg-config
# apt-get install libxkbcommon-x11-0
# apt-get update
# apt-get install -y locales
# apt-get install locale-gen zh_CN
# apt-get install locale-gen zh_CN.utf8
# apt-get install -y ttf-wqy-microhei ttf-wqy-zenhei xfonts-wqy
#apt-get install tcl-dev tk-dev python-tk python3-tk
```
其他：
```
sudo apt-get install build-essential libgl1-mesa-dev
sudo apt-get install libfontconfig1-dev libfreetype6-dev libx11-dev libxext-dev libxfixes-dev libxi-dev libxrender-dev libxcb1-dev libx11-xcb-dev libxcb-glx0-dev
sudo apt-get install libxcb-keysyms1-dev libxcb-image0-dev libxcb-shm0-dev libxcb-icccm4-dev libxcb-sync0-dev libxcb-xfixes0-dev libxcb-shape0-dev libxcb-randr0-dev libxcb-render-util0-dev
```
实现步骤：
1、先打开vcX

2、整体在window进入docker容器环境之后

3、输入export DISPLAY=host.docker.internal:0

4、执行上述代码所在位置python cv.py 


![image](https://user-images.githubusercontent.com/36963108/160973505-807b300f-0473-4654-9b99-63fdd1b7ab9a.png)



