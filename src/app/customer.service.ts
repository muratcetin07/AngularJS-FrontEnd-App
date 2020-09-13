import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private httpClient: HttpClient) { }

  GetCustomers() {
    var data = this.httpClient.get(environment.apiUrl + '/api/Customer/GetCustomers').toPromise();
    console.log(data);
    return data;
  }
}
