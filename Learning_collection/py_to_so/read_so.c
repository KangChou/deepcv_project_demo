//cclTest.c
#include <stdio.h>
#include <dlfcn.h>
 
int main(void) {
	int(*myadd)(int a, int b);
	void *handle;
	handle = dlopen("lib.linux-x86_64-3.8.so", RTLD_LAZY);
	myadd = dlsym(handle, "add");
	//printf(myadd);
	
 
	int result = myadd(1, 2);
 
	dlclose(handle);
        
	// printf("%d\n", result);
}
