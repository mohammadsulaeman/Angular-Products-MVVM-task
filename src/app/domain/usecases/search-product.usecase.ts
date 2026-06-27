import { Injectable } from '@angular/core';
import { ProductRepositoryImpl } from '../../data/repositories/product.repository.impl';

@Injectable({
  providedIn: 'root'
})
export class SearchProductsUseCase {

  constructor(
    private repository:
      ProductRepositoryImpl
  ) {}

  execute(keyword: string) {
    return this.repository.searchProducts(keyword);
  }
}