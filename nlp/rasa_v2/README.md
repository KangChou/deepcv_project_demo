目录
=================

* [rasa部署](#rasa部署)
   * [anaconda3环境配置安装rasa](#anaconda3环境配置安装rasa)
   * [使用虚拟环境安装与配置](#使用虚拟环境安装与配置)
   * [测试rasa助手](#测试rasa助手)
   * [安装其他依赖](#安装其他依赖)
* [训练模型](#训练模型)
   * [测试数据集来源：](#测试数据集来源)
   * [使用MITIE](#使用mitie)
   * [使用Supervised_Embedding](#使用supervised_embedding)
   * [使用MITIE+Supervised_Embedding](#使用mitiesupervised_embedding)
* [运行服务测试rasa](#运行服务测试rasa)
   * [1）启动Rasa服务](#1启动rasa服务)
   * [2）启动Action服务](#2启动action服务)
   * [3）启动server.py服务](#3启动serverpy服务)
* [rasa微调模型](#rasa微调模型)
* [附件](#附件)
   * [安装poetry](#安装poetry)
 
Rasa工作原理
![./images/rs.png](./images/rs.png)
```shell
首先，将用户输入的Message传递到Interpreter(Rasa NLU模块)，该模块负责识别Message中的"意图(intent)“和提取所有"实体”(entity)数据；
其次，Rasa Core会将Interpreter提取到的意图和识别传给Tracker对象，该对象的主要作用是跟踪会话状态(conversation state)；
第三，利用policy记录Tracker对象的当前状态，并选择执行相应的action，其中，这个action是被记录在Track对象中的；
最后，将执行action返回的结果输出即完成一次人机交互。
参考：https://blog.csdn.net/AndrExpert/article/details/104328946


```

rasa官方文档使用说明：[https://rasa.com/docs/rasa/command-line-interface](https://rasa.com/docs/rasa/command-line-interface) 

# rasa部署
参考资料：\
[https://blog.csdn.net/AndrExpert/article/details/104328946](https://blog.csdn.net/AndrExpert/article/details/104328946) \
[https://github.com/jiangdongguo/ChitChatAssistant](https://github.com/jiangdongguo/ChitChatAssistant)\
docker pull meadml/cuda10.1-cudnn7-devel-ubuntu18.04-python3.6\
安装cuda10.1+cudnn7+anaconda3+conda create -n py36 python=3.6\
如果考虑GPU则安装：pip install tensorflow-gpu==2.3.0 -i  https://pypi.doubanio.com/simple/  --trusted-host pypi.doubanio.com \
conda install pytorch==1.5.1 torchvision==0.6.1 cudatoolkit=10.1 -c pytorch 

关于构建docker容器的方法与教程直接参考我的博客文章即可：[https://blog.csdn.net/weixin_41194129/category_11178137.html](https://blog.csdn.net/weixin_41194129/category_11178137.html)

## anaconda3环境配置安装rasa
```shell
anaconda3镜像源：终端输入
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/c
conda config --set show_channel_urls yes
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/


开始安装：
如果不考虑GPU则安装：pip install tensorflow==2.6.2 -i  https://pypi.doubanio.com/simple/ --trusted-host pypi.doubanio.com 
pip --default-timeout=1000 install rasa # 安装时间可能会很长，可以考虑下面的安装方式或安装其他官方需要是依赖。
pip --default-timeout=500 install -U rasa -i  https://pypi.doubanio.com/simple/ --trusted-host pypi.doubanio.com
补充：指定安装版本：pip install rasa==1.9.5  #对应tensorflow2.2

生成文件
$ sudo rasa init --no-prompt

旧版(含有requirements.txt)从源码安装：
git clone https://github.com/RasaHQ/rasa.git
cd rasa
pip install -r requirements.txt -i https://pypi.doubanio.com/simple/ --trusted-host pypi.doubanio.com
pip install -e .

新版：如果要使用 Rasa Open Source 的开发版，可以从 GitHub 获取：
apt install curl git
pip install httpx  && pip install --upgrade httpx
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python
或
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/install-poetry.py | python -
如果提示安装成功了却无法使用，则使用命令升级：pip install --upgrade poetry 
pip install poetry pytest-sanic==1.1.0
git clone https://github.com/RasaHQ/rasa.git
cd rasa
poetry install

make编译安装：cd rasa
export PYTHONIOENCODING=utf-8;make install

```

验证是否安装成功：
```shell
Python 3.6.8 (default, Dec  8 2021, 21:08:43) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import rasa
>>> rasa.__version__
'2.8.21'

```

使用功能命令说明：
```shell
rasa init	使用示例训练数据、操作和配置文件创建一个新项目。
rasa train	使用您的 NLU 数据和故事训练模型，将训练后的模型保存在./models.
rasa interactive	通过与您的助手聊天来启动交互式学习会话以创建新的训练数据。
rasa shell	加载您训练的模型并让您在命令行上与您的助手交谈。
rasa run	使用经过训练的模型启动服务器。
rasa run actions	使用 Rasa SDK 启动操作服务器。
rasa visualize	生成故事的可视化表示。
rasa test	在任何以test_.
rasa data split nlu	对 NLU 训练数据执行 80/20 拆分。
rasa data convert	在不同格式之间转换训练数据。
rasa data migrate	将 2.0 域迁移到 3.0 格式。
rasa data validate	检查域、NLU 和对话数据是否存在不一致。
rasa export	将对话从跟踪器存储导出到事件代理。
rasa evaluate markers	从现有跟踪器存储中提取标记。
rasa x	以本地模式启动 Rasa X。
rasa -h	显示所有可用的命令

```


## 使用虚拟环境安装与配置

```shell
如果自带python3.6就无需安装直接安装rasa相关模块即可 。
sudo apt-get install openssl libssl-dev
sudo wget https://www.python.org/ftp/python/3.6.8/Python-3.6.8.tgz
sudo tar xzf Python-3.6.8.tgz
cd Python-3.6.8
sudo ./configure --with-ssl --enable-optimizations
sudo make
sudo make install
如果需要使用其他版本，也是通过以下两个命令实现，只是python3.6改成其他版本
sudo rm /usr/bin/python
sudo ln -s /usr/local/bin/python3.6 /usr/bin/python
生成pip快捷方式，以支持pip命令
rm /usr/bin/pip
sudo ln -s /usr/local/bin/pip3 /usr/bin/pip
sudo apt-get update
sudo sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list
sudo apt update --fix-missing

安装pipEnv，即创建虚拟环境
# 安装virtualenv
sudo pip install virtualenv
# 创建virtualenv快捷方式
# 如果不清楚virtualenv路径，可使用"find / -name virtualenv"命令查询
sudo ln -s /usr/local/python3/bin/virtualenv /usr/bin/virtualenv
# 查看是否安装成功
sudo virtualenv --version
# 如果已经存在pip.conf文件，只需要执行第二步即可
sudo mkdir ~/.pip
sudo vim ~/.pip/pip.conf

创建新的项目，运行在python虚拟环境
sudo mkdir chitchat_assistant
cd chitchat_assistant
sudo virtualenv env
sudo source env/bin/activate
如果不适用则：sudo deactivate

安装rasa，自动生成rasa项目所需文件
# 安装rasa, 由于网络问题，延长超时时间
# 如果仍然超时异常，多执行几次
sudo pip --default-timeout=500 install -U rasa
pip install colorama
# 生成文件
sudo apt-get install language-pack-zh-hans
export PYTHONIOENCODING=utf-8;rasa init --no-prompt
``` 

## 测试rasa助手


```shell
使用下面是utf-8编码：
export PYTHONIOENCODING=utf-8;rasa init --no-prompt
```
![./images/rasa.png](./images/rasa.png)

最后在指定路径下生成相应demo模型： 
```shell
Epochs:   0%|                                                                                                                                           | 0/100 [00:00<?, ?it/s]/usr/local/lib/python3.6/dist-packages/tensorflow/python/framework/indexed_slices.py:449: UserWarning: Converting sparse IndexedSlices(IndexedSlices(indices=Tensor("gradients/cond_grad/Identity_1:0", shape=(None,), dtype=int64), values=Tensor("gradients/cond_grad/Identity:0", shape=(None,), dtype=float32), dense_shape=Tensor("gradients/cond_grad/Identity_2:0", shape=(1,), dtype=int32))) to a dense Tensor of unknown shape. This may consume a large amount of memory.
  "shape. This may consume a large amount of memory." % value)
/usr/local/lib/python3.6/dist-packages/tensorflow/python/framework/indexed_slices.py:449: UserWarning: Converting sparse IndexedSlices(IndexedSlices(indices=Tensor("gradients/cond_1_grad/Identity_1:0", shape=(None,), dtype=int64), values=Tensor("gradients/cond_1_grad/Identity:0", shape=(None,), dtype=float32), dense_shape=Tensor("gradients/cond_1_grad/Identity_2:0", shape=(1,), dtype=int32))) to a dense Tensor of unknown shape. This may consume a large amount of memory.
  "shape. This may consume a large amount of memory." % value)
Epochs: 100%|██████████████████████████████████████████████████████████████████████████████████████████████████| 100/100 [00:13<00:00,  7.45it/s, t_loss=1.94, loss=1.77, acc=1]
2022-01-18 10:15:52 INFO     rasa.core.agent  - Persisted model to '/tmp/tmpz1aw5sb3/core'
Core model training completed.
Your Rasa model is trained and saved at '/Python-3.6.8/models/20220118-101454.tar.gz'.
If you want to speak to the assistant, run 'rasa shell' at any time inside the project directory.


```
你也可以训练一个初始模型，并在下面的命令行上与你训练好的助手聊天.\
测试上述模型：sudo rasa shell
![./images/shell.png](./images/shell.png) 

一般情况下如果不指明路径基本上是在root目录下：
```
.
├── actions
│   ├── __init__.py
│   └── actions.py
├── config.yml
├── credentials.yml
├── data
│   ├── nlu.yml
│   └── stories.yml
├── domain.yml
├── endpoints.yml
├── models
│   └── <timestamp>.tar.gz   
└── tests
   └── test_stories.yml
```
 

## 安装其他依赖
安装Mitie和Jieba
```shell
# 在线安装Mitie
pip install git+https://github.com/mit-nlp/MITIE.git
pip install rasa[mitie]  # 注：由于第一步始终没成功过，没尝试过这个命令的意义
pip install slack
pip install slackclient
pip install pipenv

或者，从Pycharm的命令终端进行Mitie源码根目录，执行下面的命令：
python setup.py build
python setup.py install

# 安装Jieba中文分词
pip install jieba -i https://pypi.doubanio.com/simple/ --trusted-host pypi.doubanio.com 

 

```
# 训练与测试模型

## 创建与训练数据的标注
使用Rasa创建训练数据有多种方法。你可以使用交互模式、YAML文件或rasax进行训练。通过和你的助手聊天来创建新的训练数据,要启动交互式会话，请键入：rasa interactive(只需属于文本，输入意图标签即可进行标注)。\
这里有demo展示[https://zhuanlan.zhihu.com/p/386741364](https://zhuanlan.zhihu.com/p/386741364)，本文就不再介绍。文章中，你可以在和你的助手谈话的时候标注你的问题的意图，并根据你的意图选择正确的回答！请注意，每个响应都应该以单词utter_开头。

你还可以指定位置可视化进行交互式对话：http://localhost:5006/visualization.html，并同时运行rasa interactive。

以上标注之后，你应该可以在nlu.yml文件中看到新的意图，在thestories.yml中看到新的文本story故事，在domain.yml文件中看到新的响应.

添加YAMLFile数据:你还可以直接将数据添加到YAML文件中，或者更改任何你不喜欢的信息。你可以按照上面的格式添加新的故事、意图和响应。完成之后使用命令rasa data validate来验证添加的数据是否都一致。

添加更多训练数据后，你可以通过运行以下命令开始训练数据：rasa train，也可以同时可视化观看：rasa visualize，并且将在当前目录中生成graph.html文件，可以直接使用google浏览器打开。如果你喜欢在浏览器上训练和与助手交谈，请使用Rasa X [https://rasa.com/docs/rasa-x/](https://rasa.com/docs/rasa-x/)。

## 测试数据集来源：
[https://github.com/crownpku/Rasa_NLU_Chi.git](https://github.com/crownpku/Rasa_NLU_Chi.git) \
[https://github.com/FengXMGeek/rasa_nlu_chinese_example](https://github.com/FengXMGeek/rasa_nlu_chinese_example) 

参考来源：https://github.com/jiangdongguo/ChitChatAssistant \
打开命令终端执行下面的命令，该命令会同时训练NLU和Core模型。

## 使用MITIE 

数据集下载地址：[https://download.csdn.net/download/weixin_41194129/76638094](https://download.csdn.net/download/weixin_41194129/76638094)
```bash
python -m rasa train --config configs/config.yml --domain configs/domain.yml --data data/
```
![./images/loss.png](./images/loss.png) 

以上训练可能会出现如下问题：
```shell
Training Core model...
InvalidPolicyConfig: Module for policy 'KerasPolicy' could not be loaded. Please make sure the name is a valid policy.

```
这是因为Keras 策略在 Rasa 2.0 中已被弃用，而是使用 TED 策略。您需要在config.yml文件中修改它。\
您可以在此处找到支持的策略的完整列表:[https://rasa.com/docs/rasa/policies/](https://rasa.com/docs/rasa/policies/) \
解决方法来源：\
[https://stackoverflow.com/questions/64763339/](https://stackoverflow.com/questions/64763339/invalidpolicyconfig-module-for-policy-keraspolicy-could-not-be-loaded-please) 

```shell
config.yml
recipe: default.v1
language:  # your language
pipeline:
  # - <pipeline components>

policies:
  - name: MemoizationPolicy
  - name: TEDPolicy
    max_history: 5
    epochs: 200
  - name: RulePolicy
```

因此config.yml修改内容如下：
```
language: "zh"

pipeline:
- name: "MitieNLP"
  model: "data/total_word_feature_extractor_zh.dat"
- name: "JiebaTokenizer"
  dictionary_path: "data/dict"
- name: "MitieEntityExtractor"
- name: "EntitySynonymMapper"
- name: "RegexFeaturizer"
- name: "MitieFeaturizer"
- name: "SklearnIntentClassifier"

policies:
  - name: MemoizationPolicy
  - name: TEDPolicy
    epochs: 500
    max_history: 5
  - name: FallbackPolicy
    fallback_action_name: 'action_default_fallback'
  - name: MemoizationPolicy
    max_history: 5
  - name: FormPolicy
```
再次执行训练，结果如下：
![./images/train.png](./images/train.png)  

测试上述训练好的模型：
```
CUDA_VISIBLE_DEVICES='-1';export PYTHONIOENCODING=utf-8;rasa shell

```
![./images/test.png](./images/test.png)  




训练完成后会得到models文件，然后开启服务测试即可：python3 -m rasa_nlu.server --path models1 \
详细参考这里:[https://zhuanlan.zhihu.com/p/61059086](https://zhuanlan.zhihu.com/p/61059086)

## 使用Supervised_Embedding
```bash
python -m rasa train --config configs/zh_jieba_supervised_embeddings_config.yml --domain configs/domain.yml --data data/

```
## 使用MITIE+Supervised_Embedding
```bash
python -m rasa train --config configs/zh_jieba_mitie_embeddings_config.yml --domain configs/domain.yml --data data/
```

# 运行服务测试rasa
记得安装：pip install flask
## 1）启动Rasa服务

 在命令终端，输入下面命令：
```shell
# 启动rasa服务
# 该服务实现自然语言理解(NLU)和对话管理(Core)功能
# 注：该服务的--port默认为5005，如果使用默认则可以省略
python -m rasa run --port 5005 --endpoints configs/endpoints.yml --credentials configs/credentials.yml --debug
```
## 2）启动Action服务

在命令终端，输入下面命令：
```shell
# 启动action服务
# 注：该服务的--port默认为5055，如果使用默认则可以省略
Python -m rasa run actions --port 5055 --actions actions --debug 
```
## 3）启动server.py服务
```shell
python server.py
当Rasa Server、Action Server和Server.py运行后，在浏览器输入测试：

http://127.0.0.1:8088/ai?content=查询广州明天的天气
```
终端调用效果为：



# rasa可视化

```shell
rasa visualize -s data/core/common.story.yml 
```


# rasa微调模型
使用rasa train --finetune 已训练的模型初始化管道，并在包含其他训练示例的新训练数据集上进一步对其进行微调。这将有助于减少新模型的训练时间。

默认情况下，该命令会选择models/目录中的最新模型。如果您有想要改进的特定模型，您可以通过运行来指定路径rasa train --finetune <path to model to finetune>。

与从头开始训练相比，微调模型通常需要更少的 epoch 来训练机器学习组件，例如DIETClassifier 。要么使用模型配置进行微调，它定义了比以前更少的时期，要么使用标志 。

将使用模型配置文件中为每个机器学习组件指定的一小部分时期。例如，如果配置为使用 100 个 epoch，则指定将仅使用 50 个 epoch 进行微调。ResponseSelectorTEDPolicy--epoch-fraction--epoch-fractionDIETClassifier--epoch-fraction 0.5

rasa train nlu --finetune您还可以分别使用和微调仅 NLU 或仅对话管理模型 rasa train core --finetune。


微调模型，必须满足以下条件：
```shell

1、提供的配置应该与用于训练正在微调的模型的配置完全相同。您可以更改的唯一参数是epochs单个机器学习组件和策略。

2、训练基本模型的标签集（意图、动作、实体和槽）应该与用于微调的训练数据中的标签集完全相同。
这意味着您无法在增量训练期间向训练数据添加新的意图、操作、实体或槽标签。
您仍然可以为每个现有标签添加新的训练示例。如果您在训练数据中添加/删除了标签，则需要从头开始训练管道。

3、MINIMUM_COMPATIBLE_VERSION要微调的模型使用当前安装的 rasa 版本进行训练。


```


# 附件

## 安装poetry
查看poetry是否安装成功：export PYTHONIOENCODING=utf-8;poetry
```
export PYTHONIOENCODING=utf-8;poetry 

Poetry version 1.1.12

USAGE
  poetry [-h] [-q] [-v [<...>]] [-V] [--ansi] [--no-ansi] [-n] <command> [<arg1>] ... [<argN>]

ARGUMENTS
  <command>              The command to execute
  <arg>                  The arguments of the command

GLOBAL OPTIONS
  -h (--help)            Display this help message
  -q (--quiet)           Do not output any message
  -v (--verbose)         Increase the verbosity of messages: "-v" for normal output, "-vv" for more verbose output and
                         "-vvv" for debug
  -V (--version)         Display this application version
  --ansi                 Force ANSI output
  --no-ansi              Disable ANSI output
  -n (--no-interaction)  Do not ask any interactive question

AVAILABLE COMMANDS
  about                  Shows information about Poetry.
  add                    Adds a new dependency to pyproject.toml.
  build                  Builds a package, as a tarball and a wheel by default.
  cache                  Interact with Poetry's cache
  check                  Checks the validity of the pyproject.toml file.
  config                 Manages configuration settings.
  debug                  Debug various elements of Poetry.
  env                    Interact with Poetry's project environments.
  export                 Exports the lock file to alternative formats.
  help                   Display the manual of a command
  init                   Creates a basic pyproject.toml file in the current directory.
  install                Installs the project dependencies.
  lock                   Locks the project dependencies.
  new                    Creates a new Python project at <path>.
  publish                Publishes a package to a remote repository.
  remove                 Removes a package from the project dependencies.
  run                    Runs a command in the appropriate environment.
  search                 Searches for packages on remote repositories.
  self                   Interact with Poetry directly.
  shell                  Spawns a shell within the virtual environment.
  show                   Shows information about packages.
  update                 Update the dependencies as according to the pyproject.toml file.
  version                Shows the version of the project or bumps it when a valid bump rule is provided.

poetry --version
Poetry version 1.1.12

如果不使用则卸载：
pip uninstall poetry
curl -sSL https://install.python-poetry.org | python3 - --uninstall
curl -sSL https://install.python-poetry.org | POETRY_UNINSTALL=1 python3 -
```

## 训练时可能存在的问题

```
/data/ChitChatAssistant# 

python -m rasa train --config configs/config.yml --domain configs/domain.yml --data data/
```

![./images/er.png](./images/er.png)  \
解决方法：修改config/domail.yml文件. 添加配置参数即可：utter_ask_email_send和utter_greet\
参考来源：[https://stackoverflow.com/questions/55766215/rasa-core](https://stackoverflow.com/questions/55766215/rasa-core-can-not-access-action-templatename-as-that-name-is-not-a-registered)




