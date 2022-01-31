import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(employees,searchItem){
    if(!employees || !searchItem){
      return employees;
    }
    return employees.filter ((emp) => {
       return emp.empName.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1 ;
    })
  }

}
