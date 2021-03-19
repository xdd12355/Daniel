#include <iostream>
#include <stdlib.h>
#include <time.h>

using namespace std;
int tab[10][10];

int main()
{
    srand(time(NULL));
    for(int i=0;i<5;i++)
    {
    	for(int j=0;j<5;j++)
	{
	
        tab[i][j]= rand()%51;
}
}
    for(int i=0;i<5;i++)
    {
    	(int j=0;j<5;j++)
	{
	
        cout << tab[i] << endl;
        cout << tab[j] << endl;
    }
}

    int suma=0;
    for(int i=0;i<10;i++)
    {
    	(int j=0;j<10;j++)
	{
	
        suma+=tab[i];
    }
}
        
   
    cout << "Suma liczb w tablicy wynosi : " << suma;

    return 0;
}

