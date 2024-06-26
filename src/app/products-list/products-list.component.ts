import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { from, take } from 'rxjs';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  // @Output() getCartItems = new EventEmitter;
  // @Output() getCartCount = new EventEmitter;
  // products:productItems[] = [
  //   {
  //     id:1, 
  //     name:'Laptop1', 
  //     description:'adfdfadf', 
  //     imageURL:'../../assets/images/macbook.webp',
  //      qty: 1
  //   },
  //   {
  //     id:2, 
  //     name:'Laptop2', 
  //     description:'adfdfadf', 
  //     imageURL:'../../assets/images/macbook.webp'
  //   },
  //   {
  //     id:3, 
  //     name:'Laptop3', 
  //     description:'adfdfadf', 
  //     imageURL:'../../assets/images/macbook.webp'
  //   },
  //   {
  //     id:4, 
  //     name:'Laptop4', 
  //     description:'adfdfadf', 
  //     imageURL:'../../assets/images/macbook.webp'
  //   },
  // ];
  // cartItems:any[] = [];
  // cartCount:number = 0;
  posts:any;
  productToOrder:any;
  constructor(private dataService: DataService){
    if(this.posts){console.log('Posts if', this.posts)}
    this.dataService.getData().subscribe((data:any)=>{
      let filteredPosts = from(data).pipe(take(10));
      filteredPosts.subscribe((filteredData:any) => {
        this.dataService.products.push(filteredData);
      })
      this.posts = this.dataService.products;
    });
   
  }
  ngOnInit(){
  }
 
  // viewDetails = (productId:any) => {
  //   let clickedProduct = this.dataService.products.find((item:any) => item.id == productId);
  //   this.dataService.clickedProduct = clickedProduct;
  //   console.log('The clicked product is', this.dataService.clickedProduct);
  // }
  adToCart = (productId:any) => {
    this.dataService.adToCart(productId);
  }
  addItemToOrder = (productId:any) => {
    this.dataService.addItemToOrder(productId);
  }
}
// interface productItems {
//   id:number;
//   name:string;
//   description:string;
//   imageURL:string;
//   qty?:number;
// }
