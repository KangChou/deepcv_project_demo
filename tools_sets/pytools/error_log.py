import re
import os
import random
import pandas as pd
import numpy as np


def search_fun(file_txt ,feature_name):
    search_cha = []
    with open(file_txt ,"r" ,encoding="utf-8") as f:
        r = f.readlines()
        for line in r:
            line = line.rstrip()
            # print(line[0:2])
            if feature_name in line or " error" in line:
                search_cha.append(line)
    # print(search_cha)
    print("报错行日志总长度：",len(search_cha))
    with open("./error.log", "w",encoding="utf-8") as f:
        for i in search_cha:
            ll = i +'\n'
            f.write(ll)
    print("日志处理完成")
    return search_cha

search_fun("./test.log","fatal error")