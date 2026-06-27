import { Injectable } from '@angular/core';
import { ProductRepositoryImpl } from '../../data/repositories/product.repository.impl';

@Injectable({
  providedIn: 'root'
})
export class GetProductsUseCase {

  constructor(
    private repository:
      ProductRepositoryImpl
  ) {}

  execute() {
    return this.repository.getProducts();
  }
}