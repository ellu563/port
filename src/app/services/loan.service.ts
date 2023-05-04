import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }

  onSubmit(e: any) {
    let calcci = e.calculate;
    let id = e.id;
    let firstName = e.firstName;
    let lastName = e.lastName;
    let email = e.email;
    let phoneNumber = e.phoneNumber;

    console.log("Lomakkeen tiedot service luokasta: Summa: " + calcci + "€, Henkilötunnus " + id + ", Etunimi: " + firstName + ", Sukunimi: " + lastName + ", Sahkopostiosoite: " + email + ", Puhelinnumero: " + phoneNumber);
  }
}
