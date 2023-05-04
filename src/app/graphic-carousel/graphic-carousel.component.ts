import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphic-carousel',
  templateUrl: './graphic-carousel.component.html',
  styleUrls: ['./graphic-carousel.component.css']
})
export class GraphicCarouselComponent implements OnInit {

  /*alempi*/
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

  /*ylempi*/
  images2 = [
    {
      src: 'assets/images/kullerssoni.jpg',
      alt: 'Image 1'
    },
    {
      src: 'assets/images/kullerssoni.jpg',
      alt: 'Image 2'
    },
    {
      src: 'assets/images/kullerssoni.jpg',
      alt: 'Image 3'
    },
    {
      src: 'assets/images/kullerssoni.jpg',
      alt: 'Image 4'
    },
    {
      src: 'assets/images/kullerssoni.jpg',
      alt: 'Image 5'
    },
    {
      src: 'assets/images/kullerssoni.jpg',
      alt: 'Image 6'
    }
  ];

  translateValue = 0;
  translateValue2 = 0;

  intervalId: any;
  intervalId2: any;

  constructor() { }

  ngOnInit(): void {
    // käynnistää ajastimen, joka suorittaa nextSlide() -metodin joka 3. sekunti

    /*alempi*/
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  ngOnDestroy() {
    // lopeta ajastin
    clearInterval(this.intervalId);
    clearInterval(this.intervalId2);
  }

  /*alemman*/
  prevSlide() {
    if (this.translateValue === 0) {
      this.translateValue = -66.66;
    } else {
      this.translateValue += 33.33;
    }
  }

  /*alemman*/
  nextSlide() {
    if (this.translateValue === -66.66) {
      this.translateValue = 0;
    } else {
      this.translateValue -= 33.33;
    }
  }

  /*ylemmän*/
  prevSlide2() {
    if (this.translateValue2 === 0) {
      this.translateValue2 = -66.66;
    } else {
      this.translateValue2 += 33.33;
    }
  }

  /*ylemmän*/
  nextSlide2() {
    if (this.translateValue2 === -66.66) {
      this.translateValue2 = 0;
    } else {
      this.translateValue2 -= 33.33;
    }
  }

}
