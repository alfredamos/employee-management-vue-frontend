<script setup lang="ts">
import { useAuthUser } from '../composable/useAuthUser';

const {authUser} = useAuthUser()

</script>

<template>
  <div class="gapo mt-3">
    <ul class="nav justify-content-end wita">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/departments">Departments</RouterLink>
      </li>
      <li class="nav-item" v-if="!authUser?.isLoggedIn">
        <RouterLink class="nav-link" to="/login">Login </RouterLink>
      </li>
      <li class="nav-item" v-if="authUser?.isLoggedIn">
        <RouterLink class="nav-link" to="/logout">Logout</RouterLink>
      </li>
      <div class="dropdown" v-if="authUser?.isLoggedIn">
        <RouterLink
          class="btn btn-link dropdown-toggle"
          to="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Settings
        </RouterLink>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <RouterLink class="dropdown-item" to="/change-password"
              >Change Password</RouterLink
            >
          </li>
          <li>
            <RouterLink class="dropdown-item" to="/edit-profile"
              >Edit profile</RouterLink
            >
          </li>
        </ul>
      </div>
    </ul>
  </div>
</template>

<style scoped>
.wita {
  padding: 10px;
}

li {
  color: rebeccapurple;
}

a:link {
  text-decoration: none;
}

.gapo {
  border-top: 1px solid lightblue;
  border-bottom: 1px solid lightblue;
  background-color: azure;
}

.nav-link,
.btn-link {
  color: rebeccapurple;
}

.nav-link:hover {
  color: red;
}

.active {
  color: red;
}
.active:hover {
  color: rgb(50, 23, 62);
}
</style>
