#include "cpplib.h"
#include "cpplib_interface.h"
int Add::add(int a,int b){
    return (a+b);
}


int add(int a,int b){
    Add x;
    return x.add(a,b);
}