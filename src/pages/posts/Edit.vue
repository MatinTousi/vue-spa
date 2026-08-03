<template>
  <div v-if="pageLoading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-6">

  <h2>Edit Post</h2>
  <FormPost
    @formData="updatePost"
    :button-loading="loading"
    button-text="Edit Post"
    :post="post"
  />
  </div>

  
</template>

<script>
import { ref } from "vue";
import Swal from "sweetalert2";
import FormPost from "../../components/posts/Form.vue";
import axios from "axios";
import { useRoute } from "vue-router";
export default {
  components: {
    FormPost,
  },
  setup() {
    const loading = ref(false);
    const pageLoading = ref(true);
    const post = ref({});
    const route = useRoute();
   

    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          // console.log(response.data);
          post.value = response.data;
          pageLoading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getPost();

    function updatePost(formData) {
      loading.value=true;
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
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
            text: "Update Post is successfully",
            confirmButtonText: "Ok",
          });
        })

        .catch(function (error) {
          console.log(error);
        });
    }

    return { loading, updatePost,pageLoading,post };
  },
};
</script>

<style>
</style>