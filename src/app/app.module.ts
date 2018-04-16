import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
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
import {SampleService} from './services/sample.service';
import {Angulartics2Mixpanel, Angulartics2Module} from 'angulartics2';
import {DigitalOrderFormComponent} from './components/digital-order-form/digital-order-form.component';
import {NouisliderModule} from 'ng2-nouislider/src/nouislider';
import {ProductComponent} from './components/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductListComponent} from './components/product-list/product-list.component';
import {PrivacyComponent} from './components/privacy/privacy.component';
import {CallToActionComponent} from './components/call-to-action/call-to-action.component';
import {LoadingService} from './services/loading.service';
import {RussComponent} from './components/russ/russ.component';
import {SchoolComponent} from './components/school/school.component';
import {LoginComponent} from './components/login/login.component';
import {AuthenticationService} from './services/authentication.service';
import {ShopComponent} from './components/shop/shop.component';
import {CartComponent} from './components/cart/cart.component';
import {ShopNavigationComponent} from './components/shop-navigation/shop-navigation.component';
import {CustomPreloadingStrategy} from './custom-preloading-strategy';
import {CartItemsComponent} from './components/cart-items/cart-items.component';
import {CartService} from './services/cart.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {CheckoutFormComponent} from './components/checkout-form/checkout-form.component';
import {AccordionModule} from 'ngx-bootstrap';
import {PostalPlaceService} from './services/postal-place.service';
import {ReservationsService} from './services/reservations.service';
import {ClubsService} from './services/clubs.service';
import {SellersService} from './services/sellers.service';
import {AdminComponent} from './components/admin/admin.component';
import {SellerComponent} from './components/seller/seller.component';
import {BlocksComponent} from './components/blocks/blocks.component';
import {ReservationsComponent} from './components/reservations/reservations.component';
import {ProductQuantityListComponent} from './components/product-quantity-list/product-quantity-list.component';
import {ReferencesComponent} from './components/references/references.component';
import {ValuesComponent} from './components/values/values.component';
import {OrderSampleFormComponent} from './components/order-sample-form/order-sample-form.component';
import {SwiperModule} from "angular2-useful-swiper";

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
    DigitalOrderFormComponent,
    ProductComponent,
    ProductListComponent,
    PrivacyComponent,
    CallToActionComponent,
    RussComponent,
    SchoolComponent,
    LoginComponent,
    ShopComponent,
    CartComponent,
    ShopNavigationComponent,
    CartItemsComponent,
    CheckoutComponent,
    CheckoutFormComponent,
    AdminComponent,
    SellerComponent,
    BlocksComponent,
    ReservationsComponent,
    ProductQuantityListComponent,
    ReferencesComponent,
    ValuesComponent,
    OrderSampleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    NouisliderModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    BrowserAnimationsModule,
    Angulartics2Module.forRoot([Angulartics2Mixpanel]),
    AccordionModule.forRoot(),
    SwiperModule
  ],
  providers: [
    GlobalService,
    ProductsService,
    FormService,
    SampleService,
    LoadingService,
    AuthenticationService,
    CustomPreloadingStrategy,
    CartService,
    PostalPlaceService,
    ReservationsService,
    ClubsService,
    SellersService,
    {provide: LOCALE_ID, useValue: "nb-NO"}
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
