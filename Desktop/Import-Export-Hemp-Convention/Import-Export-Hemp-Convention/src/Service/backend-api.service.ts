import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  private baseUrlGetDataUser = 'https://jsonplaceholder.typicode.com/users';
  //private baseUrlConventionData = 'http://164.115.28.105/FDA_NCT_LICENSE_SERVICE/Home/GET_HEMP_LIST';
  private baseUrlConventionData = 'https://localhost:44382/Home/GET_HEMP_LIST';

 

  //private baseUrlConventionInsert = 'http://164.115.28.105/FDA_NCT_LICENSE_SERVICE/Home/INS_DATA';
  private baseUrlConventionInsert = 'https://localhost:44382/Home/INS_DATA';


  private baseUrlAddData = 'https://jsonplaceholder.typicode.com/users';

  //return this.http.get<Array<any>>(this.baseUrlGetAllListProgessDataByProcessId + "/" + process_id);

  GetAllUser(){
    return this.http.get<Array<any>>(this.baseUrlGetDataUser);
  } 

  GetConventionData(){
    return this.http.get<Array<any>>(this.baseUrlConventionData);
  }


 


  AddData(M_IDENTIFY){
   //alert(M_IDENTIFY)
   let headers = new HttpHeaders();
  //  headers = headers.set('Content-Type', 'application/json; charset=utf-8');

  //var body = JSON.stringify(M_IDENTIFY);
 
  var headerOptions = new Headers({'Content-Type':'application/json'});

   return this.http.post(this.baseUrlConventionInsert,  M_IDENTIFY );
   
    //return this.http.post<any>(this.baseUrlConventionInsert,M_IDENTIFY);
    
    //return "{ok}";
    //eturn this.http.post<AdditiveSynonyms>(this.baseUrlAddSynonym, AddSynonym)
     
  }

  // AddDescriptionFunctional(AddDes: Functional2) {
  //   return this.http.post<Functional2>(this.AddDescription, AddDes)
  // }

}

interface AdditiveSynonyms {
  IDENTIFY: string;
  IDENTIFY2: string;
  IDENTIFY3: string;
  // IDA
  // foods_code: string;
  // foods_name: string;
  // foods_description_th: string;
  // foods_description_en: string;
  // parent_id: number;
  // parent_id_1: number;
  // parent_id_2: number;
  // parent_id_3: number;
}

  
interface CONVENTION {
   
  //syslctaddr_thanameplace: string;
  BSN_NAME_LASTNAME: string;
  //IDENTIFY: string;
 
  
 
}

