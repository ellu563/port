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
      src: 'assets/imgs/space-low.jpg',
      alt: 'Girl in space.',
      width: 400,
      height: 291,
    },
    {
      src: 'assets/imgs/tepot.jpg',
      alt: 'Teapot.',
      width: 400,
      height: 291,
    },
    {
      src: 'assets/imgs/girl-dog.jpg',
      alt: 'Girl and dog.',
      width: 400,
      height: 291,
    },
    {
      src: 'assets/imgs/flow700.jpg',
      alt: 'Pink flowers.',
      width: 400,
      height: 291,
    },
    {
      src: 'assets/imgs/hrilainen-01.jpg',
      alt: 'Hamburger.',
      width: 400,
      height: 291,
    }
  ];

  /*ylempi*/
  images2 = [
    {
      src: 'assets/imgs/madelow.jpg',
      alt: 'Girl.',
      width: 600,
      height: Math.round(600 * (3000 / 2182))
    },
    {
      src: 'assets/imgs/arcadehall.jpg',
      alt: 'Arcade hall.',
      width: 600,
      height: Math.round(600 * (5500 / 4000))
    },
    {
      src: 'assets/imgs/girlspace.jpg',
      alt: 'Superwoman.',
      width: 600,
      height: Math.round(600 * (2048 / 1489))
    },
    {
      src: 'assets/imgs/dubs.jpg',
      alt: 'Dogs in space.',
      width: 600,
      height: Math.round(600 * (3000 / 2182))
    },
    {
      src: 'assets/imgs/pekkaboy.jpg',
      alt: 'White dog.',
      width: 600,
      height: Math.round(600 * (2687 / 1947))
    }
  ];



  translateValue = 0;
  translateValue2 = 0;

  intervalId: any;
  intervalId2: any;

  constructor() {
  }

  ngOnInit(): void {

    // käynnistää ajastimen, joka suorittaa nextSlide() -metodin joka 3. sekunti

    /*alempi*/
    this.intervalId = setInterval(() => {
      this.nextSlide2();
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
