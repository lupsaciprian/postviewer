<template>
  <b-card>
    <p class="font-weight-bold">Update Post</p>
    <div>
      <label for="title">Title: </label>
      <b-form-input
        id="title"
        v-model="title"
        placeholder="Edit the title"
        required
      ></b-form-input>
    </div>

    <div>
      <label for="body">Body: </label>
      <b-form-textarea
        id="body"
        v-model="body"
        placeholder="Edit the description"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </div>
  </b-card>
</template>

<script>
import { setSelectedPostValue } from "@/store/actions";

export default {
  computed: {
    title: {
      get: ({ $root }) => $root.selectedPost.title,
      set: ($event) => state.setSelectedPostValue("title", $event),
    },
    body: {
      get: ({ $root }) => $root.selectedPost.body,
      set: ($event) => state.setSelectedPostValue("body", $event),
    },
  },
};
</script>

<style></style>
