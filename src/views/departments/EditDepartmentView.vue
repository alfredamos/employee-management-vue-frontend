<script lang="ts" setup>
import DepartmentForm from "@/components/forms/DepartmentForm.vue";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import departmentService from "../../services/api-department.service";
import type EditDepartmentDto from "@/models/departments/edit-department.model";

const router = useRouter();

const { id } = useRoute().params;

const department = ref<EditDepartmentDto>(null!);

onMounted(() => {
  departmentService.findOne(+id).then((resp) => {
    department.value = resp.data;
    console.log("In-edit-department, oldDepartment : ", department.value);
  });
});

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
