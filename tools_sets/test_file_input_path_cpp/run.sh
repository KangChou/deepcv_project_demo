# apt update --fix-missing
# apt install -f


# ## 在ubuntu使用eigen需要安装gcc++7:
# apt install sudo wget zip tar
# sudo apt-get install python-software-properties
# sudo apt-get update
# sudo apt install software-properties-common 
# sudo apt-get update
# sudo add-apt-repository ppa:ubuntu-toolchain-r/test
# sudo apt-get update 
# sudo apt-get install gcc-7
# sudo apt-get install g++-7
# sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-7 100
# sudo update-alternatives --config gcc
# sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-7 100
# sudo update-alternatives --config g++
# gcc --version
# g++ --version


# 下载:cmake:https://cmake.org/download/
# 参考：https://www.1024sou.com/article/318066.html 
#  wget https://cmake.org/files/v3.18/cmake-3.18.0.tar.gz
apt-get install libssl-dev
tar -zxvf cmake-3.18.0.tar.gz
cd cmake-3.18.0/
./configure
sudo make -j4 && sudo make install
# 查看版本号，验证
cmake --version
cd ../

# rm -rf build
# mkdir build
# cd build
# cmake ..
# sudo make
# sudo make install
# apt update --fix-missing