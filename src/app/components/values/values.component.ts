import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {

  values = [{
    image: {
      src: '../../../assets/images/icons/shop.png',
      alt: 'Dugnadsbutikk, alltid åpen',
    },
    title: 'Vi oppretter din nettbutikk',
    description: ''
  }, {
    image: {
      src: '../../../assets/images/icons/plant.png',
      alt: 'Planter som symboliserer fast inntekt',
    },
    title: 'Del og samle inn reservasjoner',
    description: ''
  }, {
    image: {
      src: '../../../assets/images/icons/delivery.png',
      alt: 'Lastebil, gratis frakt',
    },
    title: 'Bestill og motta betaling',
    description: ''
  }];

  constructor() { }

  ngOnInit() {
  }

}
