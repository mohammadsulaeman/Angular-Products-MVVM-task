import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

export abstract class ProductRepository {
  abstract getProducts(): Observable<Product[]>;
  abstract getProductById(id: number): Observable<Product>;
  abstract searchProducts(keyword: string): Observable<Product[]>;
}