#include <iostream>
#include <string>
using namespace std;

int main()
{
    string a;
    string b;
    for (int i=0; i<10;i++)
    {
     cin>> a;
     b+=(a+", ");
    }
       cout << b ;
    return 0;
}
