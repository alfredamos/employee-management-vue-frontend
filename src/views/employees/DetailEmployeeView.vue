<script lang="ts" setup>
import { useRoute} from "vue-router";
import type ListEmployeeDto from "@/models/employees/list-employee.model";
import { useFetch } from "@/composable/useFetch";
import employeeBaseUrl from "@/utils/employee-url.util";
import moment from "moment";

const { id } = useRoute().params;

const {resource: employee} = useFetch<ListEmployeeDto>(`${employeeBaseUrl}/${id}`)
</script>

<template>
  <div class="border pado" v-if="employee">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Employee Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">Name : &nbsp; <strong>{{ employee.fullName }}</strong></li>
          <li class="list-group-item">Email : &nbsp; <strong>{{ employee.email }}</strong></li>
          <li class="list-group-item">Phone : &nbsp; <strong>{{ employee.phone }}</strong></li>
          <li class="list-group-item">Birthday : &nbsp; <strong>{{ moment(employee.dateOfBirth).format('MMMM DD YYYY') }}</strong></li>
          <li class="list-group-item">Gender : &nbsp; <strong>{{ employee.gender }}</strong></li>
          <li class="list-group-item">Department : &nbsp; <strong>{{ employee.department?.name }}</strong></li>
        </ul>
      </div>
      <div class="card-footer">
        <router-link class="btn btn-outline-secondary form-control" to="/"
          >Back
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.pado {
  padding: 10px;
}
</style>
