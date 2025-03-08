import { Product } from "../products/product";

export class Category {

    productsList = new Array<Product>();
    imageId = Math.floor((Math.random()*100));

    constructor(
        public id: number,
        public name: string) {}
}