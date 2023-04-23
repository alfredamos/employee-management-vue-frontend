import type DepartmentDto from '../departments/department.model';

export default class ListEmployeeDto {
  id = "";
  name!: string;
  email!: string;
  gender!: string;
  photoPath?: string;
  departmentId!: number;
  department?: DepartmentDto;
}
