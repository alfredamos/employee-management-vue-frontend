<script lang="ts" setup>
import { useRoute} from "vue-router";
import type DepartmentDto from "../../models/departments/department.model";
import departmentBaseUrl from "@/utils/department-url.util";
import { useFetch } from "@/composable/useFetch";

const { id } = useRoute().params;

const {resource: department} = useFetch<DepartmentDto>(`${departmentBaseUrl}/${id}`)


</script>

<template>
  <div class="border pado" v-if="department">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Department Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">Name : &nbsp; <strong>{{ department.name }}</strong></li>
        </ul>
      </div>
      <div class="card-footer">
        <router-link class="btn btn-outline-secondary form-control" to="/departments"
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
