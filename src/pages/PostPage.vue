<script>
import { defineComponent } from 'vue';

import { loadOne, loadAll } from '@/services/api/posts';

import BearLoader from '@/components/BearLoader.vue';
import PostsNavigation from '@/components/PostsNavigation.vue';

export default defineComponent({
  components: {
    BearLoader,
    PostsNavigation
  },

  props: {
    postId: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      loading: true,
      post: null,
      recentPosts: []
    }
  },

  mounted () {
    this.loadData();
  },

  methods: {
    async loadData () {
      this.loading = true;

      const [r1, r2] = await Promise.all([
        loadOne(this.postId),
        loadAll()
      ]);

      this.post = r1;
      this.recentPosts = r2;

      this.loading = false;
    }
  }
});
</script>

<template>
  <BearLoader
    v-if="loading"
  />

  <div
    v-else
    class="post"
  >
    <div
      class="post__contents"
    >
      <img
        :src="post.cover_url"
        :alt="`${post.title} cover image`"
        class="post__cover"
      />

      <h1 class="post__title">
        {{ post.title }}
      </h1>

      <p class="post__description">
        {{ post.description }}
      </p>
    </div>

    <PostsNavigation
      class="post__navigation"
      :recent-posts="recentPosts"
    />
  </div>
</template>

<style lang="scss" scoped>
.post {
  display: grid;
  grid-template-columns: 1fr 24rem;
  grid-gap: 2.4rem;

  &__contents {
    width: 100%;
  }

  &__cover {
    object-fit: cover;
    width: 100%;
    height: 45vh;
    border-radius: 1.6rem;
  }

  &__title {
    margin: 3.2rem 0;
  }

  &__description {
    font-size: 1.8rem;
  }
}
</style>
