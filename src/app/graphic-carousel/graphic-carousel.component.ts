import { Component, OnInit, Renderer2 } from '@angular/core';

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
      webpSrc: 'assets/imgs/greengirl.webp',
      alt: 'Girl in space.'
    },
    {
      src: 'assets/imgs/tea-shrink.jpg',
      webpSrc: 'assets/imgs/tea-webp-shrink.webp',
      alt: 'Teapot.'
    },
    {
      src: 'assets/imgs/tyttojakoira-shrink.jpg',
      webpSrc: 'assets/imgs/girldogbest-shrik-webp.webp',
      alt: 'Girl and dog.'
    },
    {
      src: 'assets/imgs/kukat-shrink.jpg',
      webpSrc: 'assets/imgs/flowers-shrink-webp.webp',
      alt: 'Pink flowers.'
    },
    {
      src: 'assets/imgs/hrilainen-shrink.jpg',
      webpSrc: 'assets/imgs/hrilainen-webp-shrink.webp',
      alt: 'Hamburger.'
    }
  ];

  /*ylempi*/
  images2 = [
    {
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

  isWebPSupported: boolean;

  translateValue = 0;
  translateValue2 = 0;

  intervalId: any;
  intervalId2: any;

  constructor(private renderer: Renderer2) {
    this.isWebPSupported = this.checkWebPSupport();
  }

  ngOnInit(): void {

    for (let i = 0; i < 3; i++) {
      const image = this.images2[i];
      const linkElement = document.createElement('link');
      linkElement.rel = 'preload';
      linkElement.as = 'image';
      linkElement.href = image.src;
      document.head.appendChild(linkElement);
    }
    // käynnistää ajastimen, joka suorittaa nextSlide() -metodin joka 3. sekunti

    /*alempi*/
    this.intervalId = setInterval(() => {
      this.nextSlide2();
    }, 3000);
  }

  checkWebPSupport(): boolean {
    const elem = document.createElement('canvas');

    if (elem.getContext && elem.getContext('2d')) {
      // Canvas-tuki on käytettävissä, tarkistetaan WebP-tuki
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    } else {
      // Canvas-tukea ei ole, WebP ei ole tuettu
      return false;
    }
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
  /** muokattu karusellin pysayttamista varten */
  nextSlide2() {
    /*if (!this.carouselPaused) {*/
    if (this.translateValue2 === -66.66) {
      this.translateValue2 = 0;
    } else {
      this.translateValue2 -= 33.33;
    }
    /*}*/
  }

  /*
  showLightbox: boolean = false;
  lightboxImageSrc: string = '';
  lightboxImageAlt: string = '';
  carouselPaused: boolean = false;

  // kuvan maksimileveys ja -korkeus
  maxImageWidth: number = 600;
  maxImageHeight: number = 400;

  // kuvan suurentamiseen
  openLightbox(imageSrc: string, imageAlt: string) {
    this.showLightbox = true;
    this.lightboxImageSrc = imageSrc;
    this.lightboxImageAlt = imageAlt;
    this.carouselPaused = true; // pysäytä 
  }

  closeLightbox() {
    this.showLightbox = false;
    this.carouselPaused = false; //käynnistä karuselli uudelleen
  }

  toggleLightbox(imageSrc: string, imageAlt: string) {
    if (this.showLightbox && this.lightboxImageSrc === imageSrc) {
      this.closeLightbox();
    } else {
      this.openLightbox(imageSrc, imageAlt);
    }
  }

  fitImageToScreen(event: any) {
    const img = event.target;
    const maxWidth = this.maxImageWidth;
    const maxHeight = this.maxImageHeight;

    const widthRatio = maxWidth / img.width;
    const heightRatio = maxHeight / img.height;

    const scale = Math.min(widthRatio, heightRatio);

    img.width = img.width * scale;
    img.height = img.height * scale;
  }*/
}
