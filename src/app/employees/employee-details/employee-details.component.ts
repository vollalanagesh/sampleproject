import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {EmployeeServiceService} from 'src/app/services/employee-service.service'
import {EmployeeData} from 'src/app/models/employeeListModel'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeDetailObject!:EmployeeData
  constructor(private activeRoute:ActivatedRoute,private e_service:EmployeeServiceService) 
  { 
      this.employeeDetailObject = new EmployeeData();
      this.activeRoute.params.subscribe(
        params=>
         {
           console.log(params['id'])

           this.e_service.employeeDetails(params['id']).subscribe(
             res=>
                 {
                    this.employeeDetailsObject=<EmployeeData> res;
                    console.log(this.employeeDetailObject)

                 }
         
              )
         }
      )
  }

  public get employeeDetailsObject():EmployeeData
  {
    return this.employeeDetailObject
  }
  public set employeeDetailsObject(value:EmployeeData)
  {
    this.employeeDetailObject=value;
  }

  ngOnInit(): void {
  }

}
