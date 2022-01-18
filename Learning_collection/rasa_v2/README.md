
rasa安装学习参考：
[https://blog.csdn.net/AndrExpert/article/details/104328946](https://blog.csdn.net/AndrExpert/article/details/104328946) \
[https://github.com/jiangdongguo/ChitChatAssistant](https://github.com/jiangdongguo/ChitChatAssistant)\
docker pull meadml/cuda10.1-cudnn7-devel-ubuntu18.04-python3.6\
安装cuda10.1+cudnn7+anaconda3+conda create -n py36 python=3.6\
pip install tensorflow-gpu==2.3.0 -i  https://pypi.doubanio.com/simple/  --trusted-host pypi.doubanio.com\

'''
pip --default-timeout=500 install -U rasa -i  https://pypi.doubanio.com/simple/ --trusted-host pypi.doubanio.com
conda install pytorch==1.5.1 torchvision==0.6.1 cudatoolkit=10.1 -c pytorch
生成文件
$ sudo rasa init --no-prompt

或从源码安装：
git clone https://github.com/RasaHQ/rasa.git
cd rasa
pip install -r requirements.txt -i https://pypi.doubanio.com/simple/ --trusted-host pypi.doubanio.com
pip install -e .

''' 
