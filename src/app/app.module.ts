import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './order.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrdersComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
