import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emp } from '../classes/emp';
import { Employee } from '../classes/employee';
import { User } from '../classes/user';

import { TestserviceService } from '../services/testservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee?: Employee[];
  emp?: Emp[];
  user?: User[];

  constructor(private testservice: TestserviceService) { }

  ngOnInit(): void {
   // this.getEmployees();
    this.getAllEmployees();
    this.getAllUsers();
  }

  getEmployees(){
    this.testservice.getComments().subscribe(x=>{
      this.employee = x;      
     });
  }

  getAllEmployees(){
    this.testservice.getAllEmp().subscribe(x=>{
      this.emp = x;      
     });
  }

  getAllUsers(){
    this.testservice.getAllUsers().subscribe(x=>{
      this.user = x;      
     });
  }

  saveEmp(data: any){    
    this.testservice.saveEmp(data).subscribe(response=>{
    console.info(response);    
    });    
  }

}
