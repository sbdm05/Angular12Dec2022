import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersRoutingModule } from '../../orders-routing.module';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  // créer un new Order()
  public item: Order = new Order();

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {}

  public onAdd(obj: Order) {
    console.log(obj);
    // appel vers le service avec méthode post
    this.ordersService.add(obj).subscribe((data) => {
      console.log(data);
      // redirection avec Router .navigate
      this.router.navigate(['orders']);
    });
  }
}
