import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListTodoComponent } from './list-todo.component';
import { ListTodoRoutingModule } from './list-todo-routing.module';

@NgModule({
  declarations: [ListTodoComponent],
  imports: [CommonModule, ListTodoRoutingModule]
})
export class ListTodoModule {}
