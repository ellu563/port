import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-side-game-button',
  templateUrl: './side-game-button.component.html',
  styleUrls: ['./side-game-button.component.css'],
  /* laitettavaa: delay */
  animations: [
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.7s ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('0.7s ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class SideGameButtonComponent implements OnInit {

  delay: number;

  constructor() {
    this.delay = 20000;
  }

  ngOnInit(): void {
    this.delay = 20000;
  }



}
