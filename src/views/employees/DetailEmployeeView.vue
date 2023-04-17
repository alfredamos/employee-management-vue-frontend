<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute} from "vue-router";
import employeeService from "../../services/api-employee.service";
import type ListEmployeeDto from "@/models/employees/list-employee.model";

const employee = ref<ListEmployeeDto>(null!);
const { id } = useRoute().params;

onMounted(() => {
  employeeService
    .findOne(+id)
    .then((resp) => {
      employee.value = resp.data;
      console.log("in-detail-employees : ", resp.data);
           
    })
    .catch((err) => console.log("error : ", err.message));
});
</script>

<template>
  <div class="border pado" v-if="employee">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Employee Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">Name : &nbsp; <strong>{{ employee.name }}</strong></li>
          <li class="list-group-item">Email : &nbsp; <strong>{{ employee.email }}</strong></li>
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
