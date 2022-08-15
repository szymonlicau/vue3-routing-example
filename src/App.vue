<script>
import { defineComponent } from 'vue';

import TopNavigation from '@/components/TopNavigation.vue';

export default defineComponent({
  components: {
    TopNavigation,
  }
});
</script>

<template>
  <TopNavigation />

  <main>
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 2.4rem;
}
</style>
