import type Gender from "../enum/gender.enum";

export default class EmployeeDto{
      id = "";
      name!: string;
      email!: string;
      gender!: Gender;
      photoPath?: string;
      departmentId!: number;
}