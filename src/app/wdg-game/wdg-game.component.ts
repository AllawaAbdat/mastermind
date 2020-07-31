/** Allawa ABDAT | Mastermind | Wedoogift | 30/07/2020 */

import { Component, OnInit, AfterViewChecked, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-wdg-game',
  templateUrl: './wdg-game.component.html',
  styleUrls: ['./wdg-game.component.css']
})
export class WdgGameComponent implements OnInit, AfterViewChecked, AfterViewInit {

  title = 'Jeu';
  imgPath = '../../assets/icons8-game-boy-visuelle-96.png';

  // Variables
  // Tab Colors used to compare with color of user
  colors = ['red', 'yellow', 'blue', 'orange', 'green', 'black'];
  tempArray = [];
  hintArray = [];

  // tab where we will stock all the 4 color selected by the use
  selectedColors = [];

  // final variable used to generate 4 random colors
  final = this.randomFinal();

  // guesses variable used to know how many times the user have tried to find the combinaison
  guesses = 0;

  // counters
  hintsFull = 0;
  hintsHalf = 0;

  // tabColor used to display all the colors that the user can pick/choose
  tabColor = [
    {
      id: 0,
      color: 'red'
    },
    {
      id: 1,
      color: 'yellow'
    },
    {
      id: 2,
      color: 'blue'
    },
    {
      id: 3,
      color: 'orange'
    },
    {
      id: 4,
      color: 'green'
    },
    {
      id: 5,
      color: 'black'
    }
  ];

  // arrays of array : used for the history
  selectedColorsToBindOnHints: string[][] = [];
  hintsHistory: number[][] = [];

  constructor() { }

  ngAfterViewInit(): void {
  }

  ngAfterViewChecked(): void {
  }

  ngOnInit(): void {
  }

  /**
   * This function will help us to handle all the logic when the user will click on one color
   * Param color
   */
  selectColor(color) {
    // we push the color on the right tab
    this.selectedColors.push(color);

    // if the user has selected 4 colors, then
    if (this.selectedColors.length === 4) {

        // temp array logic used for the history
        this.tempArray = [];
        this.tempArray.length = 0;

        this.selectedColors.forEach((item) => {
          this.tempArray.push(item);
        });
        this.selectedColorsToBindOnHints[this.guesses] = this.tempArray;

        // we set the counters to 0 before calling calculateHints
        this.hintsHalf = 0;
        this.hintsFull = 0;
        // hintArray tab will contain the hints for the user
        this.hintArray = [];
        this.hintArray = this.calculateHints(this.selectedColors);

        // counter guesses, already explained at the top of this file
        this.guesses++;


        // If guesses counter is higher than 9 the user loose. The game will restart
        if (this.guesses > 9) {
            alert('Perdu ! C\'est dommage !');
            this.selectedColors.length = 0;
            this.hintArray.length = 0;
            this.selectedColorsToBindOnHints.length = 0;
            this.hintsHistory.length = 0;
            this.guesses = 0;
        }

        // if all the hints into hintArray are equals to 'full' (which means all the colors are good and well placed) then alert victory
        if (this.hintArray.every(hints => hints === 'full') && (this.hintArray.length === this.final.length)) {
            alert('Gagné ! Bravo');
            this.selectedColors.length = 0;
            this.hintArray.length = 0;
            this.selectedColorsToBindOnHints.length = 0;
            this.hintsHistory.length = 0;
            this.guesses = 0;
        }

        this.selectedColors.length = 0;
    }
  }

  /**
   * Generate 4 random colors to find
   */
  randomFinal() {
      const finalFinal = [...new Array(4)].map(color =>  {
          const random = Math.floor(Math.random() * Math.floor(this.colors.length));
          return this.colors[random];
      });
      return finalFinal;
  }

  /**
   * Simply calculate hints
   * @param colors
   */
  calculateHints(colors) {
      const hints = [];
      const duplicateCheck = [];

      // forEach loop on colors received by the function
      // we look if the color is ok and if it's good placed
      // if it's ok, we push 'full' string into hints array
      // we will return this array at the end
      // the hintsFull++ is also important; We will bind this value to the template
      colors.forEach((color, index) => {
          if (this.final[index] === color) {
              hints.push('full');
              duplicateCheck.push(color);
              this.hintsFull++;
          }
      });

      // Same logic.
      // If the color is ok and if it's not good placed, we will push 'half' string into our hints array
      colors.forEach((color, index) => {
          if (!duplicateCheck.includes(color) && this.final.includes(color)) {
              hints.push('half');
              this.hintsHalf++;
          }
      });

      this.hintsHistory[this.guesses] = [this.hintsHalf, this.hintsFull];

      return hints;
  }


}

