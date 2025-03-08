import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { Category } from '../../services/categories/category';
import { CategoryButtonComponent } from './category-button/category-button.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [ CategoryButtonComponent, NgFor ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories: Category[] = [];

  constructor(
    private readonly categoriesService: CategoriesService) {}

  async ngOnInit() {
    this.categories = await this.categoriesService.getCategories();
  }
}
