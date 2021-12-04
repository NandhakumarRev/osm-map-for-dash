import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeesListComponent} from './employees-list/employees-list.component';
import {DepartmentsListComponent} from './departments-list/departments-list.component';

const routes: Routes = [
  {path:"departments", component:DepartmentsListComponent},
  {path:"employees", component:EmployeesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
