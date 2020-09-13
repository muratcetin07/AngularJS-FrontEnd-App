import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { OrderService } from '../order.service';
import { Order } from '../shared/order.model';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderList : Order[];

  constructor(private orderService:OrderService, 
              private toastr : ToastrService
              ) { }

  ngOnInit(): void {
    this.GetOrders();
  }


  GetOrders(){
      this.orderService.GetOrders().then(res =>  this.orderList = res as Order[]);
  }

  OrderDelete(){
    this.toastr.warning("Your order deleted successfuly.","Message");
  }
}
