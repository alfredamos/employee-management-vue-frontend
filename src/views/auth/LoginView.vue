<script setup lang="ts">
import { useRouter } from "vue-router";
import type LoginDto from "../../models/auth/login.model";
import ApiAuth from "../../services/api-auth.service";
import { apiContext } from "../../behavior-subject/auth-context.rxjs";
import LoginForm from "@/components/forms/LoginForm.vue";

const router = useRouter();

const loginSubmit = (loginDto: LoginDto) => {

  ApiAuth.login(loginDto)
    .then((resp) => {
      apiContext.login(resp.data);

      router.push("/");
    })
    .catch((err) => console.log("error : ", err.message));
};

const backToList = () => {
  router.push("/");
};
</script>

<template>
  <LoginForm @onBackToList="backToList" @onLoginSubmit="loginSubmit" />
</template>
