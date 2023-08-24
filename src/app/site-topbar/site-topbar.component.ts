import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-topbar',
  templateUrl: './site-topbar.component.html',
  styleUrls: ['./site-topbar.component.css']
})
export class SiteTopbarComponent implements OnInit {

  imageUrls: string[] = [
    'assets/images/logou.png',
    'assets/images/E-logo-07.png'
  ];

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

}
