import type DepartmentDto from '../models/departments/department.model';
export default function initialDepartment(): DepartmentDto{
      return {
            id: 0,
            name: ""
      }
}