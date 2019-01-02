import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  references = [{
    image: 'mstensrud.jpg',
    position: 'Medlem',
    name: 'Mats Jørgen Stensrud',
    organization: 'Haldenruss 2018',
    content: 'Jeg og russegruppa mi er svært fornøyde med servicen til Online Dugnad! Måten man kun bestiller varene man har solgt på forhånd, gjorde at vi slapp å sitte igjen med usolgte varer når vi var ferdige. Kjempebra opplegg med folk du kan stole på!',
    profitPerMember: '1 841,-'
  }, {
    image: 'aviken.jpg',
    position: 'Dugnadsansvarlig',
    name: 'A. Viken',
    organization: 'Frosta skole',
    content: 'Har bare positive ting å si om Online Dugnad! De har et superenkelt og ryddig system, og gir en utrolig bra service.',
    profit: '22 540,-',
    profitPerMember: '901,-'
  }
  ];

  config = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    slidesPerView: 2,
    breakpoints: {
      // when window width is <= 480px
      1025: {
        slidesPerView: 1,
        spaceBetweenSlides: 20
      },
      // when window width is <= 640px
      1530: {
        slidesPerView: 2,
        spaceBetweenSlides: 50
      }
    }
  };

  constructor() {
  }

  ngOnInit() {
  }


}
