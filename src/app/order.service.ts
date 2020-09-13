import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Order } from './shared/order.model';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  orderModel: Order = new Order();

  constructor(private http: HttpClient) { }

  GetOrders() {
    return this.http.get(environment.apiUrl + '/api/Order/GetOrders').toPromise();
  }

  DeleteOrder(orderId: number) {
    return this.http.delete(environment.apiUrl + '/api/Order/Delete').toPromise();

  }

  SaveOrder(order: Order) {

    this.orderModel.CustomerId = order.CustomerId;
    this.orderModel.TotalAmount = order.TotalAmount;
    this.orderModel.PaymentMethod = order.PaymentMethod;
    this.orderModel.ItemName = order.ItemName;
    // this.orderModel.CustomerName = order.CustomerName;


    var body = {
      OrderDto: this.orderModel    }

    return this.http.post(environment.apiUrl + '/api/Order/Save', this.orderModel ).toPromise();
  }
}
