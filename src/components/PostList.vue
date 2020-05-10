<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="min-height: 500px;"
  >
    <b-spinner v-if="loading" type="grow" label="Spinning"></b-spinner>

    <div v-else>
      <b-list-group>
        <Post v-for="(post, index) in posts" :post="post" :key="post.id" />
      </b-list-group>
      <Pagination />
    </div>
  </div>
</template>

<script>
import { state } from '@/state/state';

import Post from '@/components/Post.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: { Post, Pagination },
  computed: {
    posts: ({ $root }) => $root.posts,
    loading: ({ $root }) => $root.postsLoading,
  },
  mounted() {
    state.getPosts();
  },
};
</script>

<style></style>
