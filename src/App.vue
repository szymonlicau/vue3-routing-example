<script>
import { defineComponent } from 'vue';

import TopNavigation from '@/components/TopNavigation.vue';

import HomePage from '@/pages/HomePage.vue';
import PostsPage from '@/pages/PostsPage.vue';
import PostPage from '@/pages/PostPage.vue';

export default defineComponent({
  components: {
    TopNavigation,

    HomePage,
    PostsPage,
    PostPage
  }
});
</script>

<template>
  <TopNavigation />

  <main>
    <HomePage />
    <!-- <PostsPage /> -->
    <!-- <PostPage post-id="1" /> -->
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 2.4rem;
}
</style>
