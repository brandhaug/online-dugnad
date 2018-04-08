import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-digital-order-form',
  templateUrl: './digital-order-form.component.html',
  styleUrls: ['./digital-order-form.component.scss']
})
export class DigitalOrderFormComponent implements OnInit {

  steps: any[] = [{
    icon: 'register.png',
    description: 'Dere får tilgang til egen nettbutikk der deres kunder kan reservere produkter',
  }, {
    icon: 'phone.png',
    description: 'Kontakt alle dere tror vil støtte - bla opp telefonen og reserver på kundens vegne',
  }, {
    icon: 'thumbs-up.png',
    description: 'Del på sosiale medier for å få ekstra kunder dere ikke har tenkt på.'
  }, {
    icon: 'cart.png',
    description: 'Når dere er i mål så kan dugnadsansvarlig bestille opp alle reservasjoner med et klikk'
  }, {
    icon: 'transfer.png',
    description: 'Samle inn pengene ved levering - vi anbefaler å bruke Vipps'
  }, {
    icon: 'control.png',
    description: 'Dere har alltid full oversikt og kontroll over alle reservasjoner'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
