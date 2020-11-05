#include <iostream>
#include <fstream>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

using namespace std;
int liczbaRekordow=0;
int liczbaRekordow1=0;
int liczbaRekordow2=0;
int rekord1, rekord2, rekord3;
int main(int argc, char** argv)
{
 ifstream file; //plik wejsciowy
  ifstream file1; //plik wejsciowy
  ifstream file2;
 ofstream fileOut; //plik wynikowy do zapisu
 char* endptr; // to jest wskaŸnik na miejsce, gdzie przy konwersji z systemu czworkowego wyst¹pi b³¹d - nieu¿ywana zmienna
 long licz, max, max1, max2, licz1, licz2; //liczba dziesietna, minimum z pliku
 string liczba1, liczba2, liczba3, liczba4, liczba5, liczba6; //dwie liczby w systemie czworkowym wczytujemy jako "string" bo mog¹ byæ d³u¿sze od long long
 file.open("dane_systemy1.txt"); //otworz plik liczb
  file1.open("dane_systemy2.txt"); //otworz plik liczb
   file2.open("dane_systemy3.txt"); //otworz plik liczb
 fileOut.open("wyjscie1.txt"); //otworz plik do wynikow
 bool pierwszy = true;  //do algorytmu MINIMUM - zak³adamy, ¿e pierwsza liczba jest najmniejsza z dotychczas przeczytanych
 
 if(file.good())  //sprawdzenie czy plik istnieje
     while(!file.eof())        //petla wykonuje sie az program dojedzie do konca pliku
     {
               file>>liczba1 >> liczba2; 
			   licz =  strtol(liczba2.c_str(), &endptr, 4);  // wczyta dwie liczby z pliku (w wierszu) do 2 stringów
               file1>>liczba3 >> liczba4; 
               licz1 = strtol(liczba4.c_str(), &endptr, 4);
               file2>>liczba5 >> liczba6; 
                licz2 = strtol(liczba6.c_str(), &endptr, 4);
               //^konwersja z systemu czworkowego do dziesietnego, string (C++) trzeba zamieniæ na char * (C) funkcja .c_str()
               //zmienna endptr wskazuje na znak w stringu, który nie pasuje do systemu czwórkowego - tu niesprawdzone, bo zak³adamy, ¿e dane s¹ poprawne!
               if(pierwszy) //jeœli to pierwsza liczba z pliku - bêdzie nowym MINIMUM
               {
                            max = licz;
                            max1 = licz1; 
					        max2 = licz2; 
                            pierwszy = false;
               }
               else{
               	bool rekord1 = false;
                  if(licz > max)//... i jest mniejsza od dotychczasowego minimum...
                      {
                      	liczbaRekordow++;
                        rekord1=true;
					  }
					  	bool rekord2 = false;
					  if(licz1 > max1)//... i jest mniejsza od dotychczasowego minimum...
                      {
                      	liczbaRekordow1++;
                      	rekord2=true;
					  }
					  	bool rekord3 = false;
					  if(licz2 > max2)//... i jest mniejsza od dotychczasowego minimum...
                      {
                      	liczbaRekordow2++;
                      rekord3 = true;
					  }
				}
				if (rekord1)
				{
					liczbaRekordow++;
				}
				if (rekord2)
				{
					liczbaRekordow++;
				}
				if (rekord3)
				{
					liczbaRekordow++;
				}
			
					
					   
     }//eof() koniec pliku
 fileOut<< "58.1: " << max <<"-" << liczbaRekordow <<endl;
 fileOut<< "58.1: " << max1 <<"-" << liczbaRekordow1 <<endl;
 fileOut<< "58.1: " << max2 <<"-" << liczbaRekordow2 <<endl; //zapisanie najmniejszej liczby z pliku czworkowego do pliku wynikowego
 file.close();
  file1.close();
   file2.close();
 fileOut.close();
 return 0;
}
