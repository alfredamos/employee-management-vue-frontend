<script lang="ts" setup>
import EmployeeForm from "@/components/forms/EmployeeForm.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import type EmployeeDto from "../../models/employees/employee.model";
import initialEmployee from "@/utils/initialEmployee.util";
import departmentService from "@/services/api-department.service";
import type DepartmentDto from "../../models/departments/department.model";
import employeeService from "@/services/api-employee.service";

const router = useRouter();

const initEmployee = initialEmployee();

const employee = ref<EmployeeDto>(initEmployee);
const departments = ref<DepartmentDto[]>(null!);

onMounted(() => {
  departmentService
    .findAll()
    .then((resp) => {
      departments.value = resp.data;
      console.log("In add-employee, department : ", departments.value);
    })
    .catch((err) => console.log("error : ", err.message));
});

const backToList = () => {
  router.push("/");
};

const submitEmployee = (employeeDto: EmployeeDto) => {
  console.log("In employee-add, input : ", employeeDto);
  employeeDto.departmentId = Number(employeeDto.departmentId);

  employeeService
    .create(employeeDto)
    .then((resp) => {
      employee.value = resp.data;
      console.log("new-employee, employee : ", employee.value);
      router.push("/");
    })
    .catch((err) => console.log("error : ", err.message));
};
</script>

<template>
  <EmployeeForm
    v-if="departments"
    :initial-employee="employee"
    :departmentis="departments"
    @on-back-to-list="backToList"
    @on-employee-submit="submitEmployee"
  />
</template>

<style></style>
