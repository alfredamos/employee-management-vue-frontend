import { apiContext } from "@/behavior-subject/auth-context.rxjs";
import type AuthUserDto from "@/models/auth/auth-user.model";
import type CurrentUserDto from "@/models/auth/current-user.model";
import Gender from "@/models/enum/gender.enum";
import UserType from "@/models/enum/user-type.enum";
import { take, tap } from "rxjs";
import { ref, onMounted } from "vue";

const initialCurrentUser: CurrentUserDto = {
  id: "",
  fullName: "",
  email: "",
  phone: "",
  departmentId: "",
  gender: Gender.Male,
  dateOfBirth: new Date(),
};

const initialAuthUser: AuthUserDto = {
  user: initialCurrentUser,
  id: "",
  fullName: "",
  isLoggedIn: false,
  message: "Not yet Logged-in",
  userType: UserType.Staff,
};

export function useAuthUser() {
  const currentUser = ref<CurrentUserDto>(initialCurrentUser);
  const authUser = ref<AuthUserDto>(initialAuthUser);

  onMounted(() => {
    apiContext.authUser$
      .pipe(
        tap((autUser) => {
          authUser.value = autUser;
          currentUser.value = autUser?.user!;
        }),
        take(1)
      )
      .subscribe();
  });

  return { authUser, currentUser };
}
