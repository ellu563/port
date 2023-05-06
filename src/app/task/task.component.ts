import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

  // onSubmit lähettää lomakkeen tiedon firebaseen
  onSubmit() {
    let data = this.taskService.form.value;
    this.taskService
      .addTask(data)
      .then((res) => {
        console.log(res);
        alert('Task added!');
      })
      .catch((error) => console.error(error));
    this.taskService.form.reset(); // tyhjentää lomakkeen
  }

}
