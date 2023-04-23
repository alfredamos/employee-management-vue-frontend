import type UserType from "../enum/user-type.enum";

class AuthUserDto {
  id!: string;
  fullName!: string;
  userType!: UserType;
  token?: string;
  message?: string;
  isLoggedIn?: boolean;
}

export default AuthUserDto
