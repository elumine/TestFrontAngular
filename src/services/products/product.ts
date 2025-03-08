export class Product {
    imageId = Math.floor((Math.random()*100));
    price = Math.floor(Math.random()*1000) + 1000;
    rating = Math.random()*4+1;
    oldPrice: number;

    constructor(
        public id: number,
        public name: string) {
            this.oldPrice = Math.floor(this.price * 1.25);
        }
}