<script lang="ts" setup>
import EmployeeForm from "@/components/forms/EmployeeForm.vue";
import { useRouter, useRoute } from "vue-router";
import employeeService from "@/services/api-employee.service";
import type DepartmentDto from "@/models/departments/department.model";
import type EditEmployeeDto from "@/models/employees/edit-employee.model";
import { useFetch } from '../../composable/useFetch';
import departmentBaseUrl from '@/utils/department-url.util';
import employeeBaseUrl from "@/utils/employee-url.util";

const router = useRouter();
const { id } = useRoute().params;

const {resource: departments} = useFetch<DepartmentDto>(departmentBaseUrl)

const {resource: employee} = useFetch<EditEmployeeDto>(`${employeeBaseUrl}/${id}`)

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
