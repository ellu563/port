import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css', '../../shared-styles.css'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.7s ease', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class GraphicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
