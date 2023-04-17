<script lang="ts" setup>
import EmployeeForm from "@/components/forms/EmployeeForm.vue";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import departmentService from "@/services/api-department.service";
import employeeService from "@/services/api-employee.service";
import type DepartmentDto from "@/models/departments/department.model";
import type EditEmployeeDto from "@/models/employees/edit-employee.model";

const router = useRouter();
const { id } = useRoute().params;

const employee = ref<EditEmployeeDto>(null!);
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

onMounted(() => {
  employeeService
    .findOne(+id)
    .then((resp) => {
      employee.value = resp.data;
      console.log("edited-employee : ", resp.data);
    })
    .catch((err) => console.log("error in employee: ", err.message));
});

const backToList = () => {
  router.push("/");
};

const submitEmployee = (employeeDto: EditEmployeeDto) => {
  console.log("In edit-employee, input : ", employeeDto);
  
  delete employeeDto.department;
  employeeDto.departmentId = Number(employeeDto.departmentId);
  
  employeeService
    .edit(employeeDto)
    .then((resp) => {
      employee.value = resp.data;
      console.log("new-employee, employee : ", employee);
      router.push("/");
    })
    .catch((err) => console.log("error : ", err.message));
};
</script>

<template>
  <EmployeeForm
    v-if="employee && departments"
    :initial-employee="employee"
    :departmentis="departments"
    @on-back-to-list="backToList"
    @on-employee-submit="submitEmployee"
  />
</template>

<style></style>
