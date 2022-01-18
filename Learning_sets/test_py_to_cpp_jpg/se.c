#include <stdio.h>
#include <netinet/in.h>
#include <sys/types.h>          /* See NOTES */
#include <sys/socket.h>
#include <string.h>
#include <fcntl.h>
#include <unistd.h>

#define SPORT 58888
#define CPORT 10010 
#define SIZE  1024
#define LISTENNUM 10

int main()
{
	int socketID = 0;
	int fd=0;
	int ret=0;
	int connectedSocket = 0;
	int addrLength = 0;
	char buf[SIZE] = {0};
	struct sockaddr_in addr;	
	
	//打开socket -- 协议tcp
	socketID = socket (PF_INET, SOCK_STREAM, 0);
	if ( socketID < 0 )
	{
		perror("socket error");
		return 0;
	}
	printf("socket ok\r\n");

	//设置socket地址可以复用
	int on = 1;
	setsockopt( socketID, SOL_SOCKET, SO_REUSEADDR, &on, sizeof(on));

	//绑定自己的ip和port
	addrLength = sizeof(addr);
	memset( &addr, 0, addrLength );
	addr.sin_family = PF_INET;
	addr.sin_port = htons(SPORT);
	addr.sin_addr.s_addr = INADDR_ANY;
	//绑定的作用是让socketID找到对应的ip+port实现通信
	if ( 0 > bind( socketID, (struct sockaddr *)&addr, addrLength ) )
	{
		perror("bind error");
		close(socketID);
		return -1;
	}
	printf("bind ok\r\n");

	//建立监听 
	//作用：建立一个监听队列，把三次握手未完成的客户端放在队列中。当三次握手全部完成的时候，就从队列移除。目的：更方便更及时服务每一个客户端
	listen ( socketID, LISTENNUM );
	
	printf("listen ok\r\n");
		
	//接受连接 
	//作用：建立连接，返回已连接的socket，并且让socketID又可以接受其它客户端的连接
	connectedSocket = accept( socketID, (struct sockaddr *)&addr, &addrLength);
	if ( connectedSocket < 0 )
	{
		perror("accept error");
		close(socketID);
		return -1;
	}
	printf( "accept ok, connectedSocket=%d\r\n", connectedSocket );
	char * ip = inet_ntoa(addr.sin_addr);
	printf( "ip:%s, port:%d\r\n", ip, ntohs(addr.sin_port) );
	
//	int flag = fcntl(connectedSocket, F_GETFL);
//	flag |= O_NONBLOCK;
//	fcntl(connectedSocket, F_SETFL, flag);
		
	//打开文件，进行图片传输
	fd=open("2.jpg",O_WRONLY | O_CREAT |O_TRUNC,0777);
	if(fd<0)
	{
		perror("open error");
		return -1;
	}
	while(1)
	{
		memset(buf,'\0',SIZE);
		ret=recv(connectedSocket,buf,SIZE-1,0);
		//接受完毕
		if(ret==0)
		{
			printf("recv ok\n");
			break;
		}
		//写进文件
		write(fd,buf,ret);
	}
	//关闭socket
	close( connectedSocket );
	close( socketID );
	close (fd);
	return 0;
}
