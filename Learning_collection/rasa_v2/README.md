
rasa部署学习参考：\
[https://blog.csdn.net/AndrExpert/article/details/104328946](https://blog.csdn.net/AndrExpert/article/details/104328946) \
[https://github.com/jiangdongguo/ChitChatAssistant](https://github.com/jiangdongguo/ChitChatAssistant)\
docker pull meadml/cuda10.1-cudnn7-devel-ubuntu18.04-python3.6\
安装cuda10.1+cudnn7+anaconda3+conda create -n py36 python=3.6\
如果考虑GPU则安装：pip install tensorflow-gpu==2.3.0 -i  https://pypi.doubanio.com/simple/  --trusted-host pypi.doubanio.com

```shell
anaconda3镜像源：终端输入
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/c
conda config --set show_channel_urls yes
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/


开始安装：
如果不考虑GPU则安装：pip install tensorflow==2.6.2 -i  https://pypi.doubanio.com/simple/ --trusted-host pypi.doubanio.com 
pip --default-timeout=1000 install rasa # 安装时间可能会很长，可以考虑下面的安装方式。
pip --default-timeout=500 install -U rasa -i  https://pypi.doubanio.com/simple/ --trusted-host pypi.doubanio.com
conda install pytorch==1.5.1 torchvision==0.6.1 cudatoolkit=10.1 -c pytorch
生成文件
$ sudo rasa init --no-prompt

旧版从源码安装：
git clone https://github.com/RasaHQ/rasa.git
cd rasa
pip install -r requirements.txt -i https://pypi.doubanio.com/simple/ --trusted-host pypi.doubanio.com
pip install -e .

```
