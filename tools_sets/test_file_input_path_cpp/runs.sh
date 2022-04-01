apt update --fix-missing
apt install -f
## 在ubuntu使用eigen需要安装gcc++7:
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






# g++ input_all_file_path.cc -o test && ./test
# g++ input_read_filename.cc -std=c++11 -o main && ./main