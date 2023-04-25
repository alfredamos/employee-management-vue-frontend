import { BehaviorSubject } from "rxjs";
import type AuthUserDto from "../models/auth/auth-user.model";
import { initialAuthUser } from "@/utils/authUser-initial.util";

class AuthContext {
  private authUserSubject = new BehaviorSubject<AuthUserDto>(initialAuthUser);
  authUser$ = this.authUserSubject.asObservable();

  constructor() {
    const authUser = this.getUser();
    if (authUser) {
      this.updateAuthUser$(authUser);
    }
  }

  updateAuthUser$(value: AuthUserDto) {   
    this.authUserSubject.next(value);
  }

  getAuthUser(): AuthUserDto {
    return this.authUserSubject.getValue();
  }

  setUser(value: AuthUserDto) {
    localStorage.setItem("authUser", JSON.stringify(value));
  }

  getUser(): AuthUserDto {
    const authUser = JSON.parse(localStorage.getItem("authUser")!);
    return authUser;
  }

  removeUser() {
    localStorage.removeItem("authUser");
  }

  login(value: AuthUserDto) {
    this.updateAuthUser$(value);
    this.setUser(value);
  }

  logout(value: AuthUserDto) {
     //provide("authUser", value);
    console.log("In context-logout, value", value);
    this.updateAuthUser$(value);
    this.removeUser();
  }
}

export const apiContext = new AuthContext();
