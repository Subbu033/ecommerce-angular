import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: any;
  productId:any;
  constructor(private dataService: DataService, private route: ActivatedRoute){
    this.productId = this.route.snapshot.params['id'];
    this.product = this.dataService.products.find((selectedProduct:any) => selectedProduct.id == this.productId);
  }
  adToCart = (productId:any) => {
    this.dataService.adToCart(productId);
  }
  addItemToOrder = (productId:any) => {
    this.dataService.addItemToOrder(productId);
  }
}
