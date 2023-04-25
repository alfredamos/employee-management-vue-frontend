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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/change-password",
      name: "change-password",
      component: ChangePasswordView,
    },
    {
      path: "/edit-profile",
      name: "edit-profile",
      component: EditProfileView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView
    },
    {
      path: "/home",
      name: "home",
      component: HomeView
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },

    {
      path: "/add-department",
      name: "add-department",
      component: AddDepartmentView,
    },
    {
      path: "/delete-department/:id",
      name: "delete-department",
      component: DeleteDepartmentView,
    },
    {
      path: "/detail-department/:id",
      name: "detail-department",
      component: DetailDepartmentView,
    },
    {
      path: "/edit-department/:id",
      name: "edit-department",
      component: EditDepartmentView,
    },
    {
      path: "/departments",
      name: "list-department",
      component: ListDepartmentView,
    },

    {
      path: "/delete-employee/:id",
      name: "delete-employee",
      component: DeleteEmployeeView,
    },   
    {
      path: "/detail-employee/:id",
      name: "detail-employee",
      component: DetailEmployeeView,
    },    
    {
      path: "/",
      name: "list-employee",
      component: ListEmployeeView,
    },
  ],
});

export default router;
