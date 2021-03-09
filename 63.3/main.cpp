#include <fstream>
#include <cstdlib>
#include <iostream>
#include <vector>
#include <cmath>

using namespace std;



			vector <int> factors(int number)
{
 	vector <int> czynniki;
 	for (int i=2; i<=number; i++)
 	



 {
   while (number %i ==0)
    {
         number /=i;
         czynniki.push_back(i);
    }
 }
 
 
 
 
 return czynniki;
}



   int convert(long long n)
   
   
   
   
{
    int decimalNumber = 0, i = 0, remainder;
    while (n!=0)
    
    
    
    {
        remainder = n%10;
        n /= 10;
        decimalNumber += remainder*pow(2,i);
        ++i;
    }
    
    
    
    
    
    return decimalNumber;
}


class file
{
        ifstream plik;
       
        public:
                void loop(); 
                bool Ile(int number);
};

void file::loop()
{			
			long long liczba=0;
			int ile_czynnikow=0;
			int min=999;
			int max=0;
			plik.open("ciagi.txt", ios::in); 
			if(plik.good()) 
			while(!plik.eof()) 
			      {
			  		plik>>liczba;
			  		int liczba2=convert(liczba);					
					vector <int> czynniki = factors(liczba2);
				    if(czynniki.size()==2)
				    {
				    	ile_czynnikow++;
				    	if(liczba2<min)
				    	{
				    		min=liczba2;
						}
						
						if(liczba2>max)
						{
							max=liczba2;
						}
					}
      
      
      
      
					liczba=0;

					}
				

			   cout<<"czynniki="<<ile_czynnikow<<endl;
			   
			   cout<<"max="<<max<<endl;
			   
			   cout<<"min="<<min;
			     plik.close(); 

}

int main()
{
        file a;
        a.loop();
        return 0;
}
