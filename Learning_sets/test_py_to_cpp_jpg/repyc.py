import socket
import os
import time
localhost = '127.0.0.1'
client = socket.socket(socket.AF_INET,socket.SOCK_STREAM) #声明socket类型，同时生成链接对象
client.connect((localhost,58888)) #localhost用于与本机进行测试，不同本机可更改为服务端IP。端口号为58888，需要与服务端端口一致
   
fd=open("test.jpg",'rb')#打开图片文件
while 1:
    data=fd.read(1024)#读取图片文件
    if not data:		#读文件结束
        print("send over")
        break
    client.send(data)  #发送给服务端
    client.close() #关闭这个链接
