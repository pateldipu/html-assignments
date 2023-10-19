#include<stdio.h>
main()
{
	char fname[20];
	
	printf("Enter Your Country Name: ");
	scanf("%s",fname);
	
	
	printf("\n your country=%c%c%c",fname[0],fname[1],fname[2]);
	
}