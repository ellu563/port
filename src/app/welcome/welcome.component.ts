import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css', '../../shared-styles.css'],
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isNavbarFixed = false;
  lastScrollTop = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if (window.innerWidth < 485) {
      const st = window.scrollY;

      if (st > this.lastScrollTop) {
        this.isNavbarFixed = false;
      } else if (st === 0) {
        this.isNavbarFixed = false;
      } else {
        this.isNavbarFixed = true;
      }

      this.lastScrollTop = st;
    }
  }

  /*vaihdetaan graphic-design sisalto hoveroidessa*/
  hover: boolean = false;

  /*sama web-dev osiolle*/
  hoverWeb: boolean = false;

  /*graphic design*/
  onHover(): void {
    this.hover = true;
  }

  onLeave(): void {
    this.hover = false;
  }

  /* web dev */
  onHoverWeb(): void {
    this.hoverWeb = true;
  }

  onLeaveWeb(): void {
    this.hoverWeb = false;
  }

}
