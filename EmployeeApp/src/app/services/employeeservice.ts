import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(2,'Maitri',50000,"JAVA"),
   new Employee(1,'Maliha',20000,"Angular"),
   new Employee(5,'Neha',30000,"HTML"),
   new Employee(4,'Arya',20000,"Java"),
   new Employee(3,'Puja',25000,"Java")
];   
 
 

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}