import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  constructor() { }

  @Input() product!: any;
  @Input() description!: string;
  @Input() type: 'horizontal' | 'vertical' = 'vertical';
  @Input() showBuyButton!: boolean;

  ngOnInit(): void {}
}
