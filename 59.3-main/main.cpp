#include <iostream>
#include <fstream>
/* run this program using the console pauser or add your own getch, system("pause") or input loop */
using namespace std;
int wynik = 1;
int liczba = 0;
int moc = 0;
int moc_liczby = 0;
class pliki{
	
	public:
		int wczytaj_z_pliku(const char *nazwa)
		{
			fstream plik;
			if(plik.good())  
            while(!plik.eof())  
                  {
                   
                plik.open(nazwa,ios::in);  
				{
		                plik>>liczba;
				}
                   }
                   
                   plik.close();  
                   
		};
		
		
	
	
	
};

class liczby{

	public:

			
		int rozdzielanie(){
		while (liczba>0)
		{ 
		
		cout<<"liczba-->"<<liczba<<endl;
		int cyfra = liczba %10;
		liczba /= 10;
		wynik = wynik * cyfra;
		cout<<"wynik->"<<wynik<<endl;
		}
			sprawdz();
		};
		
		
		int sprawdz(){
			
		if(wynik>9)
		{	
			dalej();
		}
		else
		{
		
			koniec();
		}
		
		};
		int dalej(){
			moc++;	
			moc_liczby++;
			liczba=wynik;
			wynik=1;	
			return rozdzielanie();	
		};	
		int koniec(){
				moc++;
			moc_liczby++;
			cout<<"KONIEC"<<endl<<endl<<endl<<"MOC----->"<<moc;
		};
		
	
};


class kubelki{
	
	public:
	int kubeczek()
	{
    int moc_liczby[5] = {0,0,0,0,0};
    if(moc == 0)
    {
        moc_liczby[1]++;
    }
    else if(moc == 1)
    {
        moc_liczby[2]++;
    }
    else if(moc == 2)
    {
        moc_liczby[3]++;
    }
    else if(moc == 3)
    {
        moc_liczby[4]++;
    }
    else if(moc == 4)
    {
        moc_liczby[5]++;
    }
	}    

};

int main(int argc, char** argv) {
	pliki x;
	x.wczytaj_z_pliku("a.txt");
	
	liczby y;
	y.rozdzielanie();
	
	
	kubelki z;
	z.kubeczek();
	return 0;
}
