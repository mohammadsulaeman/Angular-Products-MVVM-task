import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private readonly BASE_URL =
    'https://dummyjson.com/products';

  constructor(
    private http: HttpClient
  ) {}

  getProducts() {
    return this.http.get<any>(
      this.BASE_URL
    );
  }

  getProductById(id: number) {
    return this.http.get<any>(
      `${this.BASE_URL}/${id}`
    );
  }

  searchProducts(keyword: string) {
    return this.http.get<any>(
      `${this.BASE_URL}/search?q=${keyword}`
    );
  }
}