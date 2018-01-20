import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  references = [{
    name: 'Amy Viken, Dugnadsansvarlig',
    content: 'Har bare positive ting å si om Kvikk Dugnad! De har et superenkelt og ryddig system, og gir en utrolig bra service. '
  }];

  blocks = [{
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
