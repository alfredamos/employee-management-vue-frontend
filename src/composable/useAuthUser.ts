import { apiContext } from "@/behavior-subject/auth-context.rxjs";
import type AuthUserDto from "@/models/auth/auth-user.model";
import type CurrentUserDto from "@/models/auth/current-user.model";
import {
  initialCurrentUser,
  initialAuthUser,
} from "@/utils/authUser-initial.util";
import { Subscription, tap } from "rxjs";
import { ref, onMounted, onUnmounted } from "vue";

export function useAuthUser() {
  const currentUser = ref<CurrentUserDto>(initialCurrentUser);
  const authUser = ref<AuthUserDto>(initialAuthUser);
  let subscription: Subscription;

  onMounted(() => {
    subscription = apiContext.authUser$
      .pipe(
        tap((user) => {
          authUser.value = user;
        })
      )
      .subscribe();
  });

  onUnmounted(() => {
    console.log("subs unmounted");
    subscription.unsubscribe();
  });
  
  return { authUser, currentUser };
}
