import type EmployeeDto from '../employees/employee.model';
export default class EditDepartmentDto {
  id!: string;
  name!: string;
  employees?: EmployeeDto[];
}
