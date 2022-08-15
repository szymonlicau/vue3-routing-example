<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    post: {
      type: Object,
      required: true
    }
  }
});
</script>

<template>
  <article class="post">
    <img
      class="post__cover"
      :src="post.cover_url"
      :alt="`${post.title} cover image`"
    />

    <div class="post__info">
      <header class="post__title">
        {{ post.title }}
      </header>

      <p class="post__description">
        {{ post.description }}
      </p>

      <a
        href="#"
        class="post__read-more"
      >
        Read more
      </a>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.post {
  border-radius: 0.4rem;
  padding: 1.6rem;
  display: grid;
  grid-template-columns: 24rem 1fr;
  grid-column-gap: 1.6rem;
  border: 0.1rem solid var(--color-border);

  & + & {
    margin-top: 2.4rem;
  }

  &__cover {
    object-fit: cover;
    width: 100%;
    height: 18rem;
    border-radius: 0.4rem;
  }

  &__info {
    overflow: hidden;
    display: flex;
    flex-flow: column;
  }

  &__title {
    font-weight: bold;
    font-size: 2.4rem;
  }

  &__description {
    margin-top: 1.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__read-more {
    display: inline-block;
    margin-top: auto;
    margin-left: auto;
  }
}
</style>
