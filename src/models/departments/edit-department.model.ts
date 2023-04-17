import type EmployeeDto from '../employees/employee.model';
export default class EditDepartmentDto {
  id!: number;
  name!: string;
  employees?: EmployeeDto[];
}
