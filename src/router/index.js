import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
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
        {
          path: 'cart',
          name: 'UserCart',
          component: () => import('../views/CartListView.vue')
        },
        {
          path: 'order',
          name: 'UserOrder',
          component: () => import('../views/OrderView.vue')
        },
        {
          path: 'success',
          name: 'OrderSuccess',
          component: () => import('../views/OrderSuccess.vue')
        },
        {
          path: 'member',
          name: 'MemberLayout',
          component: () => import('../views/MemberLayoutView.vue'),
          children:[
            {
              path: '',
              name: 'MemberHome',
              component: () => import('../views/MemberHomeView.vue')
            },
            {
              path: 'order',
              name: 'MemberOrder',
              component: () => import('../views/MemberOrdersView.vue')
            },
            {
              path: 'favorites',
              name: 'MemberFavorites',
              component: () => import('../views/MemberFavoritesView.vue')
            },
          ],
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
      component: () => import('../views/AdLayoutView.vue'),
      children: [
        {
          path: 'home',
          name: 'AdminHome',
          component: () => import('../views/AdHomePageView.vue')
        },
        {
          path: 'coupons',
          name: 'AdminCoupons',
          component: () => import('../views/AdCouponsView.vue')
        }
      ]
    }
  ]
})

export default router
