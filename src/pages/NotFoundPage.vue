<template>
  <div class="not-found">
    <h1>
      404 🐻
    </h1>

    <h2> Oh no! We couldn't find the page you are looking for! </h2>

    <h3>
      Please go back to the
      <a href='#'>home page</a>
    </h3>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 2.4rem;
  min-height: 60rem;
  height: 80vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 6.4rem;
  }

  h2 {
    font-size: 3.2rem;
    margin: 2.4rem 0;
  }

  h3 {
    font-size: 2.4rem;
  }
}
</style>
