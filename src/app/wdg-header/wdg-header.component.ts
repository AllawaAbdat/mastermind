/** Allawa ABDAT | Mastermind | Wedoogift | 30/07/2020 */

import { Component, OnInit, Inject, Output, EventEmitter, AfterViewInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-wdg-header',
  templateUrl: './wdg-header.component.html',
  styleUrls: ['./wdg-header.component.css']
})
export class WdgHeaderComponent implements OnInit {

  @Output() whichMenuClicked = new EventEmitter();

  menuIsActived = 0;

  durationInSeconds = 5;

  constructor() { }

  ngOnInit(): void {

    $(window).scroll( function(){
      if ($(document).scrollTop() > 100){
        $('nav').addClass('animate');
      }else{
        $('nav').removeClass('animate');
      }
    });
  }

  checkMenuChoosen(menu: string, menuClicked: number) {
    this.menuIsActived = menuClicked;
    this.whichMenuClicked.emit(menu);
  }

}
