import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Department from '../components/department/Department.vue'
import Employee from '../components/employee/Employee.vue'
import Role from '../components/role/Role.vue'
import Setting from '../components/setting/Setting.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/employee',
        name: 'Employee',
        component: Employee
    },
    {
        path: '/department',
        name: 'Department',
        component: Department
    },
    {
        path: '/role',
        name: 'Role',
        component: Role
    },
    {
        path: '/setting',
        name: 'Setting',
        component: Setting
    },
]

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes
})

export default router
