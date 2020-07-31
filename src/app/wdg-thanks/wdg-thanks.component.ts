/** Allawa ABDAT | Mastermind | Wedoogift | 30/07/2020 */


import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-wdg-thanks',
  templateUrl: './wdg-thanks.component.html',
  styleUrls: ['./wdg-thanks.component.css']
})
export class WdgThanksComponent implements OnInit {

  title = 'Merci';
  imgPath = '../../assets/icons8-pouce-en-l\'air-100.png';

  constructor() { }

  ngOnInit(): void {
    $('#recipeCarousel').carousel({
      interval: 3000
    });

    $('.carousel .carousel-item').each(function(){
        const minPerSlide = 3;
        let next = $(this).next();
        if (!next.length) {
        next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        for (let i = 0; i < minPerSlide; i++) {
            next = next.next();
            if (!next.length) {
              next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
          }
    });
  }

}
