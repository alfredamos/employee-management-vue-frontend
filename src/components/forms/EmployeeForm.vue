<script lang="ts" setup>
import { ref } from "vue";
import { defineEmits, defineProps } from "vue";
import type EmployeeDto from "../../models/employees/employee.model";
import type DepartmentDto from "../../models/departments/department.model";

const { initialEmployee, departmentis } = defineProps([
  "initialEmployee",
  "departmentis",
]);
const emit = defineEmits(["onBackToList", "onEmployeeSubmit"]);

const departments = departmentis as DepartmentDto[];

const employee = ref<EmployeeDto>(initialEmployee);

const backToList = () => {
  emit("onBackToList");
};

const submitEmployee = () => {
  emit("onEmployeeSubmit", employee.value);
};
</script>

<template>
  <div class="border pado">
    <form @submit.prevent="submitEmployee">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Employee Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" v-model="employee.name" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" v-model="employee.email" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="gender" class="form-label">Gender</label>
            <input type="text" v-model="employee.gender" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="departmentId" class="form-label">Department</label>
            <select v-model="employee.departmentId" class="form-select">
              <option value="">Please select department</option>
              <option
                v-for="department in departments"
                :value="department.id"
                :key="department.id"
              >
                {{ department.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="card-footer">
          <button
            type="submit"
            class="btn btn-outline-primary form-control m-1 fw-bold"
          >
            Submit
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary form-control m-1 fw-bold"
            @click="backToList"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
.pado {
  padding: 10px;
}
input,
label {
  box-shadow: 1px 1px 10px rgba(234, 233, 235, 0.14);
}
</style>
