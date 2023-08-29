import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css', '../../shared-styles.css'],
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

  constructor() {
  }

  ngOnInit(): void {
  }

  showTopbar: boolean = true; //alustetaan yläpalkki näkyväksi

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

}
