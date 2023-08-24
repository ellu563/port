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
      src: 'assets/imgs/greengirl.jpg',
      alt: 'Girl in space.'
    },
    {
      src: 'assets/imgs/tepot.jpg',
      alt: 'Teapot.'
    },
    {
      src: 'assets/imgs/girl-dog.jpg',
      alt: 'Girl and dog.'
    },
    {
      src: 'assets/imgs/flow.jpg',
      alt: 'Pink flowers.'
    },
    {
      src: 'assets/imgs/hrilainen-01.jpg',
      alt: 'Hamburger.'
    }
  ];

  /*ylempi*/
  images2 = [
    {
      /** kuvaa pienennetty > 41 > 43 */
      src: 'assets/imgs/madelow.jpg',
      alt: 'Girl.'
    },
    {
      src: 'assets/imgs/arcadehall.jpg',
      alt: 'Arcade hall.'
    },
    {
      src: 'assets/imgs/girlspace.jpg',
      alt: 'Superwoman.'
    },
    {
      src: 'assets/imgs/dubs.jpg',
      alt: 'Dogs in space.'
    },
    {
      src: 'assets/imgs/pekkaboy.jpg',
      alt: 'White dog.'
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
