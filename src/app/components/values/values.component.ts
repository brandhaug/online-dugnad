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
    title: 'Skreddersy din egen nettbutikk',
    description: 'Vi tilpasser oss dine behov og ønsker, og jobber kontinuerlig med videreutvikling for å gi deg det optimale resultatet'
  }, {
    image: {
      src: '../../../assets/images/icons/plant.png',
      alt: 'Planter som symboliserer fast inntekt',
    },
    title: 'Oppnå en fast inntekt',
    description: 'Enkle invitasjonssystemer og bindingsfrie abonnementsløsninger for dine kunder åpner mulighetene for faste innteker'
  }, {
    image: {
      src: '../../../assets/images/icons/delivery.png',
      alt: 'Lastebil, gratis frakt',
    },
    title: 'Vi tar oss av resten',
    description: 'Logistikk og pengehåndtering blir tatt hånd om av oss. Dine kunder får produkter levert rett hjem, og du mottar fortjeneste ukentlig'
  }];

  constructor() { }

  ngOnInit() {
  }

}
