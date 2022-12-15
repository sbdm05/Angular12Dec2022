import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta!: string; // null
  client!: string;
  comment!: string;
  id!: number;
  constructor(obj?: Partial<Order>) {
    // créer un nouvel objet
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
// ! => pas initialisé
// new Order({obj complet})
// new Order()
// new Order({tjmHt: 1300})
