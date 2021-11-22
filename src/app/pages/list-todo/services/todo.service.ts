/* eslint-disable @typescript-eslint/typedef */

import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import type { Todo, TodoPath } from '../interfaces/todo';

const mockTodoList: Todo[] = [
  {
    id: 1,
    text: 'Купить хлеб',
    checked: false
  },
  {
    id: 2,
    text: 'Прочитать книгу про котов',
    checked: false
  },
  {
    id: 3,
    text: 'Постирать белье',
    checked: true
  }
];

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly mockTodoList$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(
    mockTodoList
  );

  public get(): Observable<Todo[]> {
    this.mockTodoList$.next(mockTodoList);
    return this.mockTodoList$.asObservable();
  }

  public async path(id: number, path: TodoPath): Promise<void> {
    return new Promise((resolve) => {
      for (const [i, todo] of mockTodoList.entries()) {
        if (todo.id === id) {
          mockTodoList[i] = { ...todo, ...path };
          resolve();
        }
      }
    });
  }

  public async delete(id: number): Promise<void> {
    return new Promise((resolve) => {
      for (const [i, todo] of mockTodoList.entries()) {
        if (todo.id === id) {
          mockTodoList.splice(i, 1);
          resolve();
        }
      }
    });
  }
}
