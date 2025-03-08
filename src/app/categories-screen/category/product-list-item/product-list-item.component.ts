import { Component, Input, inject } from '@angular/core';
import { Product } from '../../../../services/products/product';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list-item',
  imports: [RouterLink, MatIconModule, NgFor, NgIf],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss'
})
export class ProductListItemComponent {
  @Input() product: Product;
  private _snackBar = inject(MatSnackBar);
  
  get stars() {
    return Array(Math.floor(this.product.rating)).fill(0);
  }

  buy() {
    let snackBarRef = this._snackBar.open('Product purchased', 'Close');
  }
}
