import type DepartmentDto from '../departments/department.model';
import EmployeeDto from './employee.model';

export default class ListEmployeeDto extends EmployeeDto{  
  department?: DepartmentDto;
}
