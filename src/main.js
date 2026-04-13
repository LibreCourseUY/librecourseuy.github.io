import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import GitGuide from './components/GitGuide.vue'
import Repos from './components/Repos.vue'
import Contribute from './components/Contribute.vue'
import Docs from './components/Docs.vue'
import Signing from './components/Signing.vue'
import HowToLearn from './components/HowToLearn.vue'
import Licensing from './components/Licensing.vue'
import Linux from './components/Linux.vue'
import CLA from './components/CLA.vue'
import WhyOpenSource from './components/WhyOpenSource.vue'
import { useMetrics } from './composables/useMetrics'

const routes = [
  { path: '/', component: Home },
  { path: '/learn', component: HowToLearn },
  { path: '/learn/linux', component: Linux },
  { path: '/git', component: GitGuide },
  { path: '/repos', component: Repos },
  { path: '/contribute', component: Contribute },
  { path: '/docs', component: Docs },
  { path: '/docs/signing', component: Signing },
  { path: '/docs/licensing', component: Licensing },
  { path: '/CLA', component: CLA },
  { path: '/why-open-source', component: WhyOpenSource }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const { trackView } = useMetrics()
  trackView(to.path)
})

createApp(App).use(router).mount('#app')
