import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  @Input() blocks: any[];

  constructor() { }

  ngOnInit() {
  }

}
