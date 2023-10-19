#include<stdio.h>
main()
{
	char fname[20];
	char lname[20];
	
	printf("Enter Your First Name: ");
	scanf("%s",fname);
	
	printf("Enter Your Last Name: ");
	scanf("%s",lname);
	
	printf("\n first name = %s",fname);
	printf("\n Last name = %s",lname);
	
	printf("\n your name=%s %s",fname,lname);
	
}