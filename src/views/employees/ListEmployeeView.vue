<script lang="ts" setup>
import { RouterLink } from "vue-router";
import type ListEmployeeDto from "@/models/employees/list-employee.model";
import { useFetch } from "../../composable/useFetch";
import employeeBaseUrl from "@/utils/employee-url.util";
import moment from "moment";

const { resource: employees } = useFetch<ListEmployeeDto[]>(employeeBaseUrl);
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
              <th>Phone</th>
              <th>Birthday</th>
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
                  >{{ employee?.fullName }}</router-link
                >
              </td>
              <td>{{ employee?.email }}</td>
              <td>{{ employee?.phone }}</td>
              <td>
                {{ moment(employee?.dateOfBirth).format("MMMM DD YYYY") }}
              </td>
              <td>{{ employee?.gender }}</td>
              <td>{{ employee?.department?.name }}</td>
              <td>
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
        <RouterLink
          to="/signup"
          class="btn btn-outline-secondary form-control m-1 fw-bold"
        >
          Add Employee
        </RouterLink>
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
