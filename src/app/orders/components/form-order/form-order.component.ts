import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  // récupérer le Order du parent
  @Input() init!: Order;
  // déclarer une propriété pour le parent
  @Output() submitted = new EventEmitter();

  // stocker Enum dans states
  public states = Object.values(StateOrder);

  // propriété pour le formulaire
  public form!: FormGroup;

  // order = new Order
  // order = order existant

  constructor(private fb: FormBuilder) {
    // console.log(this.init) /// ??? undefined
  }

  ngOnInit(): void {
    console.log(this.init); ///

    // utiliser .fb.group
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta],
      client: [this.init.client],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    // mettre à jour la bdd avec le nouvel objet
    // envoyer l'objet au parent
    this.submitted.emit(this.form.value); // observable ??
  }
}
