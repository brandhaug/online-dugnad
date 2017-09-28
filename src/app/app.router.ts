import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HowComponent} from './components/how/how.component';
import {AboutComponent} from './components/about/about.component';
import {DigitalOrderFormComponent} from './components/digital-order-form/digital-order-form.component';
import {ProductComponent} from './components/product/product.component';
import {TermsComponent} from './components/terms/terms.component';
import {PrivacyComponent} from './components/privacy/privacy.component';
import {OrderSampleComponent} from './components/order-sample/order-sample.component';
import {SystemRequestComponent} from './components/system-request/system-request.component';

export const router: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
}, {
  path: 'tips',
  component: HowComponent
}, {
  path: 'om-oss',
  component: AboutComponent
}, {
  path: 'digital-dugnad',
  component: DigitalOrderFormComponent
}, {
  path: 'produkter/:productId',
  component: ProductComponent
}, {
  path: 'vilkaar-og-betingelser',
  component: TermsComponent
}, {
  path: 'personvern',
  component: PrivacyComponent
}, {
  path: 'gratis-vareprover',
  component: OrderSampleComponent
}, {
  path: 'sett-i-gang',
  component: SystemRequestComponent
}, {
  path: '**',
  redirectTo: ''
}];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
