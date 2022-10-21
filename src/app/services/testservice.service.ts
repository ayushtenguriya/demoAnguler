import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {


  constructor(private httpClient: HttpClient) { }

  getComments(): Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/1/comments");
 }

 getAllEmp(): Observable<any>{  
  return this.httpClient.get("http://localhost:8081/get"); 
}

 saveEmp(data: any): Observable<any>{
  return this.httpClient.post("http://localhost:8081/save",data,{responseType: 'text'});
}

 getAllUsers(): Observable<any>{  
  return this.httpClient.get("https://gorest.co.in/public/v2/users"); 
}




}
