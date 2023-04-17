import { createRouter, createWebHistory } from "vue-router";

import AddDepartmentViewVue from "@/views/departments/AddDepartmentView.vue";
import DeleteDepartmentViewVue from "@/views/departments/DeleteDepartmentView.vue";
import DetailDepartmentViewVue from "@/views/departments/DetailDepartmentView.vue";
import EditDepartmentViewVue from "@/views/departments/EditDepartmentView.vue";
import ListDepartmentViewVue from "@/views/departments/ListDepartmentView.vue";

import AddEmployeeViewVue from "@/views/employees/AddEmployeeView.vue";
import DeleteEmployeeViewVue from "@/views/employees/DeleteEmployeeView.vue";
import DetailEmployeeViewVue from "@/views/employees/DetailEmployeeView.vue";
import EditEmployeeViewVue from "@/views/employees/EditEmployeeView.vue";
import ListEmployeeViewVue from "@/views/employees/ListEmployeeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/add-department",
      name: "add-department",
      component: AddDepartmentViewVue,
    },
    {
      path: "/delete-department/:id",
      name: "delete-department",
      component: DeleteDepartmentViewVue,
    },
    {
      path: "/detail-department/:id",
      name: "detail-department",
      component: DetailDepartmentViewVue,
    },
    {
      path: "/edit-department/:id",
      name: "edit-department",
      component: EditDepartmentViewVue,
    },
    {
      path: "/departments",
      name: "list-department",
      component: ListDepartmentViewVue,
    },

    {
      path: "/add-employee",
      name: "add-employee",
      component: AddEmployeeViewVue,
    },
    {
      path: "/delete-employee/:id",
      name: "delete-employee",
      component: DeleteEmployeeViewVue,
    },
    {
      path: "/detail-employee/:id",
      name: "detail-employee",
      component: DetailEmployeeViewVue,
    },
    {
      path: "/edit-employee/:id",
      name: "edit-employee",
      component: EditEmployeeViewVue,
    },
    {
      path: "/",
      name: "list-employee",
      component: ListEmployeeViewVue,
    },
  ],
});

export default router;
