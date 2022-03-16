#include <stdio.h>
#include "tools.h"
void hello(int x,int y);
int main()
{
    int x=2,y=2;
    x = x+1;
    y = y+1;
    hello(x,y);
    int adds_mult = add(x,y); 
    printf("adds_mult=%d\n",adds_mult);
    return 0;
}