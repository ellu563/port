import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-this-portfolio',
  templateUrl: './this-portfolio.component.html',
  styleUrls: ['./this-portfolio.component.css']
})
export class ThisPortfolioComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  toGitHub() {
    window.open('https://github.com/ellu563/port', '_blank');
  }

}
