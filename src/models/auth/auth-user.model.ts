import type UserType from "../enum/user-type.enum";
import type CurrentUserDto from "./current-user.model";

class AuthUserDto {
  id!: string;
  fullName!: string;
  userType!: UserType;
  token?: string;
  message?: string;
  isLoggedIn?: boolean;
  user?: CurrentUserDto
}

export default AuthUserDto
