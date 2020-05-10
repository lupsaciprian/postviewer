<template>
  <div class="d-flex justify-content-center my-4">
    <b-pagination
      pills
      class="mt-2"
      v-model="page"
      :total-rows="total"
      :per-page="perPage"
    ></b-pagination>
  </div>
</template>

<script>
import { state } from '@/state/state';

export default {
  data() {
    return { rows: 10 };
  },
  computed: {
    page: {
      get: ({ $root }) => $root.page,
      set: ($event) => {
        state.setPage($event);
      },
    },
    perPage: ({ $root }) => $root.perPage,
    total: ({ $root }) => $root.total,
  },
};
</script>

<style></style>
