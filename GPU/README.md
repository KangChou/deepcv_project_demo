Docker opencvino+ 教程GPU：https: //hub.docker.com/r/openvino/ubuntu20_runtime  

可以在windows11系统下使用GPU推断：中文参考：https://www.ai2news.com/blog/411071/



此 docker 映像验证了以下配置：

如果您的主机系统是带有 WSL2 的 Windows* 10 及更高版本，您可以在 CPU 和 iGPU 目标上的 Docker 映像内运行推理。
要在 CPU 上运行映像，请使用以下命令：
```
docker run -it --rm openvino/ubuntu20_runtime:latest
```
要在 GPU 上运行推理，主机系统需要是 Windows 10 21H2 或 Windows 11，并安装了 30.0.100.9684 或更高版本的Intel iGPU 驱动程序。使用以下命令（自 2022.1.0 版本起可用）：
```
docker run -it --rm --device /dev/dxg --volume /usr/lib/wsl:/usr/lib/wsl openvino/ubuntu20_runtime:latest 
```

如果您的主机系统是 Ubuntu* 20.04，则在 docker 映像内运行的推理可用于 CPU、GPU、Myriad* (NCS2)、HDDL 目标。
默认运行：
```
docker run -it --device /dev/dri:/dev/dri --device-cgroup-rule='c 189:* rmw' -v /dev/bus/usb:/dev/bus/usb --rm openvino/ubuntu20_runtime:latest 
```

如果您只需要 GPU 加速器，请使用以下命令运行映像：
```
docker run -it --device /dev/dri:/dev/dri --rm openvino/ubuntu20_runtime:latest 
```

如果您的主机系统是 Ubuntu 20，请遵循Ubuntu* 20.04 上 OpenCL™ 的英特尔® 图形计算运行时的配置指南。

如果您只需要 Myriad* (NCS2) 加速器，请使用以下命令运行映像：
```
docker run -it --device-cgroup-rule='c 189:* rmw' -v /dev/bus/usb:/dev/bus/usb --rm openvino/ubuntu20_runtime:latest 
```

如果您需要对 HDDL 进行推断，请在主机上设置 HDDL 驱动程序，按照HDDL 设备的配置指南进行操作：
```
docker run -it --rm --device=/dev/ion:/dev/ion -v /var/tmp:/var/tmp openvino/ubuntu20_runtime:latest
```

如果您的主机系统是 macOS*，您可以使用以下命令（仅限 CPU）在 Docker 映像内运行推理：
要运行映像，请使用以下命令：
```
docker run -it --rm openvino/ubuntu20_runtime:latest /bin/bash
```
