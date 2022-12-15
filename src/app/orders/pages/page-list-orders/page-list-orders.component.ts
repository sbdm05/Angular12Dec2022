import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  // transformer enum en tableau
  states = Object.values(StateOrder);

  // ici prop pour stocker data
  public collection!: Order[]; // undefined

  public headers: string[] = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  // 1 - injecter le service
  constructor(private ordersService: OrdersService, private router: Router) {
    // 2 - déclencher la propriété collection
    this.ordersService.collection.subscribe((data) => {
      // placer data dans prop publique
      this.collection = data;
      console.log(this.collection);
    });
  }

  ngOnInit(): void {}

  // remplacée par le Pipe total
  // public total(val: number, coef: number, tva?: number): number {
  //   console.log('déclenché'); // 8 x2 = 16
  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }

  public goToEdit(id: number) {
    // redirection avec Router
    // orders/edit
    this.router.navigate(['orders', 'edit', id]);
  }

  public changeState(obj: Order, event: Event) {
    console.log(event);
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateOrder;
    console.log(state);
    // créer nouvel obj
    const newItem = new Order(obj)
    newItem.state = state
    this.ordersService.update(newItem).subscribe(data=>{
      // mettre à jour obj
      Object.assign(obj, data)
    })

  }
}
