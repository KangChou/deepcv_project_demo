from distutils.core import setup
from Cython.Build import cythonize
setup(ext_modules = cythonize(["hello.py"]))
#setup(ext_modules = cythonize(["hello1.py", "hello2.py","hello3.py"]))
#python setup.py build_ext
#python test_so.py
