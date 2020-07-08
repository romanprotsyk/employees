import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-empoyees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  idEdit = null;
  dataEdit: {
    employeeNumber: 0,
    firstName: '',
    lastName: ''
  };
  @Input() employees: Array<Employee>;
  @Output() deleteEmployee = new EventEmitter();
  @Output() editEmployee = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void { }

  clickEdit(employee){
    const { employeeNumber, firstName, lastName} = employee;
    this.idEdit = employeeNumber;
    this.dataEdit = { employeeNumber, firstName, lastName };
  }

  editSubmit(){
    this.editEmployee.emit({
      employeeNumber: this.idEdit,
      ...this.dataEdit
    });

    this.idEdit = null;
  }

}
