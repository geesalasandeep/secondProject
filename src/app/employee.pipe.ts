import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employee'
})
export class EmployeePipe implements PipeTransform {

  
    transform(employees,searchItem){
      if(!employees || !searchItem){
        return employees;
      }
      return employees.filter ((emp) => {
        // console.log(emp);
        
 return  emp.empName.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1;
        // console.log(abc);
      })
      
    }
  }


