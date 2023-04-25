import type AuthUserDto from "@/models/auth/auth-user.model";
import type CurrentUserDto from "@/models/auth/current-user.model";
import Gender from "@/models/enum/gender.enum";
import UserType from "@/models/enum/user-type.enum";

export const initialCurrentUser: CurrentUserDto = {
  id: "",
  fullName: "",
  email: "",
  phone: "",
  departmentId: "",
  gender: Gender.Male,
  dateOfBirth: new Date(),
};

export const initialAuthUser: AuthUserDto = {
  user: initialCurrentUser,
  id: "",
  fullName: "",
  isLoggedIn: false,
  message: "Not yet Logged-in",
  userType: UserType.Staff,
};


