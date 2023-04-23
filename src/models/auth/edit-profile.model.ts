import type UserType from "../enum/user-type.enum";

class EditProfileDto {
  name!: string;
  email!: string;
  gender!: string;
  photoPath?: string;
  password!: string;
  newPassword!: string;
  departmentId!: number;
  userTyPe?: UserType;
  dateOfBirth?: Date;
}

export default EditProfileDto