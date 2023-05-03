import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public slides = [
    { src: "assets/images/kulssi.jpg" },
    { src: "assets/images/kulssoni.jpg" },
    { src: "assets/images/pekkull.jpg" },
    { src: "assets/images/kullerssoni.jpg" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
