import {Component, OnInit} from '@angular/core';
import {FormService} from '../../services/form.service';
import {saveAs} from 'file-saver';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Angulartics2Mixpanel} from 'angulartics2';

@Component({
  selector: 'app-profit-calculator',
  templateUrl: './profit-calculator.component.html',
  styleUrls: ['./profit-calculator.component.scss']
})
export class ProfitCalculatorComponent implements OnInit {

  sliders = [{
    label: 'Antall medlemmer',
    product: false,
    price: 1,
    config: {
      keyboard: true,
      tooltips: true,
      range: {
        min: 1,
        max: 100
      },
      step: 1
    },
    model: 25,
    value: 1
  }, {
    label: 'Sokker - Komfort',
    price: 109,
    product: true,
    config: {
      keyboard: true,
      tooltips: true,
      range: {
        min: 0,
        max: 30
      },
      step: 1
    },
    model: 5,
    value: 140
  }, {
    label: 'Sokker - Premium',
    price: 129,
    product: true,
    config: {
      keyboard: true,
      tooltips: true,
      range: {
        min: 0,
        max: 30
      },
      step: 1
    },
    model: 5,
    value: 170
  }, {
    label: 'Undertøy',
    price: 129,
    product: true,
    config: {
      keyboard: true,
      tooltips: true,
      range: {
        min: 0,
        max: 30
      },
      step: 1,
    },
    model: 5,
    value: 170
  }];

  totalProfit: number;
  totalPrice: number;
  first = true;

  constructor(private formService: FormService,
              private flashMessagesService: FlashMessagesService,
              private mixpanel: Angulartics2Mixpanel) {
  }

  ngOnInit() {
    this.onSliderChange();
  }

  onSliderChange() {
    if (!this.first) {
      this.mixpanel.eventTrack('Slider value changed', null);
    }

    this.first = false;
    this.totalProfit = 0;
    this.totalPrice = 0;

    for (let i = 1; i < this.sliders.length; i++) {
      this.totalProfit += (this.sliders[0].model * (this.sliders[i].model * this.sliders[i].value));
      this.totalPrice += (this.sliders[0].model * (this.sliders[i].model * this.sliders[i].price));
    }
  }

  // downloadForm() {
  //   this.formService.getForm().subscribe(res => {
  //     const blob = new Blob([res], {type: 'application/pdf;charset=utf-8'});
  //     saveAs(blob, 'test.pdf');
  //     this.mixpanel.eventTrack('Downloaded form', null);
  //   }, err => {
  //     this.flashMessagesService.show('Noe gikk galt', {cssClass: 'alert-danger', timeout: 6000});
  //   });
  // }

}
