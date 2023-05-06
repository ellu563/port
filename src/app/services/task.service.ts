import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  form = new FormGroup({
    task: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  constructor(private firestore: AngularFirestore) { }

  addTask(data: any): Promise<any> {
    return this.firestore
      .collection('taskList')
      .add(data)
      .catch((error) => console.log(error));
  }

  getTasks() {
    return this.firestore.collection('taskList').snapshotChanges();
  }

  deleteTask(data: any): Promise<any> {
    return this.firestore
      .collection('taskList') // hakee collectionin
      .doc(data.payload.doc.id) // ettii id:n
      .delete(); // poistaa
  }
}