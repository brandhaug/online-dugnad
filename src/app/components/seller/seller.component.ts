import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReservationsService} from '../../services/reservations.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

  seller: any;
  reservations: any[];

  constructor(private activatedRoute: ActivatedRoute,
              private reservationsService: ReservationsService,
              private flashMessagesService: FlashMessagesService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const sellerId = params['sellerId'];

      this.reservationsService.getReservationsBySeller(sellerId).subscribe(res => {
        this.seller = res.seller;
        this.reservations = res.reservations;
      });
    });
  }

  updatePaid(reservation, paid) {
    const oldValue = reservation.paid;
    reservation.paid = paid;

    this.reservationsService.updateReservation(reservation).subscribe(res => {
      this.flashMessagesService.show(res.message, {cssClass: 'alert-success', timeout: 6000});
    }, err => {
      this.flashMessagesService.show(err, {cssClass: 'alert-danger', timeout: 6000});
      reservation.paid = oldValue;
    });
  }

}
