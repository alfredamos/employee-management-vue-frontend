<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import employeeService from "../../services/api-employee.service";
import type ListEmployeeDto from "@/models/employees/list-employee.model";

const employees = ref<ListEmployeeDto[]>(null!);

onMounted(() => {
  employeeService.findAll().then((resp) => {
    employees.value = resp.data;
    console.log("employees : ", resp.data);
  })
  .catch(err => console.log("error : ", err.message))
});
</script>

<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Employee List</h4>
      </div>
      <div class="card-body">
        <table class="table table-responsive table-hover table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.id">
              <td>
                <router-link
                  class="text-deco-non"
                  :to="`/detail-employee/${employee?.id}`"
                  >{{ employee?.name }}</router-link
                >
              </td>
              <td>{{ employee?.email }}</td>
              <td>{{ employee?.gender }}</td>
              <td>{{ employee?.department?.name }}</td>
              <td>
                <router-link
                  class="btn btn-outline-warning m-1 fw-bold"
                  :to="`/edit-employee/${employee?.id}`"
                  >Edit</router-link
                >
                <router-link
                  class="btn btn-outline-danger m-1 fw-bold"
                  :to="`/delete-employee/${employee?.id}`"
                  >Delete</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer">
        <router-link
          class="btn btn-outline-secondary form-control m-1 fw-bold"
          to="/add-employee"
          >Add Employee</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.pado {
  padding: 10px;
}

.text-deco-non {
  text-decoration: none;
}
</style>
