import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphic-carousel',
  templateUrl: './graphic-carousel.component.html',
  styleUrls: ['./graphic-carousel.component.css']
})
export class GraphicCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {
      src: 'assets/images/kulssi.jpg',
      alt: 'Image 1'
    },
    {
      src: 'assets/images/kulssi.jpg',
      alt: 'Image 2'
    },
    {
      src: 'assets/images/kulssi.jpg',
      alt: 'Image 3'
    },
    {
      src: 'assets/images/kulssi.jpg',
      alt: 'Image 4'
    },
    {
      src: 'assets/images/kulssi.jpg',
      alt: 'Image 5'
    },
    {
      src: 'assets/images/kulssi.jpg',
      alt: 'Image 6'
    }
  ];

  translateValue = 0;

  prevSlide() {
    if (this.translateValue === 0) {
      this.translateValue = -66.66;
    } else {
      this.translateValue += 33.33;
    }
  }

  nextSlide() {
    if (this.translateValue === -66.66) {
      this.translateValue = 0;
    } else {
      this.translateValue -= 33.33;
    }
  }

}
