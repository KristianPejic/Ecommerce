import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css'],
})
export class ProductCategoryMenuComponent implements OnInit {
  productCategories: ProductCategory[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductCategories();
  }

  getProductCategories(): void {
    this.productService.getProductCategories().subscribe((data) => {
      this.productCategories = data;
      console.log('Product Categories=', data);
    });
  }
}
