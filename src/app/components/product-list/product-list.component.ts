import {Component, Input, OnInit} from '@angular/core';
import {Angulartics2Mixpanel} from 'angulartics2';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() frontPage: boolean;
  @Input() shop: boolean;
  @Input() products: Observable<any[]>;

  constructor(private router: Router,
              private mixpanel: Angulartics2Mixpanel) {
  }

  ngOnInit() {}

  openProduct(product){
    this.mixpanel.eventTrack('Opened product', product);

    if (!this.shop) {
      this.router.navigate(['/produkter', product.url]);
    } else {
      this.router.navigate(['/dugnad/' + localStorage.getItem('club') + '/produkter/', product.url]);
    }
  }
}
