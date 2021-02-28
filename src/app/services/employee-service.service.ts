import { Injectable } from '@angular/core';
import {HttpParams,HttpClient,HttpHeaders} from '@angular/common/http'
import { employeeListModel} from 'src/app/models/employeeListModel'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpClient:HttpClient) { }
  baseUrl:string="https://reqres.in/api/"
  
  employeeList()
  {
    //const opts = { params: new HttpParams({"page": "1"}) };
    let params = new HttpParams();
    params = params.append('page', '1');
    //https://reqres.in/api/users?page=1
    return this.httpClient.get(this.baseUrl+'users',{params: params})
    
  }
  employeeDetails(employeeID:number)
  {
   
    //const opts = { params: new HttpParams({fromString: "_page=1&_limit=10"}) };
    //https://reqres.in/api/users?page=1
    return this.httpClient.get(this.baseUrl+'users/'+ employeeID )
    
  }
}
