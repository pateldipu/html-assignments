#include<stdio.h>
main()
{
	char fname[20];
	char lname[20];
	
	printf("Enter Your First Name: ");
	scanf("%s",fname);
	
	printf("Enter Your Last Name: ");
	scanf("%s",lname);
	
	printf("\n name = %s",fname,lname);
}