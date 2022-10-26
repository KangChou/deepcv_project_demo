

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


爬取图片网站风景与人文图：
```python
import requests
from lxml import etree
if __name__ == "__main__":
    url='https://pic.netbian.com/4kfengjing/index_%d.html'
    headers={
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"
    }
    a=eval(input('请输入起始页'))
    b=eval(input('请输入终止页'))
    for num in range(a,b):
        newurl=format(url%num)
        response=requests.get(url=newurl,headers=headers)
        response.encoding='gbk'
        text=response.text
        tree=etree.HTML(text)
        list=tree.xpath('//div[@class="slist"]/ul/li')
        for li in list:
            c_url='https://pic.netbian.com'+li.xpath('./a//@href')[0]
            c_response=requests.get(url=c_url,headers=headers)
            c_text=c_response.text
            c_tree=etree.HTML(c_text)
            c_list=c_tree.xpath('//div[@class="photo-pic"]/a/img/@src')[0]
            lasturl='https://pic.netbian.com'+c_list
            l_response=requests.get(url=lasturl,headers=headers)
            l_response.encoding='gbk'
            name = c_tree.xpath('//div[@class="photo-pic"]/a/img/@alt')[0]
            name=name.encode('iso-8859-1').decode('gbk')
            date=l_response.content
            path = 'D:\\docker2022\\demo20221021\\风景图片\\' + name +'.jpg'# 根据自己需要改这里（name之前）
            with open(path, 'wb') as p:
                p.write(date)
            print(name, '爬取成功')
print('爬取完成')


```
![image](https://user-images.githubusercontent.com/36963108/197927722-8f96a027-9f90-42b0-ac23-f8378c1bb052.png)

