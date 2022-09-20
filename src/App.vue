<template>
  <div class="wholebody flex">
    <div class="border-2 border-black flex w-full">
      <div class="" style="width: 80px; height: 100%;">
        <div id="sidebar" class="rounded-t-2xl rounded-b-2xl">
          <div class="flex justify-center items-end" style="height: 10%; width: 100%">
              <h1 class="text-2xl font-bold" style="color: white;">ems</h1>
          </div>
          <div class="" style="height: 10%; width: 100%;">
          </div>
          <router-link to="/" @click="onTabSelect('/')">
            <div class="flex justify-center items-center cursor-pointer hover:bg-indigo-900" ref="/"
                  style="height: 10%; width: 100%;">
                  <i class="fa-solid fa-house-chimney fa-xl" style="color: white;"></i>
              </div>
          </router-link>

          <router-link to="/employee" @click="onTabSelect('employee')">
            <div class="flex justify-center items-center cursor-pointer hover:bg-indigo-900" ref="employee"
                  style="height: 10%; width: 100%;">
                  <i class="fa-solid fa-clipboard-user fa-xl" style="color: white;"></i>
              </div>
          </router-link> 

          <router-link to="/department" @click="onTabSelect('department')">
            <div class="flex justify-center items-center cursor-pointer hover:bg-indigo-900"
                  ref="department" style="height: 10%; width: 100%;">
                  <i class="fa-solid fa-sitemap fa-xl" style="color: white;"></i>
              </div>
          </router-link>

          <router-link to="/role" @click="onTabSelect('role')">
            <div class="flex justify-center items-center cursor-pointer hover:bg-indigo-900" ref="role"
                  style="height: 10%; width: 100%;">
                  <i class="fa-solid fa-user-check fa-xl" style="color: white;"></i>
              </div>
          </router-link>

          <router-link to="/setting" @click="onTabSelect('setting')">
            <div class="flex justify-center items-end" style="height: 30%; width: 100%;">
                  <div class="flex justify-center items-center cursor-pointer hover:bg-indigo-900"
                      ref="setting" style="height: 32%; width: 100%;">
                      <i class="fa-solid fa-gear fa-xl" style="color: white;"></i>
                  </div>
              </div>
          </router-link>
        </div>
      </div>
      <div id="content" class="w-max h-full inline-block pl-4 mt-2">
        <router-view/>
      </div>
      <div style="width: 280px;">
            <div id="profilebar" class="w-max h-full rounded-2xl">

            </div>
        </div>
    </div>
  </div>
</template>
<script src="./app.ts"></script>

<style>
  @import './css/layout.css';
</style>
