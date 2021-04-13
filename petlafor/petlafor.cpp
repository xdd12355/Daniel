#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int wylosujLiczby( int tab[], int licz_elem )
{
    for( int i = 0; i < licz_elem; i++ )
    {
        tab[ i ] =( rand() % 21 ) + 10;
    }
   
    return 0;
}

int wypiszTablice( int tab[], int licz_elem )
{
    for( int i = 0; i < 10; i++ )
    {
        cout << "tablica[ " << i << " ] = " << tab[ i ] << endl;
    }
   
    return 0;
}

int main()
{
    srand( time( NULL ) );
    int tablica[ 10 ];
    wylosujLiczby( tablica, 10 );
    wypiszTablice( tablica, 10 );
    cout << endl;
    
    return 0;
}

