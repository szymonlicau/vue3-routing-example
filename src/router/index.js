import { createWebHistory, createRouter } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/HomePage.vue')
    },

    {
      path: '/posts',
      component: () => import('@/pages/PostsPage.vue'),
      children: [
        {
          path: '',
          name: 'Posts',
          component: () => import('@/pages/PostListPage.vue'),
        },
        {
          path: ':postId',
          name: 'Post',
          component: () => import('@/pages/PostPage.vue'),
          props: true
        },
      ]
    },

    {
      path: '/404',
      name: 'NotFound',
      component: () => import('@/pages/NotFoundPage.vue')
    },

    {
      path: '/:path*',
      redirect: '/404'
    }
  ]
});
