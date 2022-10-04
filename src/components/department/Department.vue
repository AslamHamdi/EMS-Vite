<template>
    <div class="space-y-4 flex" style="height: 96.9%;">
        <div class="border-r-2 border-slate-200 space-y-4" style="width: 20%; height: 100%;">
            <div class="lg:flex sm:flex-wrap" style="">
                <h1 class="text-xl lg:text-2xl font-bold" style="width: 50%;">Department</h1>
                <div class="" style="width: 30%;">
                </div>
                <div class="" style="width: 20%;">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
                        style="height: 35px; background-color: #6A67CE; box-shadow: -4px 4px  #4a488b;">
                        <i class="fa-solid fa-xl fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="relative mb-2" style="width: 97%; height: 5%;">
                <input type="text" id="voice-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..." required>
                <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div class="overflow-auto" style="height: 84.2%;">
                <div v-for="n in 5" :key="n" class="employee-list cursor-pointer" style="height: 85px; margin-right: 4px;">
                    <div class="flex space-x-1" style="height: 100%; width: 100%;">
                        <div class="flex items-center justify-center" style="width: 20%;">
                            <img class="w-5 h-5 lg:w-10 lg:h-10 rounded-full object-cover"
                                src="/assets/developer.jpg" alt="Rounded avatar">
                        </div>
                        <div class="" style="width: 60%;">
                            <div class="" style="height: 30%;">
                                <div class="font-bold label-heading ellipsiphy " style="max-width: 200px;">Software
                                    Developer
                                </div>
                            </div>
                            <div class="" style="height: 70%;">
                                <div class="flex items-end" style="height: 50%;">
                                    <div class="text-slate-500 text-sm ellipsiphy " style="max-width: 200px;">Created by
                                        Aslam Hamdi
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="" style="width: 20%;">
                            <div class="" style="height: 100%;">
                                <span class="font-bold label-heading hidden lg:block">Dec 22</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="" style="width: 80%;">
            <div class="flex border-b-2" style="height: 15%; margin: 1.5rem;">
                <div class="mr-4 lg:mr-0" style="width: 15%;">
                    <div class="flex items-center justify-center cursor-pointer" style="width: 100%; height: 100%;">
                        <img class="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover" src="/assets/developer.jpg"
                            alt="Rounded avatar">
                        <div
                            class="group flex items-center justify-center absolute w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover">
                            <div class="rounded-full object-cover absolute group-hover:bg-slate-500 group-hover:opacity-20"
                                style="width: 100%; height: 100%;">
                            </div>
                            <div class="rounded-full object-cover" style="width: 100%; height: 100%;">
                                <div class="hidden group-hover:flex group-hover:opacity-1 justify-center items-center pt-4"
                                    style="width: 100%; height: 50%;">
                                    <i class="hidden group-hover:block fa-solid fa-camera fa-xl change-dp-icon"></i>
                                </div>
                                <div class="hidden group-hover:flex text-xs lg:text-base justify-center"
                                    style="width: 100%; height: 50%; color: black! important; opacity: 1 !important;">
                                    EDIT PICTURE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full flex items-center" style="">
                    <div class="w-full">
                        <div class="font-bold label-heading flex-grow">
                            <span class="">Software Developer</span>
                            <div v-if="componentNow == 'form-app'" class="float-right space-x-2">
                                <span @click="openEditDeptDialog()"><i class="fa-solid fa-pen-to-square cursor-pointer"></i></span>
                                <span @click="openDeleteDeptDialog()"><i class="fa-solid fa-trash cursor-pointer"></i></span>
                            </div>
                        </div>
                        <div class="text-slate-500 text-sm">
                            Last edited on 16th August 2022
                        </div>
                        <div class="text-slate-500 text-sm" style="max-width: 100px;">
                            <span class="" style="color: green;">●</span> Active
                        </div>
                    </div>
                </div>

            </div>
            <!-- box-shadow: 0 0 20px #d8d8f1; -->
            <div class="flex justify-center items-center" style="height: 10%;">
                <div class="flex rounded-3xl w-2/4 lg:w-1/4 shadow-xl justify-center items-center"
                    style="height: 52px; background-color: #d1def0;">
                    <div class="cursor-pointer h-full w-2/4 rounded-3xl flex justify-center items-center"
                        style="height: 40px; margin-left: 6px;" :style="{backgroundColor: tabStyle[0].color}"
                        @click="onTabSelect('form')">
                        <span class="font-medium" :class="tabClass[0].iconColor"><i
                                class="fa-solid fa-lg fa-sitemap"></i></span>
                    </div>
                    <div class="cursor-pointer h-full w-2/4 rounded-3xl flex justify-center items-center"
                        style="height: 40px; margin-right: 6px;" :style="{backgroundColor: tabStyle[1].color}"
                        @click="onTabSelect('employee')">
                        <span class="font-medium" :class="tabClass[1].iconColor"><i
                                class="fa-solid fa-lg fa-clipboard-list"></i></span>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden" style="height: 70%;">
                <div class="" style="margin-left: 1.5rem; margin-right: 1.5rem; height: 100%;">
                    <component :is="componentNow" ref="childComp"></component>
                </div>
            </div>
        </div>
    </div>
    <dialog-app ref="dialogModalComp" @confirmEditDept="confirmEditDept" @confirmDeleteDept="confirmDeleteDept" 
    :buttons="dialogNow" :icon="dialogNow[0].icon" :title="dialogNow[0].title" :text="dialogNow[0].text"></dialog-app>
</template>
<script src="../../scripts/department/department.ts"></script>