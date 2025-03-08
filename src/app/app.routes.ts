import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories-screen/categories.component';
import { CategoryComponent } from './categories-screen/category/category.component';
import { ProductScreenComponent } from './product-screen/product-screen.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/TestFrontAngular/category'
    },
    {
        path: 'TestFrontAngular',
        children: [
            {
                path: 'category',
                component: CategoriesComponent,
            }, {
                path: 'category/:categoryId',
                component: CategoryComponent
            }, {
                path: 'product/:productId',
                component: ProductScreenComponent
            }
        ]
    }
];
