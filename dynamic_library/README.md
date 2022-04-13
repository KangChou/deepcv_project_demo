
完美解决：无动态库libavcodec.so.57等等方法（如果本机能搜索到的话）

```
 find / -name libtensorflow_cc.so.2*
 /data/learning_cpp/spleeter1-2/third_party/tensorflow/lib/libtensorflow_cc.so.2
/data/learning_cpp/spleeter1-2/third_party/tensorflow/lib/libtensorflow_cc.so.2.1.0
cp /data/learning_cpp/spleeter1-2/third_party/tensorflow/lib/libtensorflow_cc.so.2 /usr/lib

find / -name libswresample.so.2*
scp /usr/lib/x86_64-linux-gnu/libswresample.so.3.5.100 ./
scp /usr/lib/x86_64-linux-gnu/libswresample.so.3 ./
sudo ln -s libswresample.so.3.5.100 libswresample.so.2

```
类似的使用上述搜索之后，软连接后导入到/usr/lib目录下即可调用。

