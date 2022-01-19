github README.md目录生成工具：\
Windows系统生成方法：[https://blog.csdn.net/ITarmi/article/details/111467025](https://blog.csdn.net/ITarmi/article/details/111467025) \
官网下载：[https://github.com/ekalinin/github-markdown-toc.go/releases/tag/1.2.0](https://github.com/ekalinin/github-markdown-toc.go/releases/tag/1.2.0) \

ubuntu(linux)系统生成方法：
```shell
其他版本可以去看原仓库的readme
curl https://raw.githubusercontent.com/ekalinin/github-markdown-toc/master/gh-md-toc -o gh-md-toc
chmod a+x gh-md-toc

在curl后所在的gh-md-toc路径下并找到你的README.md 文件路径即可开始生成目录： 
./gh-md-toc 本地文件路径/GitHub markDown链接
案例：
./gh-md-toc ~/to/path/README.md 
然后生成的目录内容粘贴到README.md开头就可以了。

```

