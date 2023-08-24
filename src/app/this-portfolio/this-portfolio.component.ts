import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-this-portfolio',
  templateUrl: './this-portfolio.component.html',
  styleUrls: ['./this-portfolio.component.css']
})
export class ThisPortfolioComponent implements OnInit {

  imageUrls: string[] = [
    'assets/images/logou.png',
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
