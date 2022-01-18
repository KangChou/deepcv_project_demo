#include <stdio.h>
#include <dlfcn.h>
#include <stdlib.h>
#include <iostream>
using namespace std;
int main()
{
	int a = 0;
	
	void *handle = dlopen("./libadd_c.so", RTLD_LAZY);
	
	if(!handle)
	{
		printf("open lib error\n");
		cout<<dlerror()<<endl;
		return -1;
	}
	
	typedef int (*add_t)(int a, int b);
	add_t add = (add_t) dlsym(handle, "add");
	if(!add)
	{
		cout<<dlerror()<<endl;
		dlclose(handle);
		return -1;
	}
	
	
	a = add(3, 4);
	printf("a = %d\n",a);
	dlclose(handle);
	return 0;
}