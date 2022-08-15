<script>
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    items () {
      return [
        { label: 'Home', route: 'Home' },
        { label: 'Posts', route: 'Posts' }
      ];
    }
  }
});
</script>

<template>
  <nav class="top-navigation">
    <ul class="top-navigation__items">
      <li
        v-for="(item, index) in items"
        :key="`${item.label}-${index}`"
        class="top-navigation__item"
      >
        <router-link
          class="top-navigation-item"
          :to="{ name: item.route }"
          active-class="top-navigation-item--active"
        >
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.top-navigation {
  position: sticky;
  top: 0;
  z-index: var(--z-top-navigation);
  border-bottom: 0.1rem solid var(--color-border);
  box-shadow: var(--shadow-common);
  background-color: var(--color-white);

  &__items {
    display: flex;
    align-items: center;

    max-width: var(--content-width);
    margin: 0 auto;
    padding: 0 2.4rem;

    list-style: none;
  }

  &__item {
    & + & {
      margin-left: 2.4rem;
    }
  }
}

.top-navigation-item {
  display: flex;
  align-items: center;
  height: 8rem;
  padding: 0 0.8rem;
  font-size: 1.8rem;
  color: var(--color-green);
  text-decoration: none;
  border-top: 0.4rem solid transparent;
  border-bottom: 0.4rem solid transparent;
  transition: border var(--transition-duration) linear;

  &:hover,
  &--active {
    font-weight: bold;
  }

  &--active {
    border-bottom-color: var(--color-green);
  }
}
</style>
