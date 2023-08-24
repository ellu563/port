import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Buyer } from '../buyer';
import { TicketService } from '../services/ticket.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  buyer: Buyer;

  // lippujen hinnat
  basicTicket: number = 16;
  studentTicket: number = 10;
  seniorTicket: number = 8;

  constructor(private ticketService: TicketService) {

    this.buyer = new Buyer();

    this.buyer.firstName;
    this.buyer.lastName;
    this.buyer.email;
    this.buyer.result;
    this.buyer.studentresult;
    this.buyer.seniorresult;
    this.buyer.finalPrice;

  }


  ngOnInit(): void {
  }

  // peruslippu
  addValue(btn: string): void {
    if (btn == '+' && this.buyer.result < 10) {
      this.buyer.result++;
      this.buyer.finalPrice = this.buyer.result * this.basicTicket + (this.buyer.studentresult * this.studentTicket) + (this.buyer.seniorresult * this.seniorTicket);
    }
    else if (btn == '-' && this.buyer.result > 0) {
      this.buyer.result--;
      this.buyer.finalPrice = this.buyer.result * this.basicTicket + (this.buyer.studentresult * this.studentTicket) + (this.buyer.seniorresult * this.seniorTicket);
    }
  }

  // opiskelijalippu
  addValueStudent(btn: string): void {
    if (btn == '+' && this.buyer.studentresult < 10) {
      this.buyer.studentresult++;
      this.buyer.finalPrice = this.buyer.studentresult * this.studentTicket + (this.buyer.result * this.basicTicket) + (this.buyer.seniorresult * this.seniorTicket);
    }
    else if (btn == '-' && this.buyer.studentresult > 0) {
      this.buyer.studentresult--;
      this.buyer.finalPrice = this.buyer.studentresult * this.studentTicket + (this.buyer.result * this.basicTicket) + (this.buyer.seniorresult * this.seniorTicket);;
    }
  }

  // seniorlippu
  addValueSenior(btn: string): void {
    if (btn == '+' && this.buyer.seniorresult < 10) {
      this.buyer.seniorresult++;
      this.buyer.finalPrice = this.buyer.seniorresult * this.seniorTicket + (this.buyer.result * this.basicTicket) + (this.buyer.studentresult * this.studentTicket);
    }
    else if (btn == '-' && this.buyer.seniorresult > 0) {
      this.buyer.seniorresult--;
      this.buyer.finalPrice = this.buyer.seniorresult * this.seniorTicket + (this.buyer.result * this.basicTicket) + (this.buyer.studentresult * this.studentTicket);;
    }
  }

  // checkboxia varten, jos checkbox chekattu, annetaan 15% ale
  onChange(ob: MatCheckboxChange) {
    if (ob.checked === true) {
      this.buyer.finalPrice = this.buyer.finalPrice * 0.85;
      console.log("yes it is checked:" + ob.checked)
    }
    // jos checkkaus otettu pois, halutaan saada se normi hinta
    else if (ob.checked === false) {
      this.buyer.finalPrice = (this.buyer.result * this.basicTicket) + (this.buyer.studentresult * this.studentTicket) + (this.buyer.seniorresult * this.seniorTicket);
      console.log("false:" + ob.checked);
    }
  }

  // lahetys
  /*
  onSubmit(e: any) {
    // nollataan myös määrätiedot lahetyksen jälkeen
    this.buyer.result = 0;
    this.buyer.studentresult = 0;
    this.buyer.seniorresult = 0;

    // lähetetään servicelle
    this.ticketService.onSubmit(e.value);

    /* tulostetaan tiedot konsoliin
    console.log("Lopullinen hinta: " + e.value.finalPrice + " €");
    console.log("Etunimi: " + e.value.firstName);
    console.log("Sukunimi: " + e.value.lastName);
    console.log("Sahkopostiosoite: " + e.value.email);
    
  }*/

  showConfirmation = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      // nollataan myös määrätiedot lahetyksen jälkeen
      this.buyer.result = 0;
      this.buyer.studentresult = 0;
      this.buyer.seniorresult = 0;

      // lähetetään servicelle
      this.ticketService.onSubmit(form.value);

      /* tulostetaan tiedot konsoliin
      console.log("Lopullinen hinta: " + e.value.finalPrice + " €");
      console.log("Etunimi: " + e.value.firstName);
      console.log("Sukunimi: " + e.value.lastName);
      console.log("Sahkopostiosoite: " + e.value.email);*/

      this.showConfirmation = true;
    }


  }

}

