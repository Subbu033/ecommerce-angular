import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cartItems:any[] = [];
  cartCount:number = 0;
  prevCartCount:number = 0;
  cartUpdatedMessage:string = '';
  clickedProduct:any;
  products:any[] = [];
  orderedItems:OrderItems = {
    items: [],
    orderedDate: Date(), 
    shippingDetails: ''
  };
  itemToOrder:any[] = [];
  private cartCountUpdate = new Subject();
  public cartCountUpdateObs$ = this.cartCountUpdate.asObservable();

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  getData(){
    return this.http.get('https://jsonplaceholder.org/posts');
  }
  calculateCartCount = () => {
    this.prevCartCount = this.cartCount;
    this.cartCount = this.cartItems.reduce((totalQty, {qty}) => totalQty + qty, 0);
    if(this.prevCartCount < this.cartCount){
      this.cartUpdatedMessage = 'The item is added to the cart';
    }else{
      this.cartUpdatedMessage = 'The item is removed from the cart';
    }

    this.cartCountUpdate.next(this.cartCount);
  }
  adToCart = (productId:any) => {
    let addedProduct = this.products.find((item:any) => item.id == productId);
    if(addedProduct != undefined){
      if(this.cartItems.length == 0){
        addedProduct.qty = 1;
        this.cartItems.push(addedProduct);
        // this.dataService.cartCount = this.dataService.cartCount + addedProduct.qty;
      }else{
        let index = this.cartItems.findIndex((item) => item.id == productId);
        console.log('The index value is', index);
        //when product is not already in the cart
        if(index == -1){
          addedProduct.qty = 1;
          this.cartItems.push(addedProduct);
          // this.dataService.cartCount = this.dataService.cartCount + addedProduct.qty;
        }else{
          //when product is already in the cart
          this.cartItems[index].qty += 1;
          // this.dataService.cartCount += 1;
        }
      }
    }else{
      alert('Product not available in the catalog')
    }
    this.calculateCartCount();
    // this.getCartItems.emit(this.cartItems);
    // this.getCartCount.emit(this.cartCount);
    this.openSnackBar(this.cartUpdatedMessage);
    
  }
  buyNow = (products:any, shippingDetails:any) => {
    this.orderedItems.orderedDate = new Date();
    this.orderedItems.items = [...products];
    if(this.orderedItems.items.length == 1){
      this.orderedItems.items[0].qty = 1;
    }
    this.orderedItems.shippingDetails = shippingDetails;
    this.cartItems = [];
    this.calculateCartCount();
    console.log('My orders is:', this.orderedItems)
  }
  addItemToOrder = (productId:any) => {
    this.itemToOrder.push(this.products.find((item:any) => item.id == productId));
  }
  addCartItemsToOrder = (items:any) => {
    this.itemToOrder = [...items];
  }
  openSnackBar(message:string) {
    this._snackBar.open(message, 'Close', 
    {
      verticalPosition: 'top',
      duration: 3000
    });
    
  }
}
interface OrderItems {
    items:Array<any>;
    orderedDate:any;
    shippingDetails:any;
  }