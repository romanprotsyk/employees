import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + '/employees');
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl + '/employees', employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl + `/employees`, employee);
  }

  deleteEmployees(employee: Employee): Observable<any> {
    return this.http.delete<Employee>(this.baseUrl + `/employees${employee.employeeNumber}`);
  }
}
