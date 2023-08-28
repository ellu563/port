import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-imgs',
  templateUrl: './welcome-imgs.component.html',
  styleUrls: ['./welcome-imgs.component.css', '../../shared-styles.css']
})
export class WelcomeImgsComponent implements OnInit {

  isMobileView = false;
  isDesktopView = false;

  currentIndex: number = 0;
  maxIndex: number = 2;

  isEnlarged = false;

  mobileImages: string[] = [
    'assets/imgs/DEV1.png',
    'assets/imgs/DEV2.png',
    'assets/imgs/DEV3.png'
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

  isWebpSupported() {
    const elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
  }

  toggleSize() {
    this.isEnlarged = !this.isEnlarged;
  }

  checkIfMobileView() {
    this.isMobileView = window.innerWidth <= 695;
    this.isDesktopView = window.innerWidth > 695;
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
    } else {
      this.currentIndex = 0;
    }
  }

}
