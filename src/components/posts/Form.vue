<template>
  <form @submit.prevent="validate">
    <div class="mb-3">
      <label class="form-label">Title</label>
      <input type="text" v-model.lazy.trim="form.title" class="form-control" />
      <div class="form-text text-danger">
        {{ form.titleErrorText }}
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Body</label>
      <textarea v-model.lazy.trim="form.body" rows="6" class="form-control"></textarea>
      <div class="form-text text-danger">
        {{ form.bodyErrorText }}
      </div>

      <button class="btn btn-dark mt-3" type="submit" :disabled="buttonLoading">
        <div
          class="spinner-border spinner-border-sm"
          v-if="buttonLoading"
          role="status"
        ></div>
        {{ buttonText }}
      </button>
    </div>
  </form>
</template>

<script>
import { reactive } from "vue";
export default {
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    post: Object,
  },
  setup(props, { emit }) {
    const form = reactive({
      title: "",
      titleErrorText: "",
      body: "",
      bodyErrorText: "",
    });

    function setInput() {
      if (props.post !== undefined) {
        form.title = props.post.title;
        form.body = props.post.body;
      }
    }
    setInput();
    function validate() {
      if (form.title == "") {
        form.titleErrorText = "Title is required";
      } else {
        form.titleErrorText = "";
      }

      if (form.body == "") {
        form.bodyErrorText = "Body is required";
      } else {
        form.bodyErrorText = "";
      }

      if (form.title != "" && form.body != "") {
        emit("formData", form);
      }
    }

    return { validate, form };
  },
};
</script>

<style>
</style>