import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  executives: any[] = [{
    name: 'Martin Sunnset',
    position: 'Produkt- og økonomiansvarlig',
    image: {
      url: 'sunnset',
      alt: 'Portrettbilde av Martin Sunnset'
    }
  }, {
    name: 'Martin Brandhaug',
    position: 'Daglig leder',
    image: {
      url: 'brandhaug',
      alt: 'Portrettbilde av Martin Brandhaug'
    }
  }, {
    name: 'John Tobias Husby',
    position: 'Markedsleder',
    image: {
      url: 'husby',
      alt: 'Portrettbilde av John Tobias Husby'
    }
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
