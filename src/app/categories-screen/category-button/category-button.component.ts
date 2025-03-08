import { Component, Input } from '@angular/core';
import { Category } from '../../../services/categories/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-button',
  imports: [RouterLink],
  templateUrl: './category-button.component.html',
  styleUrl: './category-button.component.scss'
})
export class CategoryButtonComponent {
  @Input() category: Category;

}
