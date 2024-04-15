import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orderedItems:any;
  constructor(private dataServie: DataService){
    this.orderedItems = dataServie.orderedItems;
  }
}
