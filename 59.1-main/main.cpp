#include <iostream>
#include <vector>
#include <fstream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */
using namespace std;
int main(int argc, char** argv) {
	
	   		int wynik=0;

	vector<int> spis;
	
        int wprowadzany;
        
        fstream plik;  //deklaracja zmiennej pliku tekstowego
        
   		plik.open("liczby.txt", ios::in);  //otwarcie pliku
   	     
        for (int i=0; i<1000; i++)
        {
                plik >> wprowadzany;

                spis.push_back(wprowadzany); //TU WSTAW do tablicy nowy rekord
                

			     }
        
	
	            plik.close();  //zamkniecie pliku tekstowego

	

			   
			   
			   
			    for (vector<int>::iterator it = spis.begin(); it != spis.end(); ++it)
        {
            int liczba = *it;
   		 	int ilosc_np=0;
			int pop_np=0;
			bool tak=true;

	    		for (int i=2; i<=spis.size() && tak; i++ ){
					      while (liczba %i ==0 && tak) {
					      	if(i==2)
					      	{
					      		//NIE
					      		tak=false;
							}
					      	else
					      	{
							  if(i!=pop_np)
							  {
							  
					    	   ilosc_np++;
					       
					       	if(ilosc_np>=4)
					       	{
					      		tak=false;
								//NIE
							   }
					   			}

					      // cout<<i<<"  "<<*it<<endl;
					       	}
					       	 liczba/=i;
					       	// cout<<liczba<<",";
		        			}
		        			
		        			
		        			
		        			
    						}
    						if(ilosc_np==3)
    						{
    							//TAK
    							wynik++;
							}
							else
							{
								//NIE
								tak=false;
							}
					
}
        			      
        			       cout << wynik <<endl;



	   
    return 0;
}

