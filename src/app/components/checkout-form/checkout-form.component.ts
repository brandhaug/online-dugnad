import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CartService} from '../../services/cart.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Cart} from '../../interfaces/cart';
import {PostalPlaceService} from '../../services/postal-place.service';
import {ReservationsService} from '../../services/reservations.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  myForm: FormGroup;
  placeId: string;
  loading = false;
  @Input() cart: Cart;

  constructor(private flashMessagesService: FlashMessagesService,
              private fb: FormBuilder,
              private postalPlaceService: PostalPlaceService,
              private router: Router,
              private cartService: CartService,
              private reservationsService: ReservationsService) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      'name': ['', [Validators.required, Validators.minLength(4)]],
      'address': ['', [Validators.required, Validators.minLength(4)]],
      'zipCode': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]+')]],
      'postalPlace': [{value: '', disabled: true}, [Validators.required]],
      'email': ['', [Validators.required, Validators.minLength(5), Validators.pattern('\\S+@\\S+\\.\\S+')]],
      'phoneNumber': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8), Validators.pattern('[0-9]+')]],
      'seller': ['']
      //       'name': ['Martin Brandhaug', [Validators.required, Validators.minLength(4)]],
      // 'address': ['Thorvald Meyers gate 14', [Validators.required, Validators.minLength(4)]],
      // 'zipCode': ['0555', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]+')]],
      // 'postalPlace': [{value: '', disabled: true}, [Validators.required]],
      // 'email': ['mbrandhaug@live.no', [Validators.required, Validators.minLength(5), Validators.pattern('\\S+@\\S+\\.\\S+')]],
      // 'phoneNumber': ['92627081', [Validators.required, Validators.minLength(4), Validators.maxLength(8), Validators.pattern('[0-9]+')]],
      // 'seller': ['']

    });

    this.myForm.get('zipCode').valueChanges.subscribe(zipCode => {
      this.findPostalPlace(zipCode);
    });
  }

  findPostalPlace(zipCode) {
    if (this.myForm.get('zipCode').valid) {
      this.postalPlaceService.getPostalPlace(zipCode).subscribe(
        res => {
          console.log(res);
          this.myForm.patchValue({'postalPlace': res.postalPlace});
          this.placeId = res._id;
        }, err => {
          this.flashMessagesService.show(err, {cssClass: 'alert-danger', timeout: 6000});
        });
    }
  }

  submitForm(value: any) {
    this.loading = true;
    value.place = this.placeId;

    this.createReservation(value);
  }


  createReservation(customer) {
    let items = [];

    for (let i = 0; i < this.cart.items.length; i++) {
      items.push({
        sku: this.cart.items[i].sku,
        quantity: this.cart.items[i].quantity
      });
    }

    this.reservationsService.createReservation(items, customer).subscribe(
      res => {
        this.cart = this.cartService.clearCart();
        this.flashMessagesService.show('Vellykket!', {cssClass: 'alert-success', timeout: 6000});
        this.router.navigate(['/receipt/', res.reservation]);
      }, err => {
        this.flashMessagesService.show(err, {cssClass: 'alert-danger', timeout: 6000});
      });
  }
}
