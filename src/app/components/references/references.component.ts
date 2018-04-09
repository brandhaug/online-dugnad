import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  references = [{
    image: 'aviken.jpg',
    position: 'Dugnadsansvarlig',
    name: 'A. Viken',
    organization: 'Frosta skole',
    content: 'Har bare positive ting å si om Online Dugnad! De har et superenkelt og ryddig system, og gir en utrolig bra service.',
    profit: '22 540,-',
    profitPerMember: '901,-'
  },
  //   {
  //   image: 'aviken.jpg',
  //   position: 'Medlem',
  //   name: 'Jørgen Knudsen',
  //   organization: 'Haldenruss 2018',
  //   content: 'Har bare positive ting å si om Online Dugnad! De har et superenkelt og ryddig system, og gir en utrolig bra service.',
  //   profitPerMember: '1 841,-'
  // }
  ];

  constructor() {
  }

  ngOnInit() {
  }


}
