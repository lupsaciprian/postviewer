<template>
  <div v-if="!selectedPost">
    <h3>Select a post.</h3>
  </div>

  <div v-else>
    <h4 class="mb-2">{{ selectedPost.title }}</h4>
    <p>{{ selectedPost.body }}</p>

    <div class=" d-flex">
      <b-button
        @click="loadComments"
        variant="primary"
        :disabled="commentsLoading"
        class="mr-2 d-flex justify-content-center align-items-center"
      >
        <b-spinner
          v-if="commentsLoading"
          label="Spinning"
          small
          class="mr-2 "
        ></b-spinner>
        View Comments
      </b-button>

      <b-button
        @click="update()"
        :variant="editMode ? 'success' : 'outline-primary'"
        class="mr-2"
        >Update</b-button
      >

      <b-button id="popover-3" variant="outline-danger">Delete</b-button>
      <b-popover target="popover-3" placement="bottom" triggers="hover focus">
        <template v-slot:title
          >Are you sure you want to delete this post?</template
        >
        <b-button @click="deletePost" variant="danger">Delete Post</b-button>
      </b-popover>
    </div>

    <UpdateForm v-if="editMode" class="my-4" />
    <Comments v-if="!editMode && selectedPost.comments" class="my-4" />
  </div>
</template>

<script>
import Comments from "@/components/Comments.vue";

import { toggle, deletePost, fetchComments } from "@/store/actions";

export default {
  components: { UpdateForm: () => import("@/components/Form"), Comments },
  computed: {
    selectedPost: ({ $root }) => $root.selectedPost,
    editMode: ({ $root }) => $root.editMode,
    commentsLoading: ({ $root }) => $root.commentsLoading,
  },
  methods: {
    update() {
      toggle("editMode");
    },
    deletePost() {
      deletePost();
    },
    loadComments() {
      fetchComments();
    },
  },
};
</script>

<style></style>
