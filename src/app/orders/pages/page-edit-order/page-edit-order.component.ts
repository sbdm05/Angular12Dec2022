import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  public item!: Order;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    // extraire l'id de l'url
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(typeof id); // ?? string
    // service > méthode getItemById(id)
    this.ordersService.getItemById(id).subscribe((data) => {
      console.log(data);
      // data > item
      this.item = data;
    });
  }

  ngOnInit(): void {}

  public onEdit(obj: Order) {
    // appel service > update
    this.ordersService.update(obj).subscribe(() => {
      // redirection avec Router
      this.router.navigate(['orders']);
    });
  }
}
