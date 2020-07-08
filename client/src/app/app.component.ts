import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Employee List';
  employees = []

  control =  {
    filter: '',
    sort: 'name-asc',
  }

  constructor(private employeesService: EmployeesService) {
  }

  ngOnInit(): void {
      this.getEmployees();
  } 

  getEmployees() {
    this.employeesService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    })
  }

  createNewEmployee(employee){
    const newEmployee = {
      //set random EmployeeNumber for testing purposes
      employeeNumber: +(new Date().getUTCMilliseconds() + new Date().getUTCMilliseconds()),
      ...employee
    }
    this.employees.unshift(newEmployee);
    this.employeesService.createEmployee(newEmployee).subscribe(() => {
      this.getEmployees();
    });
  }

  deleteEmployee(employeeNumber: number){
    this.employees = this.employees.filter(employee => employee.employeeNumber !== employeeNumber)
  }

  editEmployee(employee){
    this.employees = this.employees.map(it => {
      if(employee.employeeNumber === it.employeeNumber) it = employee;
      return it;
    })
  }
}
