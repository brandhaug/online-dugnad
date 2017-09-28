import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Angulartics2Mixpanel} from 'angulartics2';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {

  @Input() readMore: boolean;
  @Input() image: string;
  @Input() title: string;
  @Input() subTitle: string;

  constructor(private mixpanel: Angulartics2Mixpanel,
              private router: Router) {
  }

  ngOnInit() {
  }

  openSendSystemRequest() {
    this.mixpanel.eventTrack('Opened system request', null);
    this.router.navigate(['/sett-i-gang']);
  }

}
