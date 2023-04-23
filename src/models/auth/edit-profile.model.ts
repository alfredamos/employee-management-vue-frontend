import type Gender from "../enum/gender.enum";
import type UserType from "../enum/user-type.enum";

class EditProfileDto {
  fullName!: string;
  email!: string;
  phone!: string;
  gender!: Gender; 
  password!: string;
  newPassword!: string;
  departmentId!: string;
  userTyPe?: UserType;
  dateOfBirth?: Date;
}

export default EditProfileDto