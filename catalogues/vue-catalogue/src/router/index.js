import Vue from 'vue'
import Router from 'vue-router'
import Tiles from '@/components/Tiles'
import DetailWrapper from '@/components/DetailWrapper'
import contentService from '@/services/contentService'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail/:name',
      component: DetailWrapper,
      props: true
    },
    {
      path: '/',
      component: Tiles,
      props: {
        content: contentService.getData()
      }
    }
  ]
})
