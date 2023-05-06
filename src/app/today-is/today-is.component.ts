import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-is',
  templateUrl: './today-is.component.html',
  styleUrls: ['./today-is.component.css']
})
export class TodayIsComponent implements OnInit {

  constructor() { }

  public today = Date.now();

  ngOnInit(): void {
    setInterval(() => {
      this.today = Date.now();
    }, 100);
  }

}
