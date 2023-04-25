<script lang="ts" setup>
import { ref } from "vue";
import type EditProfileDto from "../../models/auth/edit-profile.model";
import type DepartmentDto from "../../models/departments/department.model";

interface Props {
  oldProfile: EditProfileDto;
  departments: DepartmentDto[];
}

const { oldProfile, departments } = defineProps<Props>();
const emit = defineEmits(["onBackToList", "onEditProfileSubmit"]);

const editProfile = ref<EditProfileDto>(oldProfile);

const backToList = () => {
  emit("onBackToList");
};

const submitEditProfile = () => {
  emit("onEditProfileSubmit", editProfile.value);
};
</script>

<template>
  <div class="border pado">
    <form @submit.prevent="submitEditProfile">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Edit Profile Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="fullName" class="form-label">Name</label>
            <input
              id="fullName"
              type="text"
              v-model="editProfile.fullName"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              id="email"
              type="email"
              v-model="editProfile.email"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input
              id="phone"
              type="tel"
              v-model="editProfile.phone"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              id="password"
              type="password"
              v-model="editProfile.password"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="newPassword" class="form-label">New Password</label>
            <input
              id="newPassword"
              type="password"
              v-model="editProfile.newPassword"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="dateOfBirth" class="form-label">Birthday</label>
            <input
              id="dateOfBirth"
              type="date"
              v-model="editProfile.dateOfBirth"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="gender" class="form-label">Gender</label>
            <select
              id="gender"
              v-model="editProfile.gender"
              class="form-select"
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="departmentId" class="form-label">Department</label>
            <select
              id="departmentId"
              v-model="editProfile.departmentId"
              class="form-select"
            >
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
