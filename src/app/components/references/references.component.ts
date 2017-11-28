import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  references = [{
    name: 'Dugnadsansvarlig',
    content: 'Veldig bra service. Har bare positive ting å si om Kvikk Dugnad!'
  }, {
    name: 'Foreldregruppa',
    content: 'Superenkelt og ryddig system.'
  }, {
    name: 'Støtter',
    content: 'Veldig fornøyd med kvaliteten i produktene.'
  }];

  blocks = [{
    title: 'Reservasjoner',
    number: '96',
    color: 'blue',
    counter: true
  }, {
    title: 'Deltakere',
    number: '25',
    counter: true,
    color: 'red'
  }, {
    title: 'Fortjeneste',
    number: '22 540,-',
    counter: true,
    color: 'green'
  }, {
    title: 'Fortjeneste/Deltaker',
    number: '901,-',
    counter: true,
    color: 'yellow'
  }];

  constructor() {
  }

  ngOnInit() {
  }


}
