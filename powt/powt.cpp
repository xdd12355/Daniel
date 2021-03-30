#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;
 
int a,b;
int tablica [3];
 
void wczytaj(int tab[])



{
    int i = 0;
    cout<<"podaj 3 cyfry, co najmniej 2 rozne"<<endl;
    do
    
    
    
    
    {
        cin >> tab [i];
        i++;
    } while (i < 3);
}
 
void wylosuj(){
 
   			 a = rand()%3;
   			 b = rand()%3;
    while(tablica[a]==tablica[b]){
        b = rand()%3;
    }
 
}
 
void wypisz(){
	
    cout<<"wylosowane liczby to"<<endl;
    cout<<tablica[a]<<endl<<tablica[b]<<endl;
}
 
 
int main(){
 
    	srand(time(NULL));
    wczytaj(tablica);
    wylosuj();
    wypisz();
 
return 0;
}

