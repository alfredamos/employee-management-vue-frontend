import type Gender from "../enum/gender.enum";

export default class EmployeeDto {
  id = "";
  fullName!: string;
  email!: string;
  gender!: Gender;
  photoPath?: string;
  dateOfBirth?: Date;
  departmentId!: string;
}
