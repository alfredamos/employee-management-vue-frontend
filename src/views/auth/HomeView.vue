<template>
  <div class="border pado">
    <div class="card wita">
      <h4 class="text-center moba">
        <hr />
        You have successfully log out!
        <hr />
        <h6>
          <RouterLink class="rd-text" to="/login"
            >Do you have an account? Please log in!</RouterLink
          >
        </h6>
        <hr />
        <h6>
          <RouterLink class="rd-text" to="/signup"
            >You don't have an account? Please signup!</RouterLink
          >
        </h6>
        <hr />
      </h4>
    </div>
  </div>
</template>

<style scoped>
.wita {
  height: 50vh;
  margin: auto;
  box-shadow: 10px 10px rgb(236, 227, 227);
}

.rd-text {
  text-decoration: none;
}

.moba {
  margin: auto;
}

.pado {
  padding: 10px;
}
</style>
