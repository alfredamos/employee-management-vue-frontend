<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import type DepartmentDto from "../../models/departments/department.model";
import departmentService from "../../services/api-department.service";

const departments = ref<DepartmentDto[]>(null!);

onMounted(() => {
  departmentService
    .findAll()
    .then((resp) => {
      departments.value = resp.data;
      console.log("departments : ", departmentService);
    })
    .catch((err) => console.log("error : ", err.message));
});
</script>

<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Department List</h4>
      </div>
      <div class="card-body">
        <table class="table table-responsive table-hover table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="department in departments" :key="department.id">
              <td>
                <router-link
                  class="text-deco-non"
                  :to="`/detail-department/${department.id}`"
                  >{{ department.name }}</router-link
                >
              </td>
              <td>
                <router-link
                  class="btn btn-outline-warning m-1 fw-bold"
                  :to="`/edit-department/${department.id}`"
                  >Edit</router-link
                >
                <router-link
                  class="btn btn-outline-danger m-1 fw-bold"
                  :to="`/delete-department/${department.id}`"
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
          to="/add-department"
          >Add Department</router-link
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
