import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 1.5, '描述一号商品', ['电子产品', '硬件设备']),
      new Product(2, '第二个商品', 2.99, 2.5, '描述二号商品', ['电子产品']),
      new Product(3, '第三个商品', 3.99, 3.5, '描述三号商品', ['硬件设备']),
      new Product(4, '第四个商品', 4.99, 4.5, '描述四号商品', ['图书']),
      new Product(1, '第五个商品', 5.99, 5.5, '描述五号商品', ['电子产品', '硬件设备']),
      new Product(1, '第六个商品', 6.99, 1.5, '描述六号商品', ['电子产品']),
    ];
  }
}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
