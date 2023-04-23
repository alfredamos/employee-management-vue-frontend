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

import AddEmployeeView from "@/views/employees/AddEmployeeView.vue";
import DeleteEmployeeView from "@/views/employees/DeleteEmployeeView.vue";
import DetailEmployeeView from "@/views/employees/DetailEmployeeView.vue";
import EditEmployeeView from "@/views/employees/EditEmployeeView.vue";
import ListEmployeeView from "@/views/employees/ListEmployeeView.vue";

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
      path: "/add-employee",
      name: "add-employee",
      component: AddEmployeeView,
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
      path: "/edit-employee/:id",
      name: "edit-employee",
      component: EditEmployeeView,
    },
    {
      path: "/",
      name: "list-employee",
      component: ListEmployeeView,
    },
  ],
});

export default router;
