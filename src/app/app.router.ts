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
import {ContactMeComponent} from './components/contact-me/contact-me.component';
import {RussComponent} from './components/russ/russ.component';
import {SchoolComponent} from './components/school/school.component';
import {CustomPreloadingStrategy} from './custom-preloading-strategy';
import {LoginComponent} from './components/login/login.component';
import {ShopComponent} from './components/shop/shop.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {AdminComponent} from './components/admin/admin.component';

export const router: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent,
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
  path: 'produkter/:productUrl',
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
  path: 'kontakt-meg',
  component: ContactMeComponent
}, {
  path: 'russ',
  component: RussComponent
}, {
  path: 'skole',
  component: SchoolComponent
}, {
  path: 'dugnad/:clubUrl',
  children: [{
    path: '',
    component: ShopComponent
  }, {
    path: 'logg-inn',
    component: LoginComponent
  }, {
    path: 'handlekurv',
    component: CartComponent
  }, {
    path: 'produkter/:productUrl',
    component: ProductComponent
  }, {
    path: 'reserver',
    component: CheckoutComponent
  }, {
    path: 'admin',
    component: AdminComponent
  }]
}, {
  path: '**',
  redirectTo: ''
}];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {preloadingStrategy: CustomPreloadingStrategy});
