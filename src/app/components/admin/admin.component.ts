import {Component, OnInit} from '@angular/core';
import {ReservationsService} from '../../services/reservations.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  sellers: any[];
  reservations: any[];
  club: any;
  blocks: any[];
  totalProfit: number;
  turnOver: number;
  totalDebt: number;

  constructor(private reservationsService: ReservationsService) {
  }

  ngOnInit() {
    this.club = JSON.parse(localStorage.getItem('club'));

    this.reservationsService.getAdminPanel(this.club._id).subscribe(res => {

      this.totalProfit = 0;
      this.turnOver = 0;
      this.totalDebt = 0;
      let unknownSeller = [];

      for (let i = 0; i < res.sellers.length; i++) {
        res.sellers[i].reservations = [];
        res.sellers[i].turnOver = 0;
        res.sellers[i].totalProfit = 0;
        res.sellers[i].totalDebt = 0;


        for (let j = 0; j < res.reservations.length; j++) {
          if (!res.reservations[j].seller || (res.reservations[j].seller && !res.reservations[j].seller._id)) {
            unknownSeller.push(res.reservations[j]);
            res.sellers[i].turnOver += res.reservations[j].amount;
            res.sellers[i].totalProfit += res.reservations[j].profit;
          } else if (res.reservations[j].seller._id === res.sellers[i]._id) {
            res.sellers[i].reservations.push(res.reservations[j]);
            res.sellers[i].turnOver += res.reservations[j].amount;
            res.sellers[i].totalProfit += res.reservations[j].profit;
          }
        }

        this.totalProfit += res.sellers[i].totalProfit;
        this.turnOver += res.sellers[i].turnOver;
        res.sellers[i].totalDebt = res.sellers[i].turnOver - res.sellers[i].totalProfit;
      }
      this.totalDebt = this.turnOver - this.totalProfit;

      this.blocks = [{
        title: 'Reservasjoner',
        number: res.reservations.length,
        color: 'blue',
        counter: true
      }, {
        title: 'Omsetning',
        number: this.turnOver / 100 + ',-',
        counter: true,
        color: 'yellow'
      }, {
        title: 'Fortjeneste',
        number: this.totalProfit / 100 + ',-',
        counter: true,
        color: 'green'
      }, {
        title: 'Leverandørgjeld',
        number: this.totalDebt / 100 + ',-',
        counter: true,
        color: 'red'
      }];

      this.sellers = res.sellers;
      this.reservations = res.reservations;
    });
  }
}
