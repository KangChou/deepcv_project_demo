

python网络爬虫汽车之家汽车高清图片

ck:
- https://blog.csdn.net/hwwaizs/article/details/120734713
- https://blog.csdn.net/weixin_49572581/article/details/108228588

```python
import os
import requests
from bs4 import BeautifulSoup#导入模块
# pip3 install Beautifulsoup4

if not os.path.exists('./红旗H9'):
    os.mkdir('./红旗H9')#如果没有红旗H9文件就创建一个红旗H9文件

url = "https://car.autohome.com.cn/photolist/series/5566/1/p1/?pvareaid=101197"
response = requests.get(url=url).text#发送网页请求

soup = BeautifulSoup(response,'lxml')#解析网页
img_lists = soup.findAll("img")#寻找网页所有img标签
#进行遍历
for img_list in img_lists:
    img_url1 = img_list.get("src")#获取img标签中的src标签
    img_url2 = img_list.get("src2")#获取img标签中的src2标签
    img_urls = ""
    #print(img_url1)
    #进行判断，取出汽车外观图片
    if "_autohomecar__" in str(img_url1):
        img_urls = img_url1
    if "_autohomecar__" in str(img_url2):
        img_urls = img_url2

    big_img_urls = img_urls.replace("240x180_0_q95_c42_", "")#图片网址小尺寸比例去掉，
    img_src = "https:" + big_img_urls#拼接成完整的图片地址

    img_name = img_src.split('/')[-1]#切片命名
    img_data = requests.get(url=img_src).content#请求图片数据
    img_path = '红旗H9/' + img_name#路径
    #下载高清图片
    with open(img_path,'wb') as fp:
        fp.write(img_data)
        print(img_name,"下载完成")



```
