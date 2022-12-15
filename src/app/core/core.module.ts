import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { OrdersModule } from '../orders/orders.module';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent],
  imports: [CommonModule, RouterModule],
  exports: [OrdersModule, HeaderComponent, FooterComponent, NavComponent, IconsModule],
})
export class CoreModule {}
