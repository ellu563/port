import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides: string[];
  i: number;

  constructor() {
    this.i = 0;
    this.slides = [
      'assets/images/same-7.png',
      'assets/images/same-6.png',
      'assets/images/same-5.png',
      'assets/images/same-4.png',
      'assets/images/same-uus.png',
      'assets/images/same-2.png',
      'assets/images/same-1.png'
    ];

  }

  getSlide() {
    return this.slides[this.i];
  }

  getPrev() {
    this.i == 0 ? (this.i = this.slides.length - 1) : this.i--;
  }

  getNext() {
    this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
  }


  ngOnInit(): void {
  }

}
