<template>
  <b-list-group-item
    href="#"
    @click.prevent="selectPost(post)"
    :active="isSelected"
    :disabled="post.deleted"
    class="flex-column align-items-start"
  >
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1" :class="{ 'text-danger': post.deleted }">
        {{ post.title }}
      </h5>
      <small>3 days ago</small>
    </div>

    <p class="mb-1">
      {{ post.body }}
    </p>

    <small>Donec id elit non mi porta.</small>
  </b-list-group-item>
</template>

<script>
import { state } from '@/state/state';

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isSelected: (v) => {
      return v.$root.selectedPost && v.$root.selectedPost.id === v.post.id;
    },
  },
  methods: {
    selectPost(post) {
      state.setSelectedPost(post);
    },
  },
};
</script>

<style></style>
