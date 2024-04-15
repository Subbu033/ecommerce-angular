import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  @Input('pageTitle') appName = '';
  // @Input('cartCount') cartCount = 0;
  cartCount:number =0;
  constructor(private dataService: DataService){

  }

  ngOnInit(){
    this.dataService.cartCountUpdateObs$.subscribe((count:any) => {
      this.cartCount = count;
    });
  }
}
