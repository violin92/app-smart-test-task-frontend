import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './model/customer';

@Injectable()
export class CustomerService {

  private customersUrl: string;

  constructor(private http: HttpClient) { 
    this.customersUrl = 'http://localhost:8080/customers';
  }

  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl);
  }
  
  public save(customer: Customer){
    return this.http.post<Customer>(this.customersUrl, customer);
  }

}