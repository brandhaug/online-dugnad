import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {routes} from './app.router';
import {NavigationComponent} from './components/navigation/navigation.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ProductsComponent} from './components/products/products.component';
import {NouisliderModule} from 'ng2-nouislider';
import {ProfitCalculatorComponent} from './components/profit-calculator/profit-calculator.component';
import {HowComponent} from './components/how/how.component';
import {ServiceComponent} from './components/service/service.component';
import {AboutComponent} from './components/about/about.component';
import {OrderComponent} from './components/order/order.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {ProductsService} from './services/products.service';
import {GlobalService} from './services/global.service';
import {ShopComponent} from './components/shop/shop.component';
import {CartComponent} from './components/cart/cart.component';
import {TermsComponent} from './components/terms/terms.component';
import {FormService} from './services/form.service';
import {OrderSampleComponent} from './components/order-sample/order-sample.component';
import {SampleService} from './services/sample.service';
import {Angulartics2Mixpanel, Angulartics2Module} from 'angulartics2';
import {DigitalOrderFormComponent} from './components/digital-order-form/digital-order-form.component';
import {OrderSampleButtonComponent} from './components/order-sample-button/order-sample-button.component';
import {ProductModalComponent} from './components/product-modal/product-modal.component';
import {ModalModule} from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SystemRequestModalComponent } from './components/system-request-modal/system-request-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    ProductsComponent,
    ProfitCalculatorComponent,
    HowComponent,
    ServiceComponent,
    AboutComponent,
    OrderComponent,
    ShopComponent,
    CartComponent,
    TermsComponent,
    OrderSampleComponent,
    DigitalOrderFormComponent,
    OrderSampleButtonComponent,
    ProductModalComponent,
    SystemRequestModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    NouisliderModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    Angulartics2Module.forRoot([Angulartics2Mixpanel])
  ],
  providers: [
    GlobalService,
    ProductsService,
    FormService,
    SampleService
  ],
  entryComponents: [
    OrderSampleComponent,
    ProductModalComponent,
    SystemRequestModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
