#include<stdio.h>
main()
{
	char fname[20];
	char lname[20];
	char sname[20];
	
	printf("Enter Your First Name: ");
	scanf("%s",fname);
	
	printf("Enter Your Last Name: ");
	scanf("%s",lname);
	
	printf("Enter Your Last Name: ");
	scanf("%s",sname);
	
	printf("\n first name = %s",fname);
	printf("\n Last name = %s",lname);
	printf("\n sur name = %s",sname);
	
	printf("\n your name=%c. %c. %s",fname[0],lname[0],sname);
	
}