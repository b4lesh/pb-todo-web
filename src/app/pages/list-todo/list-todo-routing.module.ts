import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ListTodoComponent } from './list-todo.component';

const routes: Routes = [
  {
    path: '',
    component: ListTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTodoRoutingModule {}
