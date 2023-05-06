import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  mesList: any;

  constructor(public taskService: TaskService) { }

  // aina kun komponentti latautuu niin haetaan kannasta to-do lista
  ngOnInit(): void {
    this.getTasks();
  }

  getTasks = () =>
    this.taskService.getTasks().subscribe((res: any) => (this.mesList = res));

  deleteNow = (data: any) => this.taskService.deleteTask(data);

}
