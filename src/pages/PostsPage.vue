<script>
import { defineComponent } from 'vue';

import { loadAll } from '@/services/api/posts';

import BearLoader from '@/components/BearLoader.vue';
import PostItem from '@/components/PostItem.vue';
import PostsNavigation from '@/components/PostsNavigation.vue';

export default defineComponent({
  components: {
    BearLoader,
    PostItem,
    PostsNavigation
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

    <template v-else>
      <div class="posts__list">
        <PostItem
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </div>

      <PostsNavigation
        class="posts__navigation"
        :recent-posts="posts"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.posts {
  display: grid;
  grid-template-columns: 1fr 24rem;
  grid-gap: 2.4rem;

  &__loader,
  &__header {
    grid-column: 1 / span 2;
  }
}
</style>
