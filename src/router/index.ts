import { createRouter, createWebHistory } from 'vue-router'
//import CalendarView from '@/views/CalendarView.vue'
// import TasksView from '@/views/TasksView.vue'
// import BasicTaskView from '@/views/BasicTaskView.vue'
// import Playground from '@/views/Playground.vue'
import TimeReportView from '@/views/TimeReportView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/tasks',
    //   name: 'tasks',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-laded when the route is visited.
    //   component: TasksView
    // },
    // {
    //   path: '/basic-tasks',
    //   name: 'basic-tasks',
    //   component: BasicTaskView
    // },
    // {
    //   path: '/playground',
    //   name: 'playground',
    //   component: Playground
    // },
    {
      path: '/time-report',
      name: 'TimeReport',
      component: TimeReportView
    }
  ]
})

export default router
