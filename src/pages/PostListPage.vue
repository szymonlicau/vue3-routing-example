<script>
import { defineComponent } from 'vue';

import { loadAll } from '@/services/api/posts';

import BearLoader from '@/components/BearLoader.vue';
import PostItem from '@/components/PostItem.vue';

export default defineComponent({
  components: {
    BearLoader,
    PostItem,
  },

  data () {
    return {
      loading: true,
      posts: []
    }
  },

  mounted () {
    this.loadData();
  },

  methods: {
    async loadData () {
      this.loading = true;

      this.posts = await loadAll();

      this.loading = false;
    }
  }
});
</script>

<template>
  <div class="posts">
    <h1 class="posts__header"> Recent Posts </h1>

    <BearLoader
      v-if="loading"
      class="posts__loader"
    />

    <div
      class="posts__list"
      v-else
    >
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.posts {
  &__header {
    margin-bottom: 2.4rem;
  }
}
</style>
