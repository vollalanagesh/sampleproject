import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from 'src/app/services/employee-service.service'
import {employeeListModel} from 'src/app/models/employeeListModel'

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

   employeeList: any=[];
  constructor(private e_service:EmployeeServiceService) { }

  ngOnInit(): void {
    this.e_service.employeeList().subscribe(res=>
      {
        this.employeeList=res
        console.log(this.employeeList.data)
        this.e_service.employeeDetails(2).subscribe(res=>console.log(res))
      });
  }

}
