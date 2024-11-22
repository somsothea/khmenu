
import { createRouter, createWebHistory } from 'vue-router'

// Import your folder pages
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Item from '@/pages/Items.vue'
import Store from '@/pages/Store.vue'
import StoreDetail from '@/pages/StoreDetail.vue'
import Terms from '@/pages/Terms.vue'
import Privacy from '@/pages/Privacy.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/item', component: Item },
    { path: '/store', component: Store },
    { path: '/storedetail', component: StoreDetail },
    { path: '/term', component: Terms },
    { path: '/privacy', component: Privacy }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router