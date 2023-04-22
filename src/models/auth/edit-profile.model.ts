class EditProfileDto {
  name!: string;
  email!: string;
  gender!: string;
  photoPath?: string;
  password!: string;
  departmentId!: number;
}

export default EditProfileDto