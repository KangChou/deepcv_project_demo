#include <sys/stat.h>
#include <fcntl.h>
#include <errno.h>
#include <netdb.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <limits.h>
#define ERROR -1
#define MAX_INT_DIGIT 10
char* int2str(const int n);
int power(int base, int n);
#define SERVER_PORT 6667
 
/*
监听后，一直处于accept阻塞状态，
直到有客户端连接，
当客户端如数quit后，断开与客户端的连接
*/
 
int main()
{
    //调用socket函数返回的文件描述符
    int serverSocket;
    //声明两个套接字sockaddr_in结构体变量，分别表示客户端和服务器
    struct sockaddr_in server_addr;
    struct sockaddr_in clientAddr;
    int addr_len = sizeof(clientAddr);
    int client;
    char buffer[200];
    int iDataNum;
    //socket函数，失败返回-1
    //int socket(int domain, int type, int protocol);
    //第一个参数表示使用的地址类型，一般都是ipv4，AF_INET
    //第二个参数表示套接字类型：tcp：面向连接的稳定数据传输SOCK_STREAM
    //第三个参数设置为0
    if((serverSocket = socket(AF_INET, SOCK_STREAM, 0)) < 0)
    {
        perror("socket");
        return 1;
    }
    
    bzero(&server_addr, sizeof(server_addr));
    //初始化服务器端的套接字，并用htons和htonl将端口和地址转成网络字节序
    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(SERVER_PORT);
    //ip可是是本服务器的ip，也可以用宏INADDR_ANY代替，代表0.0.0.0，表明所有地址
    server_addr.sin_addr.s_addr = htonl(INADDR_ANY);
    //对于bind，accept之类的函数，里面套接字参数都是需要强制转换成(struct sockaddr *)
    //bind三个参数：服务器端的套接字的文件描述符，
    if(bind(serverSocket, (struct sockaddr *)&server_addr, sizeof(server_addr)) < 0)
    {
        perror("connect");
        return 1;
    }
    //设置服务器上的socket为监听状态
    if(listen(serverSocket, 5) < 0)
    {
        perror("listen");
        return 1;
    }
    
    while(1)
    {
        printf("监听端口: %d\n", SERVER_PORT);
        //调用accept函数后，会进入阻塞状态
        //accept返回一个套接字的文件描述符，这样服务器端便有两个套接字的文件描述符，
        //serverSocket和client。
        //serverSocket仍然继续在监听状态，client则负责接收和发送数据
        //clientAddr是一个传出参数，accept返回时，传出客户端的地址和端口号
        //addr_len是一个传入-传出参数，传入的是调用者提供的缓冲区的clientAddr的长度，以避免缓冲区溢出。
        //传出的是客户端地址结构体的实际长度。
        //出错返回-1
        client = accept(serverSocket, (struct sockaddr*)&clientAddr, (socklen_t*)&addr_len);
        if(client < 0)
        {
            perror("accept");
            continue;
        }

        printf("client---------------------%d\n", client);
    
          
        printf("等待消息...\n");
        //inet_ntoa ip地址转换函数，将网络字节序IP转换为点分十进制IP
        //表达式：char *inet_ntoa (struct in_addr);
        printf("IP is %s\n", inet_ntoa(clientAddr.sin_addr));
        printf("Port is %d\n", htons(clientAddr.sin_port));
        while(1)
        {
            printf("读取消息:");
            buffer[0] = '\0';
            iDataNum = recv(client, buffer, 1024, 0);
            if(iDataNum < 0)
            {
                perror("recv null");
                continue;
            }
            buffer[iDataNum] = '\0';
            if(strcmp(buffer, "quit") == 0)  
            {
                break;
            }
            printf("%s\n", buffer);
            printf("发送消息:");
            // scanf("%s", buffer);
            /**-------------------------------------------**/
            // char buffer[200] = "shggdewfii";
            int i;
            FILE *fp1;
            int n = 1024;
            char* s = int2str(n);
            char buffer[200];//你定义的类型是整形, 长度是5,
            fp1=fopen("test.pcm","rb+");
            if(fp1==NULL)
                {
                    printf("file can not be open \n");
                    exit (1);
                }
            // else 
            //     printf("ok\n");
            memset(buffer, 0, sizeof(buffer));
            fread (&buffer, 32, 5, fp1);//你说32字节, 你写的怎么是40527?
            for (i=0; i <= 2000; i++)
                {
                    // printf("pcm=%s\n",int2str(buffer[i]));
                    send(client, int2str(buffer[i]), strlen(int2str(buffer[i])), 0);
                }
            
            printf("\n");

            /**-------------------------------------------**/
            
            // send(client, buffer, strlen(buffer), 0);
            if(strcmp(buffer, "quit") == 0)
            {    
                break;
            }
        }
        close(serverSocket);
        return 0;
    }
}






char* int2str(const int n)
{
    int absn = abs(n);

    int digit = getDigit(absn) + 1 ;

    char *number = (char *) malloc (digit * sizeof(char));

    int index = 0, difference = 0, realDigit = digit;

    for(; index < digit ; index++ )
    {
        realDigit = realDigit - 1;
        int iDigit = 0;
        if(index == 0)
        {
            iDigit = (absn/ power(10, realDigit ));
            difference = absn % (power(10, realDigit));
        }
        else
        {
            iDigit = (difference/ power(10, realDigit ));
            difference = difference % (power(10, realDigit));
        }

        char c  = {iDigit + '0'};
        char cc[2];
        cc[0] = c;
        cc[1] = '\0';
        number = strcat(number, cc);

    }

    return number;
}


int power(int base, int n)
{
    int result = ERROR;
    int m = 0 ;

    if(base <= 0)
    {
        return result;
    }

    if(n < 0)
    {
        return result;
    }

    result = 1 ;

    for(; m < n; m++)
    {
        result *= base;
    }

    return result;
}


int * getSizeTable()
{
      int * sizeTable  = sizeTable =  (int *) malloc (MAX_INT_DIGIT * sizeof(int));

      int index = 0, digit = 10, sum = 0;
      for( ; index < MAX_INT_DIGIT - 1 ; index++ )
      {
          sum += power(digit, index) * 9;
          *( sizeTable + index ) = sum;
      }

      *(sizeTable + MAX_INT_DIGIT -1 ) = INT_MAX;

      return sizeTable;

}


int getDigit(int nInt)
{
    int result = 0,min = 0, index = 0 ;
    int * sizeTable = getSizeTable();
    for(; index < MAX_INT_DIGIT; index++)
    {
        if(nInt <= *(sizeTable + index))
        {
            result = index;
            break;
        }
    }

    return result;

}