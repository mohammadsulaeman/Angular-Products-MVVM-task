import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetProductsUseCase } from '../../domain/usecases/get-products.usecase';
import { GetProductDetailUseCase } from '../../domain/usecases/get-product-detail.usecase';
import { SearchProductsUseCase } from '../../domain/usecases/search-product.usecase';

@Injectable({
  providedIn: 'root'
})
export class ProductViewModel {

  products$ = new BehaviorSubject<any[]>([]);
  selectedProduct$ = new BehaviorSubject<any | null>(null);

  constructor(
    private getProductsUseCase:
      GetProductsUseCase,

    private getDetailUseCase:
      GetProductDetailUseCase,

    private searchUseCase:
      SearchProductsUseCase
  ) {}

  loadProducts() {
    this.getProductsUseCase
      .execute()
      .subscribe(result => {
        this.products$.next(result);
      });
  }

  loadDetail(id: number) {
    this.getDetailUseCase
      .execute(id)
      .subscribe(result => {
        this.selectedProduct$.next(result);
      });
  }

  search(keyword: string) {
    this.searchUseCase
      .execute(keyword)
      .subscribe(result => {
        this.products$.next(result);
      });
  }
  clearSelectedProduct(): void {
    this.selectedProduct$.next(null);
  }
}