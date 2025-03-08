import { Component } from '@angular/core';
import { Category } from '../../../services/categories/category';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';
import { CategoriesService } from '../../../services/categories/categories.service';
import { NgFor, NgIf } from '@angular/common';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Product } from '../../../services/products/product';

@Component({
  selector: 'app-category',
  imports: [ NgFor, NgIf, ProductListItemComponent, RouterLink, MatPaginatorModule ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  category: Category;
  productsList = new Array<Product>();
  pagination = {
    count: 0,
    pageSize: 10,
    page: 0
  }
  
  constructor(
    private readonly route: ActivatedRoute,
    private readonly categoriesService: CategoriesService) {}
  
  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('categoryId'));
    this.category = await this.categoriesService.getCategoryById(id);
    this.pagination.count = this.category.productsList.length;
    this.updateProductsList();
  }

  updatePagination(e: any) {
    this.pagination.page = e.pageIndex;
    this.pagination.pageSize = e.pageSize;
    this.updateProductsList();
  }

  updateProductsList() {
    const startIndex = this.pagination.pageSize * this.pagination.page;
    const endIndex = startIndex + this.pagination.pageSize;
    this.productsList = this.category.productsList.filter((p, i) => {
      return i >= startIndex && i < endIndex;
    });
  }
}
