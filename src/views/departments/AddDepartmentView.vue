<script lang="ts" setup>
import DepartmentForm from '@/components/forms/DepartmentForm.vue';
import initialDepartment from '../../utils/initialDept.util';
import {ref} from "vue";
import { useRouter } from 'vue-router';
import type DepartmentDto from '../../models/departments/department.model';
import departmentService from '../../services/api-department.service';

const router = useRouter()
const initialDept = initialDepartment()

const department = ref<DepartmentDto>(initialDept)

const backToList = () => {
      router.push("/departments")
}

const departmentSubmit = (departmentDto: DepartmentDto) =>{
      console.log("in-add-department, input : ", departmentDto);
      departmentService.create(departmentDto)
      .then(resp => {
            department.value = resp.data
            console.log("new-depart, department: ", department.value);
            router.push("/departments")
      })
      .catch(err => console.log("error : ", err.message)
      )
}


</script>

<template>
<DepartmentForm 
      :initial-department="department"
      @on-department-submit="departmentSubmit"
      @on-back-to-list="backToList"
/>
</template>
