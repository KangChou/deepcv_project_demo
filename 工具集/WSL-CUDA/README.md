
安装 Hyper-V、WSL与虚拟机调用NVIDIA-GPU进行深度学习计算


安装 Hyper-V
1、目的是出于在window上安装虚拟机穿透nvidia-gpu进行gpu调用加速。

2、英伟达正式启用GPU虚拟机显卡直通功能: 英伟达宣布，完全支持GeForce GPU直通技术，该技术允许虚拟机从主机上访问GPU
https://blog.csdn.net/weixin_56386428/

虚拟机调用NVIDIA-GPU进行深度学习计算 \
参考解决方法：\
方法1：VMware和Nvidia扩大了联盟，以在VMware的新vSphere 7 Update 2上支持基于Nvidia GPU的应用程序。
vSphere7的升级版将支持新的Nvidia AI Enterprise产品，这是一套支持GPU的企业级AI工具和框架套件。 
加速的应用程序可在VMware虚拟机和容器中运行。

参考：https://www.vmware.com/cn/products/vsphere-hypervisor.html

方法2：上ESXi,显卡直通: \
参考链接：https://blog.csdn.net/zhanxix/article/details/71516316 \
https://blog.csdn.net/weixin_43226231/article/details/103739882

方法3：vmware ubuntu 虚拟机透传gpu
https://www.cnblogs.com/lixinliang/p/14668551.html

方法4：通过 WSL2 和 GPU 半虚拟化技术，开发人员可以在 Windows 上运行 NVIDIA GPU 加速的 Linux 应用程序。开发人员专区提供的技术预览驱动程序包括对 CUDA 和 Direct ML 的支持。此驱动程序可用于Microsoft Windows Insiders Program。会员也可以直接通过 Windows 更新。我们鼓励您尽可能直接通过 Windows Update 程序获取最新的 Windows Insider Program WSL2 

驱动程序
下载地址：https://developer.nvidia.com/cuda/wsl/download

方法5：installing-wsl2
https://docs.nvidia.com/cuda/wsl-user-guide/index.html#ch02-sub03-installing-wsl2

方法6：win11+linux+gpu
https://zhuanlan.zhihu.com/p/460471318

方法7：Win11+WSL+CUDA11.1+cuDNN8.0.5
https://bbs.huaweicloud.com/blogs/293332

方法8：WSL安装CUDA-GPU：https://blog.csdn.net/chongbin007/article/details/123973475?spm=1001.2014.3001.5506

参考链接：https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/

其他参考：VMware Workstation 与 Device/Credential Guard 不兼容.在禁用 Device/Credenti

VMware16下载链接：http://www.downxia.com/downinfo/325403.html
