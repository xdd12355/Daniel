#include <iostream>

using namespace std;

int main()
{  
 int ktory=1, i=1, j;
 
 do
 {
    cout <<"Tak bedzie dla i="<<i<<endl;
    j=5;
    do
    {
       cout <<ktory<<". raz. i*j="<<i*j<<endl;
       ++ktory;
       --j;
    }
    while (j>=2);
    cout <<"Tak bylo dla i="<<i<<endl;
   
    i+=2;
 }
 while (i<=10);

 cout <<endl;
 getchar();
 return 0;  
}
