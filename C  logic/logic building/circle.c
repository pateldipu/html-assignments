#include<stdio.h>

main()
{
	//find area of circle
	
	//formulaa: pi *r *r
	float pi=3.14;
	int r;
	int area;
	
	printf("Enter Radius :");
	scanf("%d",&r);
	
	area=pi * r* r;
	printf("\n area : %d",area);
}