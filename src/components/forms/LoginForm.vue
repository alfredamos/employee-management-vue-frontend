<script setup lang="ts">
import type LoginDto from "@/models/auth/login.model";
import { ref } from "vue";

const login = ref<LoginDto>({
  email: "",
  password: "",
});

const emit = defineEmits(["onLoginSubmit", "onBackToList"]);

const loginSubmit = () => {
  console.log("Clicked...");

  emit("onLoginSubmit", login.value);
};

const backToList = () => {
  emit("onBackToList");
};
</script>
<template>
  <div class="border pado mt-3">
    <form @submit.prevent="loginSubmit">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Login Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              id="email"
              v-model.trim="login.email"
              type="text"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              v-model.trim="login.password"
              id="password"
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
