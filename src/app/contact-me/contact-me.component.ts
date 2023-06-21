import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css', './contact-me.component.scss'],

})
export class ContactMeComponent implements OnInit {

  /*for contact me*/
  waveActive: boolean = false;

  constructor() { }

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
