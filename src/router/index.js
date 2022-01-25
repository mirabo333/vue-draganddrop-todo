import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dragndrop from '@/components/DragnDrop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dragndrop',
      name: 'dragndrop',
      component: dragndrop
    }
  ]
})
