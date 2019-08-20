import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-employees',
  templateUrl: './fetch-employees.component.html'
})
export class FetchEmployeesComponent {
  public employees: Employee[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Employee[]>(baseUrl + 'api/Employee/employees').subscribe(result => {
      this.employees = result;
    }, error => console.error(error));
  }
}

interface Employee {
  name: string;
  position: number;
}
