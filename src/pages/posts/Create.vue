<template>
  <h2>Create Post</h2>
  <FormPost @formData="createPost" :button-loading="loading" button-text="Create Post" />
</template>

<script>
import FormPost from "../../components/posts/Form.vue";
import { ref } from "vue";
import Swal from "sweetalert2";
import axios from "axios";
export default {
  components: {
    FormPost,
  },
  setup() {
    const loading = ref(false);

    function createPost(formData) {
      loading.value = true;

      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: formData.title,
          body: formData.body,
          userId: 1,
        })

        .then(function (response) {
          // handle success
          loading.value = false;

          Swal.fire({
            title: "Thanks!",
            icon: "success",
            text: "Create Post is successfully",
            confirmButtonText: "Ok",
          });
        })

        .catch(function (error) {
          console.log(error);
        });
    }

    return { loading, createPost };
  },
};
</script>

<style>
</style>