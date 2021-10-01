import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'department',component:DepartmentComponent},
  {path:'test',component:AddEditDepComponent},
  {path:'test2',component:AddEditEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
