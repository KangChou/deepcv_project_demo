//头文件
#include <iostream>
#include <sys/types.h>
#include <dirent.h>
#include <vector>
#include <string.h>
 
using namespace std;
// struct dirent
//   {
//     __ino_t d_ino;   /*inode number 索引节点号*/
//     __off_t d_off;   /*offset to this dirent 在目录文件中的偏移*/
//     unsigned short int d_reclen;   /*length of this d_name 文件名长*/
//     unsigned char d_type;   /*the type of d_name 文件类型*/
//     char d_name[256];    /*file name(null-terminated) 文件名 */
//   };
 
void GetFileNames(string path,vector<string>& filenames)
{
    DIR *pDir;
    struct dirent* ptr;
    if(!(pDir = opendir(path.c_str())))  //打开目录
        return;
    while((ptr = readdir(pDir))!=0) {   //读取文件信息
        if (strcmp(ptr->d_name, ".") != 0 && strcmp(ptr->d_name, "..") != 0)
            filenames.push_back(path + "/" + ptr->d_name);
    }
    closedir(pDir);
}
 
int main() {
    vector<string> file_name;
    string path = "/data/test_py/cpp_test_so";
 
    GetFileNames(path, file_name);
 
    for(int i = 0; i <file_name.size(); i++)
    {
        cout<<file_name[i]<<endl;
    }
 
    return 0;
}

// 
// 参考：https://blog.csdn.net/lsq2902101015/article/details/51373911