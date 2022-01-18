
rasa部署学习参考：\
[https://blog.csdn.net/AndrExpert/article/details/104328946](https://blog.csdn.net/AndrExpert/article/details/104328946) \
[https://github.com/jiangdongguo/ChitChatAssistant](https://github.com/jiangdongguo/ChitChatAssistant)\
docker pull meadml/cuda10.1-cudnn7-devel-ubuntu18.04-python3.6\
安装cuda10.1+cudnn7+anaconda3+conda create -n py36 python=3.6\
如果考虑GPU则安装：pip install tensorflow-gpu==2.3.0 -i  https://pypi.doubanio.com/simple/  --trusted-host pypi.doubanio.com \
conda install pytorch==1.5.1 torchvision==0.6.1 cudatoolkit=10.1 -c pytorch \

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

```

#附件
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
