import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {routes} from './app.router';
import {NavigationComponent} from './components/navigation/navigation.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ProductsComponent} from './components/products/products.component';
import {ProfitCalculatorComponent} from './components/profit-calculator/profit-calculator.component';
import {HowComponent} from './components/how/how.component';
import {AboutComponent} from './components/about/about.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {ProductsService} from './services/products.service';
import {GlobalService} from './services/global.service';
import {TermsComponent} from './components/terms/terms.component';
import {FormService} from './services/form.service';
import {OrderSampleComponent} from './components/order-sample/order-sample.component';
import {SampleService} from './services/sample.service';
import {Angulartics2Mixpanel, Angulartics2Module} from 'angulartics2';
import {DigitalOrderFormComponent} from './components/digital-order-form/digital-order-form.component';
import {OrderSampleButtonComponent} from './components/order-sample-button/order-sample-button.component';
import {NouisliderModule} from 'ng2-nouislider/src/nouislider';
import {ProductComponent} from './components/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductListComponent} from './components/product-list/product-list.component';
import {PrivacyComponent} from './components/privacy/privacy.component';
import {CallToActionComponent} from './components/call-to-action/call-to-action.component';
import { SystemRequestComponent } from './components/system-request/system-request.component';
import {LoadingService} from './services/loading.service';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { RussComponent } from './components/russ/russ.component';

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
    AboutComponent,
    TermsComponent,
    OrderSampleComponent,
    DigitalOrderFormComponent,
    OrderSampleButtonComponent,
    ProductComponent,
    ProductListComponent,
    PrivacyComponent,
    CallToActionComponent,
    SystemRequestComponent,
    ContactMeComponent,
    RussComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    NouisliderModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    Angulartics2Module.forRoot([Angulartics2Mixpanel])
  ],
  providers: [
    GlobalService,
    ProductsService,
    FormService,
    SampleService,
    LoadingService
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
