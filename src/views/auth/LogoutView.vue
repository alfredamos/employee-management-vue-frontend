<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { apiContext } from "../../behavior-subject/auth-context.rxjs";
import LogoutItemView from "@/utils/DeleteItem.vue";
import { initialAuthUser } from "../../utils/authUser-initial.util";

const router = useRouter();

const logoutMessage = ref("Do you want to logout?");
const logoutTitle = ref("Logout Confirmation!");
const showLogoutItem = ref(true);

const logoutEmployee = (value: boolean) => {
  if (value) {
    apiContext.logout(initialAuthUser);
    router.push("/home");
  } else {
    router.push("/");
    
  }
};
</script>

<template>
  <Teleport to="body" v-if="showLogoutItem">
    <LogoutItemView
      cancel-button="Cancel"
      submit-button="Logout"
      :delete-message="logoutMessage"
      :delete-title="logoutTitle"
      @on-delete="logoutEmployee"
    />
  </Teleport>
</template>
