import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  // déclarer la prop label
  @Input() label!: string; // undefined
  @Input() route!: string;
  @Input() styleBtn!: string;

  constructor() {
    // console.log(this.label); //???? AJOUTER ou UNDEFINED
  }

  // déclenché une seule fois !
  // cycle de vie du composant => suite de méthodes
  // hook
  ngOnInit(): void {
    // console.log(this.label, 'depuis ngOnInit'); // ???
    console.log(this.route, 'depuis ngOnInit'); // ???
  }

  // déclenché plusieurs fois
  ngOnChanges(){
    // on récupère l'info
  }

  ngOnDestroy() {
    // déclenché avant la destruction du composant
    // récupérer des infos > localstorage
  }
}
