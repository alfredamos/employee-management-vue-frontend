import { BehaviorSubject } from "rxjs";
import type AuthUserDto from "../models/auth/auth-user.model";
import ApiAuth from "@/services/api-auth.service";

class AuthContext {
  private authUserSubject = new BehaviorSubject<AuthUserDto>(null!);
  authUser$ = this.authUserSubject.asObservable();

  updateAuthUser$(value: AuthUserDto){
      this.authUserSubject.next(value);
  }

  getAuthUser(): AuthUserDto{
     return this.authUserSubject.getValue();
  }
}

export const apiContext = new AuthContext()
