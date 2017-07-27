import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HowComponent} from './components/how/how.component';
import {ServiceComponent} from './components/service/service.component';
import {OrderComponent} from './components/order/order.component';
import {AboutComponent} from './components/about/about.component';
import {DigitalOrderFormComponent} from './components/digital-order-form/digital-order-form.component';

export const router: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
}, {
  path: 'slik-fungerer-det',
  component: HowComponent
}, {
  path: 'personlig-service',
  component: ServiceComponent
}, {
  path: 'bestilling',
  component: OrderComponent
}, {
  path: 'om-oss',
  component: AboutComponent
}, {
  path: 'digitalt-bestillingsskjema',
  component: DigitalOrderFormComponent
}, {
  path: '**',
  redirectTo: ''
}];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
