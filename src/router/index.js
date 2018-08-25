import Vue from 'vue';
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetail from '../pages/MessageDetail.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'/home/message',
          component:Message,
          children:[
            {
              path:'/home/message/detail/:id',
              component:MessageDetail
            }

          ]
        },
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    {
      path:'/',
      component:About
    }
  ]
})
