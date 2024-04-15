import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {path:'products', component:ProductsListComponent},
  {path:'cart', component:CartComponent},
  {path:'orders', component:OrdersComponent},
  {
    path:'products/details/:id', component: ProductDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
