import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-addOrUpdateEmployee',
  templateUrl: './addOrUpdateEmployee.component.html'
})
export class AddOrUpdateEmployeeComponent implements OnInit {
  @Output() employeeCreated = new EventEmitter<any>();
  @Input() employee: any;

  public buttonText = 'Save';

  constructor() {
    this.clearEmployeeInfo();
    console.log(this.employee.name);
  }

  ngOnInit() {

  }

  private clearEmployeeInfo = function () {
    // Create an empty employee object
    this.employee = {
      name: '',
      position: '',
    };
  };

  public addOrUpdateEmployeeRecord = function (event) {
    debugger;
    this.employeeCreated.emit(this.employee);
    this.clearEmployeeInfo();
  };
}
