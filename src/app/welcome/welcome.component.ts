import { Component, OnInit } from '@angular/core';
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
    ]),
  ],
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
