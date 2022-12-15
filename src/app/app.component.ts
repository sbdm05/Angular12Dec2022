import { Component } from '@angular/core';

// decorator
// métas datas = balise <head>
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crm';
  // props et méthodes
  public open: boolean = true;

  public onClick() {
    console.log('cliqué');
    // inverser la valeur avec !
    this.open = !this.open;
    console.log(this.open);

  }
} // ne rien écrire après
