<template>
  <div class="bear-loader">
    <div class="bear-loader__spinner">
      🐻
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(720deg);
  }
}

.bear-loader {
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__spinner {
    font-size: 6.4rem;
    animation: spin 1.2s infinite ease-in-out;
  }
}
</style>
