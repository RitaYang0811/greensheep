import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'UserLayout',
      component: () => import('../views/user/UserLayoutView.vue'),
      children: [
        {
          path: '',
          name: 'UserHome',
          component: () => import('../views/user/HomeView.vue'),
          meta: {
            title: '綠羊珠寶-Green Sheep handmade jewelry'
          }
        },
        {
          path: 'products',
          name: 'UserProduct',
          component: () => import('../views/user/ProductsView.vue')
        },
        // {
        //   path: 'products/:category?/:page',
        //   name: 'UserProductCategory',
        //   component: () => import('../views/user/ProductsView.vue'),
        //   props: (route) => {
        //     console.log('route', route)
        //   }
        // },
        {
          path: 'products/:id',
          name: 'UserProductDetail',
          component: () => import('../views/user/ProductDetailView.vue')
        },
        {
          path: 'custom',
          name: 'UserCustom',
          component: () => import('../views/user/CustomView.vue')
        },
        {
          path: 'about',
          name: 'UserAbout',
          component: () => import('../views/user/AboutView.vue')
        },
        {
          path: 'story',
          name: 'UserStory',
          component: () => import('../views/user/StoryView.vue')
        },
        {
          path: 'articleList',
          name: 'UserArticleList',
          component: () => import('../views/user/ArticleListView.vue'),
          children: [
            {
              path: 'articleDetail',
              name: 'UserArticleDetail',
              component: () => import('../views/user/ArticleDetailView.vue')
            }
          ]
        },
        {
          path: '/faq',
          name: 'UserFaq',
          component: () => import('../views/user/FaqView.vue')
        },
        {
          path: 'cart',
          name: 'UserCart',
          component: () => import('../views/user/CartListView.vue')
        },
        {
          path: 'order',
          name: 'UserOrder',
          component: () => import('../views/user/OrderView.vue')
        },
        {
          path: 'success',
          name: 'OrderSuccess',
          component: () => import('../views/user/OrderSuccess.vue')
        },
        {
          path: 'member',
          name: 'MemberLayout',
          component: () => import('../views/user/MemberLayoutView.vue'),
          children: [
            {
              path: '',
              name: 'MemberHome',
              component: () => import('../views/user/MemberHomeView.vue')
            },
            {
              path: 'order',
              name: 'MemberOrder',
              component: () => import('../views/user/MemberOrdersView.vue')
            },
            {
              path: 'favorites',
              name: 'MemberFavorites',
              component: () => import('../views/user/MemberFavoritesView.vue')
            }
          ]
        },
        // 會員登入
        {
          path: 'memberLogin',
          name: 'MemberLogin',
          component: () => import('../views/user/MemberLogin.vue')
        },
        //會員註冊
        {
          path: 'memberSignUp',
          name: 'MemberSignUp',
          component: () => import('../views/user/MemberSignUp.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'AdminLogin',
      component: () => import('../views/admin/AdLogin.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/admin/AdLayoutView.vue'),
      children: [
        {
          path: 'home',
          name: 'AdminHome',
          component: () => import('../views/admin/AdHomePageView.vue')
        },
        {
          path: 'products',
          name: 'AdminProducts',
          component: () => import('../views/admin/AdProductView.vue')
        },
        {
          path: 'coupons',
          name: 'AdminCoupons',
          component: () => import('../views/admin/AdCouponsView.vue')
        },
        {
          path: 'articles',
          name: 'AdminArticlesLayout',
          component: () => import('../views/admin/AdArticlesLayoutView.vue'),
          children: [
            {
              path: '',
              name: 'AdminArticles',
              component: () => import('../views/admin/AdArticlesView.vue')
            },
            {
              path: ':id',
              name: 'AdminEditArticle',
              component: () => import('../views/admin/AdArticleView.vue')
            },
            {
              path: 'articleCreate',
              name: 'AdminCreateArticle',
              component: () => import('../views/admin/AdArticleView.vue')
            }
          ]
        },
      ]
    }
  ]
})

export default router
