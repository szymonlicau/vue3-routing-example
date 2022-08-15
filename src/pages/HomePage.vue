<template>
  <h1> Hello, welcome to my blog! </h1>

  <p>
    Check out the
    <router-link :to="{ name: 'Posts' }">
      recent posts
    </router-link>.
  </p>
</template>
