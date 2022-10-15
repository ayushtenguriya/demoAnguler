import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emp } from '../classes/emp';
import { Employee } from '../classes/employee';
import { TestserviceService } from '../services/testservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee?: Employee[];
  emp?: Emp[];

  constructor(private testservice: TestserviceService) { }

  ngOnInit(): void {
    this.getEmployees();
    this.getAllEmployees();
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

  saveEmp(data: any){    
    this.testservice.saveEmp(data).subscribe(response=>{
    console.info(response);    
    });    
  }

}
