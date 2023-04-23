import axios from "axios";
import type LoginDto from "../models/auth/login.model";
import authUrl from "@/utils/api-utl.util";
import type ChangePasswordDto from "../models/auth/change-password.model";
import type EditProfileDto from "../models/auth/edit-profile.model";
import type SignupDto from "../models/auth/signup.model";
import type AuthUserDto from "@/models/auth/auth-user.model";
class ApiAuth {
  static changePassword(changePasswordDto: ChangePasswordDto) {
    return axios.patch(authUrl.changePasswordUrl, changePasswordDto);
  }

  static editProfile(editProfileDto: EditProfileDto) {
    return axios.patch(authUrl.editProfileUrl, editProfileDto);
  }

  static login(loginDto: LoginDto) {
    return axios.post(authUrl.loginUrl, loginDto);
  }

  static signup(signupDto: SignupDto) {
    return axios.post(authUrl.signupUrl, signupDto);
  }
}

export default ApiAuth