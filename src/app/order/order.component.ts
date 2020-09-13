import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';
import { OrderService } from '../order.service';
import { Customer } from '../shared/customer.model';
import { Order } from '../shared/order.model';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  isValid: boolean = true;
  customerList: Customer[];
  orderModel: Order = new Order();
  orderId: number;

  constructor(private orderService: OrderService,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private route: Router) { }

  ngOnInit(): void {
    this.customerService.GetCustomers().then(res => this.customerList = res as Customer[]);
  }

  checkModel() {

    if (this.orderModel.CustomerId == 0 || this.orderModel.CustomerId == undefined) {
      this.isValid = false;
    }

    return this.isValid;
  }


  refreshForm(form?: NgForm){

    // if(form == null){
    //   form.resetForm();
    // }

    this.orderModel = {
       CustomerId : 0,
       TotalAmount : 0,
       OrderId :0,
       PaymentMethod :"",
       CustomerName :"",
       ItemName :""
    };
  }

  onSubmit(form: NgForm) {

    if (this.checkModel()) {

      this.orderService.SaveOrder(this.orderModel).then(res => {
        this.refreshForm();
        this.toastr.success("The order was created","Success");
       this.route.navigate(["/orders"]);
      })
    }
  }

}
