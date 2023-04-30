<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import DeleteItemVue from "../../utils/DeleteItem.vue";
import type ListEmployeeDto from "@/models/employees/list-employee.model";
import { useFetch } from "../../composable/useFetch";
import employeeBaseUrl from "@/utils/employee-url.util";
import { ApiGeneral } from "../../services/api-general.service";
import moment from "moment";

const { id } = useRoute().params;
const router = useRouter();

const url = `${employeeBaseUrl}/${id}`;

const deleteMessage = ref("");
const deleteTitle = ref("");
const showDeleteItem = ref(false);

const { resource: employee } = useFetch<ListEmployeeDto>(
  `${employeeBaseUrl}/${id}`
);

const deleteClick = () => {
  deleteMessage.value = `Do you want to delete employee : ${employee.value.fullName}`;
  deleteTitle.value = "Employee Delete Confirmation!";
  showDeleteItem.value = true;
};

const backToList = () => {
  router.push("/");
};

const deleteEmployee = (value: boolean) => {
  if (value) {
    ApiGeneral.remove(url).then((resp) => {
      employee.value = resp.data;
      router.push("/");
    });
  } else {
    router.push("/");
  }
};
</script>

<template>
  <DeleteItemVue
    v-if="showDeleteItem"
    cancel-button="Cancel"
    submit-button="Delete"
    :delete-message="deleteMessage"
    :delete-title="deleteTitle"
    @on-delete="deleteEmployee"
  />
  <div class="border pado" v-if="employee">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Employee Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            Name : &nbsp; <strong>{{ employee.fullName }}</strong>
          </li>
          <li class="list-group-item">
            Email : &nbsp; <strong>{{ employee.email }}</strong>
          </li>
          <li class="list-group-item">
            Phone : &nbsp; <strong>{{ employee.phone }}</strong>
          </li>
          <li class="list-group-item">
            Birthday : &nbsp;
            <strong>{{
              moment(employee.dateOfBirth).format("MMMM DD YYYY")
            }}</strong>
          </li>
          <li class="list-group-item">
            Gender : &nbsp; <strong>{{ employee.gender }}</strong>
          </li>
          <li class="list-group-item">
            Department : &nbsp; <strong>{{ employee.department?.name }}</strong>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn btn-outline-secondary form-control m-1 fw-bold"
          @click="backToList"
        >
          Back
        </button>
        <button
          type="button"
          class="btn btn-outline-danger form-control m-1 fw-bold"
          @click="deleteClick"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.pado {
  padding: 10px;
}
</style>
