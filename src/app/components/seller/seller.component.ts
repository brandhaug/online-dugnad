import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReservationsService} from '../../services/reservations.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

  seller: any;
  reservations: any[];

  constructor(private activatedRoute: ActivatedRoute,
              private reservationsRoute: ReservationsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      let sellerId = res['sellerId'];

      this.reservationsRoute.getReservationsBySeller(sellerId).subscribe(res => {
        this.seller = res.seller;
        this.reservations = res.reservations;
      })
    });
  }

}
