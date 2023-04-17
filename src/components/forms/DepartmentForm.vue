<script lang="ts" setup>
import type DepartmentDto from "@/models/departments/department.model";
import { defineEmits, defineProps, ref } from "vue";

const {initialDepartment} = defineProps(["initialDepartment"])

const emit = defineEmits(["onDepartmentSubmit", "onBackToList"])

let department = ref<DepartmentDto>(initialDepartment)

const departmentSubmit = () => {
  emit("onDepartmentSubmit", department.value)
};

const backToList = () => {
  emit("onBackToList");
};
</script>

<template>
  <div class="border pado">
    <form @submit.prevent="departmentSubmit">
      <div class="card">
        <div class="card-header"></div>
        <div class="card-body">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" v-model="department.name" class="form-control" />
          </div>
        </div>
        <div class="card-footer">
            <button type="submit" class="btn btn-outline-primary form-control m-1 fw-bold">Submit</button>
            <button type="button" class="btn btn-outline-secondary form-control m-1 fw-bold" @click="backToList">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.pado {
  padding: 10px;
}

input, label {
  box-shadow: 1px 1px 10px rgba(234, 233, 235, 0.14);
}
</style>
