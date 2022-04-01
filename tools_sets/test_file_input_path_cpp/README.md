
```shell
# 安装boost C++库
# 安装参考：https://blog.csdn.net/qq_41722524/article/details/114322697
sudo apt-get install mpi-default-dev # mpi related
sudo apt-get install libicu-dev # regular expresion related
sudo apt-get install python-dev # python dev related
sudo apt-get install libbz2-dev
sudo apt install libboost1.74-dev  # 直接安装方法

wget https://jaist.dl.sourceforge.net/project/boost/boost/1.58.0/boost_1_58_0.tar.bz2
tar --bzip2 -xvf boost_1_58_0.tar.bz2
cd boost_1_58_0

sudo ./bootstrap.sh --with-libraries=all --with-toolset=gcc 
sudo ./b2 toolset=gcc
sudo ./b2 install --prefix=/usr
sudo ldconfig

# 参考:https://blog.csdn.net/weixin_44728197/article/details/88539316

# 机器学习：https://github.com/gotgith/Machine-Learning- 

# boost 学习教程：https://theboostcpplibraries.com/
# boost 中文教程：https://www.mianshigee.com/tutorial/boost/ch0.md
# https://www.boost.org/doc/libs/1_78_0/libs/graph/doc/index.html 
# https://www.boost.org/doc/libs/1_75_0/libs/graph/doc/index.html
# https://www.boost.org/doc/libs/1_62_0/more/getting_started/unix-variants.html#errors-and-warnings
# boost书籍：https://github.com/xiaohaijin/Boost/tree/master/document

# boost 算法：https://www.boost.org/doc/libs/1_79_0_beta1/ 
```