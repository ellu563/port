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
      src: 'assets/images/space-1.JPG',
      alt: 'Image 1'
    },
    {
      src: 'assets/images/teapot3-01.jpg',
      alt: 'Image 2'
    },
    {
      src: 'assets/images/girlanddog.jpg',
      alt: 'Image 3'
    },
    {
      src: 'assets/images/pinkitkukat.jpg',
      alt: 'Image 4'
    },
    {
      src: 'assets/images/hrilainen.jpg',
      alt: 'Image 5'
    }
  ];

  /*ylempi*/
  images2 = [
    {
      src: 'assets/images/mads.jpg',
      alt: 'Image 1'
    },
    {
      src: 'assets/images/game-hall.jpg',
      alt: 'Image 2'
    },
    {
      src: 'assets/images/super.jpg',
      alt: 'Image 3'
    },
    {
      src: 'assets/images/avaruusdubet.jpg',
      alt: 'Image 4'
    },
    {
      src: 'assets/images/pekka-long.jpg',
      alt: 'Image 5'
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
