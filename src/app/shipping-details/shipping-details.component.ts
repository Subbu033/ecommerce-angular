import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrl: './shipping-details.component.css'
})
export class ShippingDetailsComponent {
  itemToOrder:any;
  productId:any;
  shippingDetails = new FormGroup({
    name : new FormControl(),
    mobile: new FormControl(),
    address: new FormGroup({
      doornumber: new FormControl(),
      address1: new FormControl(),
      address2: new FormControl(),
      addresstype: new FormControl(),
      pincode: new FormControl(),
    }),
  })
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router){
    this.itemToOrder = this.dataService.itemToOrder;
    this.productId = this.route.snapshot.params['id'];
  }
  onSubmit = (productId:any) => {
    console.log(this.shippingDetails.value);
    this.dataService.buyNow(productId, this.shippingDetails.value);
    //this.dataService.buyNow();
    console.log(this.dataService.itemToOrder);
    this.router.navigateByUrl('/orderConfirmation');

  }
}