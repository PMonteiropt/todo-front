import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
    
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = []
 

  constructor(private todoService:TodoDataService) { }

  ngOnInit() {

    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('KLS').subscribe (

      response => {
        this.todos = response;
      }
    )
  }

  public deleteTodo(id) {
   this.todoService.deleteTodo(id).subscribe(
     response=> {
       console.log(response);
       this.refreshTodos();
     }
   )
  }

}
