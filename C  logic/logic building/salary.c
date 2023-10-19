#include<stdio.h>
main()
{
	int salary;
	int s;
	int yearly;
	int total;
	
	
	printf("Enter Your salary: ");
	scanf("%d",&salary);
	
	s=(salary*20)/100;
	
	printf("\n 20% deduct=%d",s);
	
	yearly=s*12;
	
	printf("\n yearly total amount=%d",yearly);
	

	
}