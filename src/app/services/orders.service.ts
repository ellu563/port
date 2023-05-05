import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  form = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    coffeeOrder: new FormControl(''),
    completed: new FormControl(false),
  });

  constructor(private firestore: AngularFirestore) { }

  // metodi jolla lisätään tietoa Firestore kantaan
  createCoffeeOrder(data: any): Promise<any> {
    return this.firestore
      .collection('coffeeOrders')
      .add(data)
      .catch((error: any) => console.log(error));
  }
  // READ. Metodi jolla luetaan dataa firestore-kannasta
  // tämä metodi palauttaa Observablen, kun muut palauttavat Promisen
  // snapshotChanges kuuntelee collectionin realiaikaisia muutoksia ja palauttaa muuttuneet tiedot Observablena
  getCoffeeOrders() {
    return this.firestore.collection('coffeeOrders').snapshotChanges();
    //  tähän virheenkäsittely .pipellä
  }
  // UPDATE
  updateCoffeeOrder(data: any): Promise<any> {
    return (
      this.firestore
        .collection('coffeeOrders')
        .doc(data.payload.doc.id) // oikea tietue löydetään id:n avulla
        // merge viittaa siihen että päivitetäänkö koko dokumentti vai vaan määritetty osa
        // set: merkkaa: completed: true
        .set({ completed: true }, { merge: true })
    );
  }
  // eli ensi html, sitten ts, sitte tänne serviceen
  deleteCoffeeOrder(data: any): Promise<any> {
    return this.firestore
      .collection('coffeeOrders') // hakee collectionin
      .doc(data.payload.doc.id) // ettii id:n
      .delete(); // poistaa
  }
}
