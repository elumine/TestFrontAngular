import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Product } from '../../services/products/product';
import { ProductsService } from '../../services/products/products.service';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-screen',
  imports: [NgIf, MatCardModule],
  templateUrl: './product-screen.component.html',
  styleUrl: './product-screen.component.scss'
})
export class ProductScreenComponent {

  product: Product;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productsService: ProductsService) {}

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('categoryId'));
    this.product = await this.productsService.getProductById(id);
  }
}
