/** Allawa ABDAT | Mastermind | Wedoogift | 30/07/2020 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wdg-rules',
  templateUrl: './wdg-rules.component.html',
  styleUrls: ['./wdg-rules.component.css']
})
export class WdgRulesComponent implements OnInit {

  title = 'Règles';
  imgPath = '../../assets/icons8-règles-64.png';

  constructor() { }

  ngOnInit(): void {
  }

}
