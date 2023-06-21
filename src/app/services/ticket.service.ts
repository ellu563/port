import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  onSubmit(e: any) {
    let finalPrice = e.finalPrice;
    let firstName = e.firstName;
    let lastName = e.lastName;
    let email = e.email;
    console.log("Lomakkeen tiedot service luokasta: Lopullinen hinta " + finalPrice + "€, Etunimi: " + firstName + ", Sukunimi: " + lastName + ", Sahkopostiosoite: " + email);
  }
}
