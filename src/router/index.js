import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  scrollBehavior() {
    return { top: 0 }
  },
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
          component: () => import('../views/user/ProductsView.vue'),
          children: [
            {
              path: ':category',
              component: () => import('../views/user/ProductsView.vue'),
              props: true
            }
          ]
        },
        {
          path: 'products/detail/:id',
          name: 'UserProductDetail',
          component: () => import('../views/user/ProductDetailView.vue')
        },
        {
          path: 'test',
          component: () => import('../views/user/testLine.vue')
        },
        // {
        //   path: 'products/客製設計 CUSTOMIZED',
        //   name: 'UserCustom',
        //   component: () => import('../views/user/ProductsView.vue')
        // },

        {
          path: 'story',
          name: 'UserStory',
          component: () => import('../views/user/StoryView.vue')
        },
        {
          path: 'articles',
          name: 'UserArticleLayout',
          component: () => import('../views/user/ArticleLayoutView.vue'),
          children: [
            {
              path: '',
              name: 'UserArticles',
              component: () => import('../views/user/ArticlesView.vue')
            },
            {
              path: ':id',
              name: 'UserArticle',
              component: () => import('../views/user/ArticleView.vue')
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
              path: 'home',
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
          component: () => import('../views/user/MemberLoginView.vue')
        },
        // 會員登入loading頁
        {
          path: 'loginLoading',
          name: 'loginLoading',
          component: () => import('../views/user/LoginLoadingView.vue')
        },
        // 忘記密碼
        {
          path: 'memberForget',
          name: 'memberForget',
          component: () => import('../views/user/MemberForgetView.vue')
        },
        //會員註冊
        {
          path: 'memberSignUp',
          name: 'MemberSignUp',
          component: () => import('../views/user/MemberSignUpView.vue')
        },
        // Google和Line 登入後填寫生日
        {
          path: 'OtherLogin',
          name: 'OtherLogin',
          component: () => import('../views/user/OtherLoginView.vue')
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
        {
          path: 'orders',
          name: 'AdminOrders',
          component: () => import('../views/admin/AdOrdersView.vue')
        }
      ]
    }
  ]
})

export default router
