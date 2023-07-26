import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: any;
  description!: string;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['productId'];
        console.log(id);
        this.productsService.getProduct(id).subscribe((data: any) => {
          this.description = data.fields.description.content[0].content[0].value;
          this.product = data;
          console.log(data);
        });
      }
    )
  }
}
