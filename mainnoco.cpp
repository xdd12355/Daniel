#include <iostream>
#include<fstream>
#include<algorithm>
#include<string>
#include<cstdlib>
 
 
using namespace std;
 
 
 
int main()
{
    
    int ile=0;
 
    string s;
    ifstream we("dane.txt");
    ofstream wy("C:\wyniki6.txt");
    for(int i=0; i<5000; i++)
    {
we>>s;
if(s[0]==s[s.size()-1])ile++;
 
 
    }
 
    cout<<ile<<endl;
 
 
 
    return 0;
}
