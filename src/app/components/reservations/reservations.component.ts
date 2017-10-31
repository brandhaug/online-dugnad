import {Component, OnInit} from '@angular/core';
import {ReservationsService} from '../../services/reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  club: any;
  reservations: any[];

  constructor(private reservationsService: ReservationsService) {
  }

  ngOnInit() {

    this.club = JSON.parse(localStorage.getItem('club'));

    this.reservationsService.getReservationsByClub(this.club._id).subscribe(res => {
      this.reservations = res.reservations;
    });
  }
}
