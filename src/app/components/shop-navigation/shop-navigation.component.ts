import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop-navigation',
  templateUrl: './shop-navigation.component.html',
  styleUrls: ['./shop-navigation.component.scss', '../navigation/navigation.component.scss']
})
export class ShopNavigationComponent implements OnInit {

  clubUrl: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.clubUrl = res['clubUrl'];
      localStorage.setItem('club', this.clubUrl);
    });
  }
}
