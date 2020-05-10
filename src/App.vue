<template>
  <div id="app">
    <b-container>
      <h1 class="my-4">Post Viewer</h1>

      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <PostList />
          </b-col>
          <b-col><PostDetail /></b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostDetail from '@/components/PostDetail.vue';

export default {
  name: 'App',
  components: {
    PostList,
    PostDetail,
  },
};
</script>

<style></style>
