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

const routes = [
  { path: '/', component: Home },
  { path: '/git', component: GitGuide },
  { path: '/repos', component: Repos },
  { path: '/contribute', component: Contribute },
  { path: '/docs', component: Docs },
  { path: '/docs/signing', component: Signing },
  { path: '/learn', component: HowToLearn }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
