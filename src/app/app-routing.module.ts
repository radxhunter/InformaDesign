import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListingsComponent } from './components/listings/listings.component';
import { SaleComponent } from './components/sale/sale.component';
import { SelectionComponent } from './components/selection/selection.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'selection',
    component: SelectionComponent
  },
  {
    path: 'listings',
    component: ListingsComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'sale',
    component: SaleComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    outlet: 'd',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
