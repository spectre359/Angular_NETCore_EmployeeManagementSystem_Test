
import { EmployeeService } from '../employee_service/employee.service';
import * as _ from 'lodash';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-employees',
  templateUrl: './fetch-employees.component.html'
})
export class FetchEmployeesComponent implements OnInit {
  public employees: Employee[];
  public currentEmployee: any;

  constructor(private employeeService: EmployeeService) {
    employeeService.get().subscribe((data: any) => this.employees = data);
    this.currentEmployee = this.setInitialValuesForEmployeeData();
  }
  ngOnInit() {
  }

  private setInitialValuesForEmployeeData() {
    return {
      name: '',
      position: ''
    }
  }

  public deleteRecord(employee) {
    debugger;
    const deleteIndex = _.findIndex(this.employees, { name: employee.name });
    this.employeeService.remove(employee).subscribe(
      result => this.employees.splice(deleteIndex, 1)
    );
  }

  public editRecord(record) {
    debugger;
    const clonedRecord = Object.assign({}, record);
    this.currentEmployee = clonedRecord;

  }

  public newRecord() {
    debugger;
    this.currentEmployee = this.setInitialValuesForEmployeeData();
  }
   
  public createOrUpdateEmployee = function (employee: any) {
  
    debugger;
    let employeeWithId;
    employeeWithId = _.find(this.employees, (el => el.name === employee.name));

    if (employeeWithId) {
      const updateIndex = _.findIndex(this.employees, { name: employeeWithId.name });
      this.employeeService.update(employee).subscribe(
        employeeRecord => this.employees.splice(updateIndex, 1, employee)
      );
    } else {
      this.employeeService.add(employee).subscribe(
        employeeRecord => this.employees.push(employee)
      );
    }

    this.currentEmployee = this.setInitialValuesForEmployeeData();
  };
}

interface Employee {
  name: string;
  position: string;
}
