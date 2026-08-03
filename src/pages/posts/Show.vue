<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-5">
    <div class="card">
      <div class="card-header">
        {{ post.title }}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Body : {{ post.body }}</li>
      </ul>

      <div class="card-footer">
        <button @click="postDelete" class="btn btn-sm me-4 btn-danger">
          Delete
        </button>
        <router-link
          :to="{ name: 'postEdit', id: post.id }"
          class="btn btn-sm btn-dark text-white"
          >Edit</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Swal from 'sweetalert2';
export default {
  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          console.log(response.data);
          post.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getPost();

    function postDelete() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          console.log(response.data);

          Swal.fire({
            title: "Thanks!",
            icon: "warning",
            text: `Delete Post (${route.params.id}) is successfully`,
            confirmButtonText: "Ok",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return { post, loading, route, postDelete };
  },
};
</script>

<style>
</style>