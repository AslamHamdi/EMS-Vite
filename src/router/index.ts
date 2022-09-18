import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Department from '../components/department/Department.vue'
import Employee from '../components/employee/Employee.vue'
import Role from '../components/role/Role.vue'
import Setting from '../components/setting/Setting.vue'
import PageNotFound from '../components/public/PageNotFound.vue'

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/employee',
        name: 'employee',
        component: Employee
    },
    {
        path: '/department',
        name: 'department',
        component: Department
    },
    {
        path: '/role',
        name: 'role',
        component: Role
    },
    {
        path: '/setting',
        name: 'setting',
        component: Setting
    },
    { path: '/:pathMatch(.*)*', name: 'notfound', component: PageNotFound  },  
]

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes
})

export default router
