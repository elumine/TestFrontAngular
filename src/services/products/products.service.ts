import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = new Array<Product>();

  constructor() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const p = new Product(100*i + j, `Product ${j}`);
        this.products.push(p);
      }   
    }
  }

  async getProductById(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return this.products.find(c => c.id == id) as Product;
  }
}
