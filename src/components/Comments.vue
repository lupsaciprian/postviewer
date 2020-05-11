<template>
  <section>
    <div>
      <b-card v-for="comment in comments" :key="comment.id">
        <b-media>
          <template v-slot:aside>
            <b-img
              blank
              blank-color="#ccc"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0">{{ comment.name }}</h5>
          <span class="font-weight-light">{{ comment.email }}</span>
          <p class="mt-2">{{ comment.body }}</p>
        </b-media>
      </b-card>
    </div>
  </section>
</template>

<script>
export default {
  // To make this component more reusable, you can give it props instead of getting a specific store piece
  computed: {
    comments: ({ $root }) => $root.selectedPost.comments,
  },
};
</script>

<style></style>
