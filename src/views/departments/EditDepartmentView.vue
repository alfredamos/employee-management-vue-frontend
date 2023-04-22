<script lang="ts" setup>
import DepartmentForm from "@/components/forms/DepartmentForm.vue";
import { useRouter, useRoute } from "vue-router";
import departmentService from "../../services/api-department.service";
import type EditDepartmentDto from "@/models/departments/edit-department.model";
import { useFetch } from "@/composable/useFetch";
import type DepartmentDto from "@/models/departments/department.model";
import departmentBaseUrl from "@/utils/department-url.util";

const router = useRouter();

const { id } = useRoute().params;

const {resource: department} = useFetch<DepartmentDto>(`${departmentBaseUrl}/${id}`)

const backToList = () => {
  router.push("/departments");
};

const departmentSubmit = (departmentDto: EditDepartmentDto) => {
  delete departmentDto.employees;
  console.log("in-edit-department, input : ", departmentDto);

  departmentService
    .edit(departmentDto)
    .then((resp) => {
      department.value = resp.data;
      console.log("edited-depart, department: ", department.value);
      router.push("/departments");
    })
    .catch((err) => console.log(err.message));
};
</script>

<template>
  <DepartmentForm
    v-if="department"
    :initial-department="department"
    @on-department-submit="departmentSubmit"
    @on-back-to-list="backToList"
  />
</template>
