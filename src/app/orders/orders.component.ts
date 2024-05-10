import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orderedItems:any;
  orderedDate: Date;
  shippingDetails: any;
  constructor(private dataService: DataService){
    this.orderedItems = dataService.orderedItems.items;
    this.orderedDate = dataService.orderedItems.orderedDate;
    this.shippingDetails = dataService.orderedItems.shippingDetails;
  }
}
