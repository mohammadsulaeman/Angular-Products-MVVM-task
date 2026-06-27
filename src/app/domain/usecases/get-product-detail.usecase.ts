import { Injectable } from '@angular/core';
import { ProductRepositoryImpl } from '../../data/repositories/product.repository.impl';

@Injectable({
  providedIn: 'root'
})
export class GetProductDetailUseCase {

  constructor(
    private repository:
      ProductRepositoryImpl
  ) {}

  execute(id: number) {
    return this.repository.getProductById(id);
  }
}