<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import type DepartmentDto from "../../models/departments/department.model";
import departmentService from "../../services/api-department.service";
import DeleteItemVue from "../../utils/DeleteItem.vue";

const department = ref<DepartmentDto>(null!);
const { id } = useRoute().params;
const router = useRouter();

const deleteMessage = ref("");
const deleteTitle = ref("");
const showDeleteItem = ref(false);

onMounted(() => {
  departmentService
    .findOne(+id)
    .then((resp) => {
      department.value = resp.data;
      console.log("in-detail-departments : ", resp.data);
    })
    .catch((err) => console.log("error : ", err.message));
});

const deleteClick = () => {
  deleteMessage.value = `Do you want to delete department : ${department.value.name}`;
  deleteTitle.value = "Department Delete Confirmation!";
  showDeleteItem.value = true;
};

const backToList = () => {
  router.push("/departments");
};

const deleteDepartment = (value: boolean) => {
  if (value) {
    departmentService.remove(+id).then((resp) => {
      department.value = resp.data;
      router.push("/departments");
    });
  } else {
    router.push("/departments");
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
    @on-delete="deleteDepartment"
  />
  <div class="border pado" v-if="department">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Department Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">Name : &nbsp;<strong>{{ department.name }}</strong></li>
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
