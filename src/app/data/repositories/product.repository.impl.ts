import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { ProductRepository } from '../../domain/repositories/product.repository';
import { ProductApiService } from '../services/product-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryImpl
  extends ProductRepository {

  constructor(
    private api: ProductApiService
  ) {
    super();
  }

  getProducts() {
    return this.api.getProducts().pipe(
      map(response => response.products)
    );
  }

  getProductById(id: number) {
    return this.api.getProductById(id);
  }

  searchProducts(keyword: string) {
    return this.api.searchProducts(keyword).pipe(
      map(response => response.products)
    );
  }
}