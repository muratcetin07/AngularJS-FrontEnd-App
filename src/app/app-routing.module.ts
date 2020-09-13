import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
    {path:'', redirectTo:'order',pathMatch:'full'},
    {path:'orders',component:OrdersComponent},
    {path:'order',children:[
      {path:'',component:OrderComponent},
      
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
