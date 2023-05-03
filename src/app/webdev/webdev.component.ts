import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.css']
})
export class WebdevComponent implements OnInit {

  slides: string[];
  i: number;

  constructor() {
    this.i = 0;
    this.slides = [
      'assets/images/1.png',
      'assets/images/2.png',
      'assets/images/3.png',
      'assets/images/olut.png',
      'assets/images/5.png',
      'assets/images/laskutus.png',
      'assets/images/tilaukset.png'
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
