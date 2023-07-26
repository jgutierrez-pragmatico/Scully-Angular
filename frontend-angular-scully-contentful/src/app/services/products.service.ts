import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any[]>('http://localhost:9000/api/entries');
  }

  getProduct(id: string) {
    return this.http.get(`http://localhost:9000/api/entry/${id}`);
  }
}

