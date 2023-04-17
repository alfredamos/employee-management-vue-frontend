import type EmployeeDto from '../models/employees/employee.model';

function initialEmployee(): EmployeeDto {
  return {
    id: 0,
    name: "",
    email: "",
    gender: "",
    photoPath: "",
    departmentId: "",
  };
}

export default initialEmployee;
