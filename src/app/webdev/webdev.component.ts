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

  constructor() { }

  ngOnInit(): void {
  }


}
