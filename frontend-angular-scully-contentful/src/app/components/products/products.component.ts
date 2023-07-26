import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any | undefined | null;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }
}
