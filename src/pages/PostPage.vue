<script>
import { defineComponent } from 'vue';

import { loadOne } from '@/services/api/posts';

import BearLoader from '@/components/BearLoader.vue';

export default defineComponent({
  components: {
    BearLoader,
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
    this.$watch(
      () => this.$route.params,
      () => this.loadData(),
      { immediate: true }
    );
  },

  methods: {
    async loadData () {
      this.loading = true;

      this.post = await loadOne(this.postId);

      if (this.post === null) {
        this.$router.push({ name: 'NotFound' });

        return;
      }

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
  </div>
</template>

<style lang="scss" scoped>
.post {
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
