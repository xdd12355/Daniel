#include <cstdlib>
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string wyraz ;
    cout << "Podaj wyraz pierwszy" << endl;
    cin >> wyraz;

    for (int i=0; i<wyraz.length()-1; i++)
        for (int j=0; j<wyraz.length()-1; j++)
            if (wyraz[j]>wyraz[j+1])
                swap(wyraz[j], wyraz[j+1]);

    cout << wyraz << endl << endl;
    
    string wyraz2 ;
    cout << "Podaj wyraz drugi" << endl;
    cin >> wyraz2;
    
    for (int i=0; i<wyraz2.length()-1; i++)
        for (int j=0; j<wyraz2.length()-1; j++)
            if (wyraz2[j]>wyraz2[j+1])
                swap(wyraz2[j], wyraz2[j+1]);

    cout << wyraz2 << endl << endl;

    system("PAUSE");
    return 0;
}
