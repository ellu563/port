import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.css'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.7s ease', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class WebdevComponent implements OnInit {

  isMobileView: boolean | undefined;

  currentIndex: number = 0;
  maxIndex: number = 4; // komponenttien mr (index!)

  constructor() { }

  ngOnInit(): void {
    // tarkistaa ikkunan leveyden + päivitä isMobileView-muuttuja
    this.checkIfMobileView();

    //tila seuraavien ikkunan koon muutosten tunnistamiseen
    window.addEventListener('resize', () => {
      this.checkIfMobileView();
    });
  }

  /* made so big because of mat-tab */
  checkIfMobileView() {
    this.isMobileView = window.innerWidth <= 962;
  }

  // mobilea varten
  prevComponent() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextComponent() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    }
  }


}
