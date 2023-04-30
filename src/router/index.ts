import { createRouter, createWebHistory } from "vue-router";

import ChangePasswordView from "@/views/auth/ChangePasswordView.vue";
import EditProfileView from "@/views/auth/EditProfileView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import SignupView from "@/views/auth/SignupView.vue";

import AddDepartmentView from "@/views/departments/AddDepartmentView.vue";
import DeleteDepartmentView from "@/views/departments/DeleteDepartmentView.vue";
import DetailDepartmentView from "@/views/departments/DetailDepartmentView.vue";
import EditDepartmentView from "@/views/departments/EditDepartmentView.vue";
import ListDepartmentView from "@/views/departments/ListDepartmentView.vue";

import DeleteEmployeeView from "@/views/employees/DeleteEmployeeView.vue";
import DetailEmployeeView from "@/views/employees/DetailEmployeeView.vue";
import ListEmployeeView from "@/views/employees/ListEmployeeView.vue";
import LogoutView from "@/views/auth/LogoutView.vue"
import HomeView from "@/views/auth/HomeView.vue"
import { apiContext } from "@/behavior-subject/auth-context.rxjs";
import {ref} from "vue";
import {tap} from "rxjs";
import type AuthUserDto from "@/models/auth/auth-user.model";
import { initialAuthUser } from "@/utils/authUser-initial.util";

const authUser = ref<AuthUserDto>(initialAuthUser)

apiContext.authUser$.pipe(
  tap(autUser => {
    authUser.value = autUser
  } )
).subscribe()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/change-password",
      name: "change-password",
      component: ChangePasswordView,
      meta: { requiredAuth: true },
    },
    {
      path: "/edit-profile",
      name: "edit-profile",
      component: EditProfileView,
      meta: { requiredAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { requiredNoAuth: true },
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
      meta: { requiredAuth: true },
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta: { requiredNoAuth: true },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
      meta: { requiredNoAuth: true },
    },

    {
      path: "/add-department",
      name: "add-department",
      component: AddDepartmentView,
      meta: { requiredAuth: true },
    },
    {
      path: "/delete-department/:id",
      name: "delete-department",
      component: DeleteDepartmentView,
      meta: { requiredAuth: true },
    },
    {
      path: "/detail-department/:id",
      name: "detail-department",
      component: DetailDepartmentView,
      meta: { requiredAuth: true },
    },
    {
      path: "/edit-department/:id",
      name: "edit-department",
      component: EditDepartmentView,
      meta: { requiredAuth: true },
    },
    {
      path: "/departments",
      name: "list-department",
      component: ListDepartmentView,
      meta: { requiredAuth: true },
    },

    {
      path: "/delete-employee/:id",
      name: "delete-employee",
      component: DeleteEmployeeView,
      meta: { requiredAuth: true },
    },
    {
      path: "/detail-employee/:id",
      name: "detail-employee",
      component: DetailEmployeeView,
      meta: { requiredAuth: true },
    },
    {
      path: "/",
      name: "list-employee",
      component: ListEmployeeView,
      meta: { requiredAuth: true },
    },
  ],
});

router.beforeEach((to, _, next) => {
  if(to.meta.requiredAuth && !authUser.value.isLoggedIn) next({name: 'login'})
  else next()
})

export default router;
