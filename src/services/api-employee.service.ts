import ApiService from "./api-service.util";
import type EmployeeDto from '../models/employees/employee.model';
import employeeBaseUrl from "@/utils/employee-url.util";

class ApiEmployee extends ApiService<EmployeeDto>{
      constructor(){
            super(employeeBaseUrl);
      }
}

const employeeService = new ApiEmployee();

export default employeeService;