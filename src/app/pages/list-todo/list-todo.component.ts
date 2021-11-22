import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { take } from 'rxjs';

import type { Todo } from './interfaces/todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {
  public todoList: Todo[] = [];

  public constructor(private readonly todoService: TodoService) {}

  public ngOnInit(): void {
    this.getTodoList();
  }

  public path(event: KeyboardEvent): void {
    console.error(event.key === 'Enter');
  }

  private getTodoList(): void {
    this.todoService
      .get()
      .pipe(take(1))
      .subscribe((response: Todo[]) => (this.todoList = response));
  }
}
