import Axios from "@/utils/axios-interceptor.util";
import type LoginDto from "../models/auth/login.model";
import authUrl from "@/utils/auth-utl.util";
import type ChangePasswordDto from "../models/auth/change-password.model";
import type EditProfileDto from "../models/auth/edit-profile.model";
import type SignupDto from "../models/auth/signup.model";
class ApiAuth {
  static changePassword(changePasswordDto: ChangePasswordDto) {
    return Axios.patch(authUrl.changePasswordUrl, changePasswordDto);
  }

  static editProfile(editProfileDto: EditProfileDto) {
    return Axios.patch(authUrl.editProfileUrl, editProfileDto);
  }

  static login(loginDto: LoginDto) {
    return Axios.post(authUrl.loginUrl, loginDto);
  }

  static signup(signupDto: SignupDto) {
    return Axios.post(authUrl.signupUrl, signupDto);
  }
}

export default ApiAuth