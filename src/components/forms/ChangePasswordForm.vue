<script setup lang="ts">
import { ref } from "vue";
import type ChangePasswordDto from '../../models/auth/change-password.model';

const changePassword = ref<ChangePasswordDto>({
  email: "",
  password: "",
  newPassword: "",
  confirmPassword: ""

});

const emit = defineEmits(["onChangePasswordSubmit", "onBackToList"]);

const changePasswordSubmit = () => {
  console.log("Clicked...");

  emit("onChangePasswordSubmit", changePassword.value);
};

const backToList = () => {
  emit("onBackToList");
};
</script>
<template>
  <div class="border pado mt-3">
    <form @submit.prevent="changePasswordSubmit">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Change Password Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              id="email"
              v-model.trim="changePassword.email"
              type="text"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              v-model.trim="changePassword.password"
              id="password"
              type="password"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="newPassword" class="form-label">New Password</label>
            <input
              v-model.trim="changePassword.newPassword"
              id="newPassword"
              type="password"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirm Password</label>
            <input
              v-model.trim="changePassword.confirmPassword"
              id="confirmPassword"
              type="password"
              class="form-control"
            />
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
            @click="backToList"
            type="button"
            class="btn btn-outline-secondary form-control m-1 fw-bold"
          >
            Back
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

.card {
  box-shadow: 1px 1px 1px 10px rgba(233, 233, 233, 0.5);
}
</style>
