import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})

export class OrderConfirmationComponent {
  orderStatus:string = '';
  constructor(private router: Router){
    if(this.router.url.includes('success')){
      this.orderStatus = 'success';
    }else if(this.router.url.includes('failed')){
      this.orderStatus = 'failed';
    }
  }
}
