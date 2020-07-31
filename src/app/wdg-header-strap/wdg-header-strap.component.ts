/** Allawa ABDAT | Mastermind | Wedoogift | 30/07/2020 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wdg-header-strap',
  templateUrl: './wdg-header-strap.component.html',
  styleUrls: ['./wdg-header-strap.component.css']
})
export class WdgHeaderStrapComponent implements OnInit {

  @Input() titleHeader: string;
  @Input() imgPath: string;

  constructor() { }

  ngOnInit(): void {
  }

}
