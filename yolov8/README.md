# yolov8
 地址：https://github.com/ultralytics/ultralytics

# 完整复现YOLOv8:包括训练、测试、评估、预测阶段


## 2.1、训练、测试、评估、预测代码适配

```python
from ultralytics import YOLO

# 加载模型
model = YOLO("yolov8n.yaml")  # 从头开始构建新模型
model = YOLO("yolov8n.pt")  # 加载预训练模型（推荐用于训练）

#训练模型
results = model.train(data="coco128.yaml", epochs=3)  
# 在验证集上评估模型性能
results = model.val()  
# 预测图像
results = model("https://ultralytics.com/images/bus.jpg")  
# 将模型导出为 ONNX 格式
success = model.export(format="onnx")  
```

## 2.2、同时开始训练、测试、评估、预测
项目文件菜单：
![在这里插入图片描述](https://img-blog.csdnimg.cn/a11ee2690f8c4e1999db4e75bceb271d.png)

运行代码：截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/c6ec21c3e6c14e9c972984690454abb2.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/241c10348e324a4589c853c7d2493d6f.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/d7a2853ec50947e8a8177ddf9f14d36d.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/34721ae10e99448eb0fdb8b465488596.png)
## 2.3、训练完之后进行预测

```python
!yolo task=detect mode=predict model=runs/detect/train/weights/best.onnx source="https://ultralytics.com/images/bus.jpg"
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/ecf250666d9846f48b39a335ef008263.png)

## 2.4、训练、评估、混淆矩阵、召回曲线等
由于训练的epochs=3，所有效果一般，主要是知道整个效果实现流程。
![在这里插入图片描述](https://img-blog.csdnimg.cn/d236a0d0d6e34bbc9e95a96471efdacc.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/a645b07181774fafae8748b4ab821baf.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/a4506d94f65b45e5843d8b2cda15bf95.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/67d39e8bbe014b629dd243a6f9d40be0.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/756a9e4e37314e8ab8b24e30be42419d.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/97c940cc879e42ac8f09fed2228b5dba.png)
