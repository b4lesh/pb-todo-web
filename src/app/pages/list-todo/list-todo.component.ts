import { Component } from '@angular/core';

import type { Todo } from './interfaces/todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent {
  public constructor(private readonly todoService: TodoService) {
    todoService.pathTodo(1, { text: 'JG', checked: true }).then(() => {
      todoService.getTodoList().subscribe((todoList: Todo[]) => {
        console.error(todoList);
      });
    });
  }
}
