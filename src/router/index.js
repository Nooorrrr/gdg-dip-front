import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'
import TeamSpace from '../views/TeamSpace.vue'
import Challenges from '../views/Challenges.vue'

import Landing from '../views/Landing/Landing.vue';
import Login from '../views/Landing/Login.vue';
import Register from '../views/Landing/Register.vue';

import EditChallenges from '../views/Admin/EditChallenges.vue';
import EditUsers from '../views/Admin/EditUsers.vue';
import Teams from '../views/Admin/Teams.vue';
import LoginAdmin from '../views/Landing/LoginAdmin.vue';


// Define routes
const routes = [
  {
    path: '/',
    name: '',
    component: Landing,

  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path:'/register',
    name: 'register',
    component: Register,
  },
  {
    path:'/login_admin',
    name: 'login_admin',
    component: LoginAdmin,
  },

  {
    path:'/EditChallenges',
    name: 'editchallenges',
    component: EditChallenges,
  },
  {
    path:'/EditTeams',
    name: 'teams',
    component: Teams,
  },
  {
    path:'/EditUsers',
    name: 'users',
    component:EditUsers,
  },
  {
    path: '/Profile',
    name: '',
    component: Profile,

  },
  {
    path: '/TeamSpace',
    name: 'TeamSpace',
    component: TeamSpace,
  },
  {
    path:'/Challenges',
    name: 'Challenges',
    component: Challenges,
  }
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(), 
  routes 
})

export default router
