import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { Loaner } from '../loaner';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loaner: Loaner;

  amount: any;
  time: any;

  interest: any;

  /* näytetään tiedot vasta kun tarvitaan */
  loanerSubmitted: boolean = false;
  /* laitetaan nuo tiedot nyt tuonne loanDataan, niin voidaan esittää ne sivulla */
  loanData: any = {};

  constructor(private loanService: LoanService) {

    this.loaner = new Loaner();

    this.loaner.id;
    this.loaner.firstName;
    this.loaner.lastName;
    this.loaner.email;
    this.loaner.phoneNumber;
    this.loaner.calculate;

    // alustetaan 0
    this.amount = 0;
    this.time = 0;

    this.interest = 0;
  }

  ngOnInit(): void {
  }

  // lähetä tieto servicelle
  onSubmit(e: any) {
    this.loanerSubmitted = true;
    // laitetaan tuonne ne lomakkeen tiedot
    this.loanData = { ...e.value };

    // jotta lomake tyhjenee
    this.amount = 0;
    this.time = 0;
    this.loaner.calculate = 0;
  }

  // haetaan määrä
  addAmount(a: any) {
    this.interest = (Math.pow((1 + 9.5 / 1200), 12 * this.time) * 9.5 / 1200) / ((Math.pow((1 + 9.5 / 1200), 12 * this.time)) - 1) * this.amount;
    a = this.amount;
  }

  // haetaan aika
  addTime(t: any) {
    this.interest = (Math.pow((1 + 9.5 / 1200), 12 * this.time) * 9.5 / 1200) / ((Math.pow((1 + 9.5 / 1200), 12 * this.time)) - 1) * this.amount;
    t = this.time;
  }

  // lasku yhteen
  addTogether() {
    if (this.time >= 1 && this.amount >= 500) {// laitetaan vielä ehto
      // jotta saadaan summa vasta kun molemmat dokumentissa annetut arvot on ylittyneet
      this.loaner.calculate = (this.interest).toFixed(2);
    }
  }

}
