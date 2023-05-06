import { Component, OnInit } from '@angular/core';
import { GroceService } from '../services/groce.service';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

  groceries = ['Good', 'Ok', 'Bad'];

  groCeries: string[] = [];

  constructor(public groceService: GroceService) { }

  ngOnInit(): void { }

  addG(grocery: string) {
    this.groCeries.push(grocery);
  }

  removeG = (grocery: string) => {
    let index = this.groCeries.indexOf(grocery);
    if (index > -1) this.groCeries.splice(index, 1);
  };

  onSubmit() {
    // VIRHE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // this.groceService.form.value = this.groCeries;
    let data = this.groceService.form.value;
    // then-metodi käsittelee promisen eli saadaan tieto asynkronisen tapahtuman tuloksesta
    this.groceService
      .addG(data)
      .then((res: any) => {
        console.log(res);
        alert('G added!');
      })
      .catch((error: any) => console.error(error));
    this.groceService.form.reset();
  }

}
