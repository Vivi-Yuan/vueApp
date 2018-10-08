// 引入 vue 框架
import Vue from 'vue'
// 引入路由模块
import Router from 'vue-router'

// 引入 首页组件
import Index from '@/components/Index'
// 引入入 公众的 组件
import ContactUs from '@/components/ContactUs'
// 引入入 我的 组件
import Me from '@/components/Me'

// 分别 引入 主题 分类的组件
import All from '@/components/topics/All'
import Good from '@/components/topics/Good'
import Dev from '@/components/topics/Dev'
import Share from '@/components/topics/Share'
import Ask from '@/components/topics/Ask'
import Job from '@/components/topics/Job'
// 文章的详情页
import Details from '@/components/topics/Details'
// 写loading 效果测试
// import Loading from '@/components/public/Loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/',
          component:All
        },
        {
          path:'good',
          component:Good
        },
        {
          path:'dev',
          component:Dev
        },
        {
          path:'share',
          component:Share
        },
        {
          path:'ask',
          component:Ask
        },
        {
          path:'job',
          component:Job
        },
        {
          path:'details/:id',
          component:Details
        }
      ]
    },
    {
      path: '/contactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },

    // loding 路由
    // {
    //   path: '/loading',
    //   component: Loading
    // },

    // 路由跳转
    {
      path:'/*',
      redirect: '/index'
    }
  ]
})
