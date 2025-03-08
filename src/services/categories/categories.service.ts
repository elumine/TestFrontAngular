import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, from, map, of, timer } from 'rxjs';
import { Category } from './category';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories = new Array<Category>();

  constructor() {
    for (let i = 0; i < 8; i++) {
      const c = new Category(i, `Category ${i}`);
      this.categories.push(c);
      for (let j = 0; j < 100; j++) {
        const p = new Product(100*i + j, `Product ${j}`);
        c.productsList.push(p);
      }   
    }
  }

  async getCategories() {
    return firstValueFrom(
      timer(500)
        .pipe(
          map(
            () => firstValueFrom(of(this.categories))
          )
        )
    );
  }

  async getCategoryById(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return this.categories.find(c => c.id == id) as Category;
  }
}
