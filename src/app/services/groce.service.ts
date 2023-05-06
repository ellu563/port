import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class GroceService {
  form = new FormGroup({
    addon: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  constructor(private firestore: AngularFirestore) { }

  async addG(data: any): Promise<any> {
    try {
      return await this.firestore
        .collection('gees')
        .add(data);
    } catch (error) {
      return console.log(error);
    }
  }

  getG() {
    return this.firestore.collection('gees').snapshotChanges();
  }

  deleteG(data: any): Promise<any> {
    return this.firestore
      .collection('gees') // hakee collectionin
      .doc(data.payload.doc.id) // ettii id:n
      .delete(); // poistaa
  }
}

