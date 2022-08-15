<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    recentPosts: {
      type: Array,
      required: true
    }
  }
});
</script>

<template>
  <nav class="posts-nav">
    <header class="posts-nav__header">
      Check out also:
    </header>

    <ul class="posts-nav__items">
      <li
        v-for="post in recentPosts"
        :key="post.id"
        class="posts-nav__item"
      >
        <a
          href='#'
          class="posts-nav-item"
        >
          {{ post.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.posts-nav {
  border-radius: 0.4rem;
  border: 0.1rem solid var(--color-border);
  height: 100%;

  &__header {
    padding: 1.6rem;
    font-weight: bold;
    text-align: center;
  }

  &__items {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    & + & {
      margin-top: 0.8rem;
    }
  }
}

.posts-nav-item {
  border-left: 0.4rem solid transparent;
  padding: 0.4rem 0.8rem;
  font-size: 1.8rem;
  color: var(--color-green);
  text-decoration: none;
  transition: border var(--transition-duration) linear;

  &:hover,
  &--active {
    font-weight: bold;
  }

  &--active {
    border-left-color: var(--color-green);
  }
}
</style>
