import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css', './contact-me.component.scss'],

})
export class ContactMeComponent implements OnInit {

  imageUrls: string[] = [
    'assets/images/birtd-email.png',
  ];

  /*for contact me*/
  waveActive: boolean = false;

  constructor() {
    this.preloadImages(this.imageUrls);
  }

  preloadImages(imageUrls: string[]): void {
    imageUrls.forEach(imageUrl => {
      const img = new Image();
      img.src = imageUrl;
    });
  }

  ngOnInit(): void {
  }

  /*for contact me*/
  sendEmail() {
    this.waveActive = true;
    setTimeout(() => {
      this.waveActive = false;
    }, 1500);
  }


}
