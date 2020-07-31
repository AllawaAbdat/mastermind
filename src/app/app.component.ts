import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wdg-mastermind';

  ngOnInit(): void {
    AOS.init();
  }

  menuToHandle(menu: string) {
    this.scrollToElement(menu);
  }

  scrollToElement(menu: string): void {
    if (menu === 'app-aw-home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(menu).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }
}
