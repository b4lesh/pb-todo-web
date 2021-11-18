/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      import('./pages/list-todo/list-todo.module').then((module) => module.ListTodoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
