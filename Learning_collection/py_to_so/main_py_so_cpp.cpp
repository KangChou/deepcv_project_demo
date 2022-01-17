//./build/lib.linux-x86_64-3.8/hello.cpython-38-x86_64-linux-gnu.so
//cppcppl1.cpp
#include <stdio.h>
#include <dlfcn.h>
using namespace std;
int main() {
	typedef int(*t_add)(int a, int b);
	void *handle;
	handle = dlopen("./build/lib.linux-x86_64-3.8/hello.cpython-38-x86_64-linux-gnu.so", RTLD_LAZY);
	t_add myadd = (t_add)dlsym(handle, "greet");
 
	int result = greet(1, 2);
 
	dlclose(handle);
 
	printf("%d\n", result);
}
