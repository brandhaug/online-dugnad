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

  constructor(private reservationsService: ReservationsService) {
  }

  ngOnInit() {
    this.club = JSON.parse(localStorage.getItem('club'));

    this.reservationsService.getAdminPanel(this.club._id).subscribe(res => {

      for (let i = 0; i < res.sellers.length; i++) {
        res.sellers[i].reservations = [];
        res.sellers[i].turnOver = 0;
        res.sellers[i].totalProfit = 0;


        for (let j = 0; j < res.reservations.length; j++) {
          if (res.reservations[j].seller._id === res.sellers[i]._id) {
            res.sellers[i].reservations.push(res.reservations[j]);
            res.sellers[i].turnOver += res.reservations[j].amount;
            res.sellers[i].totalProfit += res.reservations[j].profit;
          }
        }
      }

      this.sellers = res.sellers;
      this.reservations = res.reservations;
    });
  }
}
