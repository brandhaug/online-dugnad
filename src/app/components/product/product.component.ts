import {Component, OnDestroy, OnInit} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ProductsService} from '../../services/products.service';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  product: any;
  cartEnabled: boolean = false;

  sizes: string[] = [];
  colors: string[] = [];
  selectedSize: string;
  selectedColor: string;
  selectedImage: {
    url: string,
    alt: string
  };
  boxerSizeGuide: boolean;
  hipsterSizeGuide: boolean;
  alerts: any[];
  cart: any;
  routeSub: any;
  loading = true;
  club: any;

  constructor(private flashMessagesService: FlashMessagesService,
              private productsService: ProductsService,
              private route: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.club = localStorage.getItem('club');

    if (this.club !== null) {
      this.cartEnabled = true;
    }

    this.routeSub = this.route.params.subscribe(params => {
      this.productsService.getProductByUrl(params['productUrl']).subscribe(product => {
        this.product = product;

        this.generateColorsAndSizes();

        if (this.colors.length === 1) {
          this.selectColor(this.colors[0]);
        }
        if (this.sizes.length === 1) {
          this.selectSize(this.sizes[0]);
        }
        this.selectImage(this.product.images[0]);
      });
      this.loading = false;
    });
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  findSku() {
    for (let i = 0; i < this.product.skus.length; i++) {
      if (this.product.skus[i].size === this.selectedSize) {
        if (this.product.skus[i].color === this.selectedColor) {
          return this.product.skus[i];
        }
      }
    }
  }

  generateColorsAndSizes() {
    let alreadyExists = false;

    for (let i = 0; i < this.product.skus.length; i++) {
      if (this.product.skus[i].size) {
        for (let j = 0; j < this.sizes.length; j++) {
          if (this.product.skus[i].size === this.sizes[j]) {
            alreadyExists = true;
            break;
          }
        }

        if (!alreadyExists) {
          this.sizes.push(this.product.skus[i].size);
        } else {
          alreadyExists = false;
        }
      }

      if (this.product.skus[i].color) {
        for (let j = 0; j < this.colors.length; j++) {
          if (this.product.skus[i].color === this.colors[j]) {
            alreadyExists = true;
            break;
          }
        }

        if (!alreadyExists) {
          this.colors.push(this.product.skus[i].color);
        } else {
          alreadyExists = false;
        }
      }
    }
  }

  selectImage(image) {
    this.selectedImage = image;
  }

  selectColor(color) {
    this.selectedColor = color;

    if (color === 'Hvit') {
      this.selectImage(this.product.images[1]);
    } else if (color === 'Sort') {
      this.selectImage(this.product.images[2]);
    }
  }

  selectSize(size) {
    this.selectedSize = size;
  }

  openSizeGuide(product) {
    const hipsterId = '582733d54edb28a7eb83f3c7';
    const boxerId = '582734174edb28a7eb83f3c8';

    if (this.product._id === hipsterId) {
      this.hipsterSizeGuide = !this.hipsterSizeGuide;
    } else if (product._id === boxerId) {
      this.boxerSizeGuide = !this.boxerSizeGuide;
    }
  }

  addToCart() {
    let error = false;

    if (this.colors.length && !this.selectedColor) {
      this.flashMessagesService.show('Oisann! Du må velge farge', {cssClass: 'alert-danger', timeout: 6000});
      error = true;
    }
    if (this.sizes.length && !this.selectedSize) {
      this.flashMessagesService.show('Oisann! Du må velge størrelse', {cssClass: 'alert-danger', timeout: 6000});
      error = true;
    }

    if (error) {
      return;
    }

    this.cartService.addItem({
      name: this.product.name,
      price: this.product.price2,
      profit: this.product.profit2,
      sku: this.findSku(),
      quantity: 1,
      image: this.product.images[0],
    });
  }
}
