import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductViewModel } from '../../viewmodels/product.viewmodel';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent
  implements OnInit {

  keyword = '';

  constructor(
    public vm: ProductViewModel
  ) {}

  ngOnInit(): void {
    this.vm.loadProducts();
  }

  search(): void {
    if (this.keyword.trim()) {
      this.vm.search(this.keyword);
    } else {
      this.vm.loadProducts();
    }
  }

  showDetail(id: number): void {
    this.vm.loadDetail(id);
  }

  closeDetail(): void {
  this.vm.clearSelectedProduct();
  }

  

  
}