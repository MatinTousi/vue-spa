<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
          quaerat dolorum voluptate soluta unde placeat assumenda in quasi iure
          ab expedita accusantium quia, odit, quae explicabo numquam quidem
          culpa error?
        </p>

        <router-link class="btn btn-dark me-3" :to="{name : 'usersIndex'}">User</router-link>
        <router-link class="btn btn-light" :to="{name : 'postsIndex'}">Post</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>