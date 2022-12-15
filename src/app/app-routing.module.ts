import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';

// définir des routes
// route => composant
// route => route (redirection)
// route => module => components
const routes: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },

  // { path: '**', component: PageNotFoundComponent },
  // lazy loading = ne pas charger des composants inutilement
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  // accès à notre tableau de routes
  constructor(private router: Router) {
    console.log(this.router.config, 'tableau de routes');
  }
}
