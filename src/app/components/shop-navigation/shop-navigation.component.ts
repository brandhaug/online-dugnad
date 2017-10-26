import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClubsService} from '../../services/clubs.service';
import {router} from '../../app.router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-shop-navigation',
  templateUrl: './shop-navigation.component.html',
  styleUrls: ['./shop-navigation.component.scss', '../navigation/navigation.component.scss']
})
export class ShopNavigationComponent implements OnInit {

  clubUrl: string;
  lsClub: any;

  constructor(private route: ActivatedRoute,
              private clubsService: ClubsService,
              private router: Router,
              private flashMessagesService: FlashMessagesService) {
  }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.clubUrl = res['clubUrl'];

      this.lsClub = JSON.parse(localStorage.getItem('club'));

      if (this.lsClub === null || (this.lsClub && !this.lsClub.url) || this.lsClub.url !== this.clubUrl) {
        this.clubsService.getClubByUrl(this.clubUrl).subscribe(club => {
          if (!club) {
            this.router.navigate(['/']);
            this.flashMessagesService.show('Fant ikke ' + this.clubUrl, {cssClass: 'alert-danger', timeout: 6000});
          } else {
            localStorage.setItem('club', JSON.stringify(club));
          }
        }, err => {
          this.router.navigate(['/']);
          this.flashMessagesService.show('Fant ikke ' + this.clubUrl, {cssClass: 'alert-danger', timeout: 6000});
        });
      }
    });
  }
}
