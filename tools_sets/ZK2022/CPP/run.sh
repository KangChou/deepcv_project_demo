
#.out是可执行文件，相当于win上的exe；
#.o是编译中间目标文件，相当于win上的.obj；
#.a是静态库，多个.o练链接得到，用于静态链接；
#.so是共享库，用于动态链接，相当于win上.dll；
# 注意：在用-o和-c的时候， -c不要指定多个文件
#g++ : error : cannot specify -o with -c, -S or -E with multiple files 
#要生成两个或更多相同名称的.o文件，产生了冲突。所以检查一下工程中源文件有没有重复添加的情况，如果有就只保留其中一个，即可解决该问题。

#project1:out可执行文件生成
g++ main.cpp -o a.out && ./a.out
#project2:o目标文件生成
gcc -c hello.cpp && ./hello.o                      #o目标文件生成,o为中间文件，所以无法执行
##project3:调用静态库
ar -cr libhello.a hello.o                             #创建静态库
g++ main2.cpp tools.cpp tools.h libhello.a -o main.out && ./main.out    #调用静态库
# ##project4:so共享库生成
gcc -shared -fPIC -o libhello.so hello.o
# g++ -shared -c -fPIC hello.cpp tools.cpp tools.h -o libhello.so hello.o #创建so
# # cp ./libhello.so /usr/lib  如果下面的命令没有包括./libhello.so 则需要拷贝./libhello.so到lib目录下，否则需要加上./libhello.so
# g++ -o main.out main2.cpp tools.cpp tools.h -L. -lhello && ./main.out   #调用so  
g++ -o main.out main2.cpp tools.cpp tools.h ./libhello.so -L. -lhello && ./main.out   #调用so  
rm ./a.out ./hello.o ./main.out ./libhello.a