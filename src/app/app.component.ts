import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  appName = 'Ng Cart';
  // cartItems:any[] = [];
  // cartCount:number = 0;

  constructor(private dataService: DataService){

  }

  // getCartItems = (items:any) => this.cartItems = items;
  // getCartCount1 = (count:any) => this.cartCount = count;
  
}
