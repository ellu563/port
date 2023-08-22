import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.7s ease', style({ transform: 'translateX(0%)' })),
      ]),
    ])
  ],
})
export class WelcomeComponent implements OnInit {
  isMobileView = false;
  isDesktopView = false;

  currentIndex: number = 0;
  maxIndex: number = 2;

  mobileImages: string[] = [
    'assets/images/DEV2-03.png',
    'assets/images/DEV2-04.png',
    'assets/images/DEV2-05.png'
  ];

  constructor() { }

  ngOnInit(): void {
    // tarkistaa ikkunan leveyden + päivitä isMobileView-muuttuja
    this.checkIfMobileView();

    //tila seuraavien ikkunan koon muutosten tunnistamiseen
    window.addEventListener('resize', () => {
      this.checkIfMobileView();
    });
  }

  checkIfMobileView() {
    this.isMobileView = window.innerWidth <= 695;
    this.isDesktopView = window.innerWidth > 695;
  }

  /*vaihdetaan graphic-design sisalto hoveroidessa*/
  hover: boolean = false;

  /*sama web-dev osiolle*/
  hoverWeb: boolean = false;

  /*graphic design*/
  onHover(): void {
    this.hover = true;
  }

  onLeave(): void {
    this.hover = false;
  }

  /* web dev */
  onHoverWeb(): void {
    this.hoverWeb = true;
  }

  onLeaveWeb(): void {
    this.hoverWeb = false;
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
