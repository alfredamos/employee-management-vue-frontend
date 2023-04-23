import type Gender from "../enum/gender.enum";

class CurrentUserDto{
      id!: string;
      fullName!: string;
      email!: string;
      phone!: string;
      dateOfBirth!: Date;
      departmentId!: string;
      gender!: Gender
}

export default CurrentUserDto