import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  getAltText() {
    return `Slide ${this.i + 1}`;
  }

  slides: string[];
  i: number;

  constructor() {
    this.i = 0;
    this.slides = [
      'assets/imgs/gastro-7.png',
      'assets/imgs/gastro-6.png',
      'assets/imgs/gastro-5.png',
      'assets/imgs/gastro-4.png',
      'assets/imgs/gastro-uus.png',
      'assets/imgs/gastro-2.png',
      'assets/imgs/gastro-1.png'
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
