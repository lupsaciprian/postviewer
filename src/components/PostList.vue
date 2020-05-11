<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="min-height: 500px;"
  >
    <b-spinner v-if="postsLoading" type="grow" label="Spinning"></b-spinner>

    <div v-else>
      <b-list-group>
        <Post v-for="post in posts" :post="post" :key="post.id" />
      </b-list-group>
      <Pagination />
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import Pagination from "@/components/Pagination.vue";

import { fetchPosts } from "@/store/actions";

export default {
  components: { Post, Pagination },
  computed: {
    posts: ({ $root }) => $root.posts,
    postsLoading: ({ $root }) => $root.postsLoading,
  },
  mounted() {
    fetchPosts();
  },
};
</script>

<style></style>
