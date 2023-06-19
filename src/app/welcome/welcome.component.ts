import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css', './welcome.component.scss'],
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

  constructor() { }

  ngOnInit(): void {
  }

  /*vaihdetaan graphic-design sisalto hoveroidessa*/
  hover: boolean = false;

  /*sama web-dev osiolle*/
  hoverWeb: boolean = false;

  /*graphic design*/
  onHover(): void {
    this.hover = true;
  }

  /*for contact me*/
  waveActive: boolean = false;

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

  /*for contact me*/
  sendEmail() {
    this.waveActive = true;
    setTimeout(() => {
      this.waveActive = false;
    }, 1500);
  }

}
