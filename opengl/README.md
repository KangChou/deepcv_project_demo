


```CPP
// test.c
/* light.c
此程序利用GLUT绘制一个OpenGL窗口，并显示一个加以光照的球。
*/
/* 由于头文件glut.h中已经包含了头文件gl.h和glu.h，所以只需要include 此文件*/
# include <GL/glut.h>
# include <stdlib.h>
    
/* 初始化材料属性、光源属性、光照模型，打开深度缓冲区 */
void init ( void )
{
    GLfloat mat_specular [ ] = { 1.0, 1.0, 1.0, 1.0 };
    GLfloat mat_shininess [ ] = { 50.0 };
    GLfloat light_position [ ] = { 1.0, 1.0, 1.0, 0.0 };
    glClearColor ( 0.0, 0.0, 0.0, 0.0 );
    glShadeModel ( GL_SMOOTH );
    glMaterialfv ( GL_FRONT, GL_SPECULAR, mat_specular);
    glMaterialfv ( GL_FRONT, GL_SHININESS, mat_shininess);
    glLightfv ( GL_LIGHT0, GL_POSITION, light_position);
    glEnable (GL_LIGHTING);
    glEnable (GL_LIGHT0);
    glEnable (GL_DEPTH_TEST);
}
/*调用GLUT函数，绘制一个球*/
void display ( void )
{
    glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glutSolidSphere (1.0, 40, 50);
    glFlush ();
}
    
int main(int argc, char** argv)
{
    /* GLUT环境初始化*/
    glutInit (&argc, argv);
    /* 显示模式初始化 */
    glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB | GLUT_DEPTH);
    /* 定义窗口大小 */
    glutInitWindowSize (300, 300);
    /* 定义窗口位置 */
    glutInitWindowPosition (100, 100);
    /* 显示窗口，窗口标题为执行函数名 */
    glutCreateWindow ( argv [ 0 ] );
    /* 调用OpenGL初始化函数 */
    init ( );
    /* 注册OpenGL绘图函数 */
    glutDisplayFunc ( display );
    // /* 进入GLUT消息循环，开始执行程序 */
    glutMainLoop( );
    return 0;
} 


```
运行
```
# 安装opengl
# sudo apt-get install build-essential libgl1-mesa-dev
# sudo apt-get install freeglut3-dev
# sudo apt-get install libglew-dev libsdl2-dev libsdl2-image-dev libglm-dev libfreetype6-dev
# sudo apt update


gcc test.c -o test -lGL -lglut
./test
```
![image](https://user-images.githubusercontent.com/36963108/184524477-b1dbea33-8bfe-4bb6-bdc1-5ee7f35052c0.png)




学习OpenGL:https://github.com/LiQinJun258/LearnOpenGL_LQJ

OpenGL ES 3.0 编程指南:https://github.com/danginsburg/opengles3-book/

Android OpenGL ES 3.0 从入门到精通系统教程学习:https://github.com/githubhaohao/NDK_OpenGLES_3_0

Python+Numpy+OpenGL：快速、可扩展、美观的科学可视化:https://github.com/glumpy/glumpy

OpenGL视频教程：https://www.youtube.com/playlist?list=PL1P11yPQAo7qaq_Ga-XA7TvuB8jyI3Qjh

https://github.com/naseemshah/OpenGLlabs
