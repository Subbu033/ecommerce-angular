import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  // @Input('cartItems') cartItems:any[] = [];
  // @Input('cartCount') cartCount:number = 0;
  cartItems:any[] = [];
  cartCount:number = 0;
  durationInSeconds = 5;
  constructor(private dataService: DataService){
    this.cartItems = this.dataService.cartItems;
    this.cartCount = this.dataService.cartCount;
  }
  
  ngOnInit(){
    this.dataService.cartCountUpdateObs$.subscribe((count:any) => {
      this.cartCount = count;
    });
  }
  
  updateQty = () => {
    //let itemIndex = this.dataService.cartItems.findIndex((item) => item.id == productId);
    //console.log('before qty update:', this.dataService.cartItems[itemIndex], this.dataService.cartItems[itemIndex].qty);
    //this.dataService.cartItems[itemIndex].qty = $event.target.value;
    //console.log('after qty update:', this.dataService.cartItems[itemIndex].qty);
    this.dataService.calculateCartCount();
    this.dataService.openSnackBar('The item quantity is updated in the cart');
  }
  removeItem = (productId:any) => {
    let itemIndex = this.dataService.cartItems.findIndex((item) => item.id == productId);
    console.log(this.dataService.cartItems, itemIndex);
    this.dataService.cartItems.splice(itemIndex, 1);
    this.dataService.calculateCartCount();
    this.dataService.openSnackBar(this.dataService.cartUpdatedMessage);
    console.log('updated item:', this.dataService.cartItems);
  }
  addCartItemsToOrder = (items:any) => {
    this.dataService.addCartItemsToOrder(items);
  }
}
