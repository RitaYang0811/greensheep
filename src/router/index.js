import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'UserLayout',
      component: () => import('../views/UserLayoutView.vue'),
      children: [
        {
          path: '',
          name: 'UserHome',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: 'about',
          name: 'UserAbout',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'story',
          name: 'UserStory',
          component: () => import('../views/StoryView.vue')
        },
        {
          path: 'articleList',
          name: 'UserArticleList',
          component: () => import('../views/ArticleListView.vue'),
          children: [
            {
              path: 'articleDetail',
              name: 'UserArticleDetail',
              component: () => import('../views/ArticleDetailView.vue')
            }
          ]
        },
        {
          path: '/faq',
          name: 'UserFaq',
          component: () => import('../views/FaqView.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'AdminLogin',
      component: () => import('../views/AdLogin.vue'),
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/AdDashboardView.vue'),
      children: [
        {
          path: 'coupons',
          component: () => import('../views/AdCouponsView.vue')
        }
      ]
    }
  ]
})

export default router
