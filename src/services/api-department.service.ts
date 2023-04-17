import ApiService from "./api-service.util";
import departmentBaseUrl from '../utils/department-url.util';
import type DepartmentDto from '../models/departments/department.model';

class ApiDepartment extends ApiService<DepartmentDto>{
      constructor(){
            super(departmentBaseUrl)
      }
}

const departmentService = new ApiDepartment();
export default departmentService;