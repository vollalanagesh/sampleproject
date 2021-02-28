import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent} from './employees/employees-list/employees-list.component'
import {EmployeeDetailsComponent} from './employees/employee-details/employee-details.component'
import {CreateUpdateEmployeeComponent} from './employees/create-update-employee/create-update-employee.component'

const routes: Routes = [
  {path:'' ,component:EmployeesListComponent},
  {path:'employeeDetails/:id' ,component:EmployeeDetailsComponent},
  {path:'Employee' ,component:CreateUpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
