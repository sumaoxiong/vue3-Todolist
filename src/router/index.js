import { createRouter, createWebHashHistory } from 'vue-router'
import TodoListView from '@/views/TodoListView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/', // path: '/todolist',
      name: 'todolist',
      component: TodoListView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
  ],
})

export default router
