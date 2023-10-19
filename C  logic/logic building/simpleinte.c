#include<stdio.h>
main()
{
	int p,t,r;
	int s;
	
	printf("Enter Your p: ");
	scanf("%d",&p);
	
	printf("Enter Your t: ");
	scanf("%d",&t);
	
	printf("Enter Your r: ");
	scanf("%d",&r);
	
	printf("\n p=%d",p);
	printf("\n t=%d",t);	
	printf("\n r=%d",r);
	
	s= (p*t*r)/100;
	printf("\n S.I=%d",s);
	
}