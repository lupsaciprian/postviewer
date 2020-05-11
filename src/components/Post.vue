<template>
  <b-list-group-item
    href="#"
    @click.prevent="selectPost()"
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
import { selectPost } from "@/store/actions";

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isSelected: (vueinst) =>
      vueinst.$root.selectedPost &&
      vueinst.$root.selectedPost.id === vueinst.post.id,
  },
  methods: {
    selectPost() {
      selectPost(this.post);
    },
  },
};
</script>

<style></style>
