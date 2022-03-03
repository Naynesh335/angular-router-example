import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpDataRequestService {

  
  constructor(private ht:HttpClient) { }

  getdata()
  {
    return this.ht.get("http://192.168.2.169:3000/food");
  }

  
  sendFoot(food:any){

  }
}
