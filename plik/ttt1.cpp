#include <string>
#include <iostream>
#include <fstream>

bool szukajWszystkichFraz( std::string & tekst, std::string szukanaFraza )
{
    size_t znalezionaPozycja = tekst.find( szukanaFraza );
   
    if( znalezionaPozycja != std::string::npos )
         return true;
    else
         return false;
   
}

bool wczytajPlik( std::string nazwaPliku )
{
    bool znaleziono = false;
    std::ifstream plik;
    plik.open( nazwaPliku.c_str() );
    if( !plik.good() )
         return false;
   
    while( plik.good() )
    {
        std::cout << "Podaj tekst ktory chcesz wyszukac\n";
        std::string a;
        std::cin >> a;
        std::string wiersz;
        while( std::getline( plik, wiersz ) )
        if( szukajWszystkichFraz( wiersz, a ) ) {
            std::cout << wiersz << std::endl;
            znaleziono = true;
        }
    }
   
    if( !znaleziono )
         std::cout << "Nie znaleziono" << std::endl;
   
    plik.close();
   
    return true;
}

int main()
{
    if( wczytajPlik( "C:\odczyt.txt" ) != 1 )
         std::cout << "Nie udalo sie otworzyc pliku" << std::endl;
   
    return 0;
}
