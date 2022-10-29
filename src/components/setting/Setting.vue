<template>
    <div class="space-y-4 flex" style="height: 96.9%;">
        <div class="border-r-2 border-slate-200 space-y-4" style="width: 20%; height: 100%;">
            <div class="lg:flex sm:flex-wrap space-x-2 pb-4" style="margin-top: 15px;">
                <div class="flex items-center cursor-pointer" style="">
                    <div class="flex items-center justify-center rounded-lg"
                        style="width: 30px; height: 25px; background-color: #eaeaf5;">
                        <i class="fa-solid fa-xal fa-angle-left"></i>
                    </div>
                </div>
                <h1 class="text-2xl font-bold" style="width: 50%;">Settings</h1>
            </div>

            <div class="overflow-auto" style="height: 84.2%;">
                <div v-for="(o, i) in tabs" :key="i" @click="onSelectTab(o.component)"
                    class="employee-list cursor-pointer pt-2 pb-2" style="margin-right: 4px;">
                    <div class="flex text-slate-500" style="width: 100%;">
                        <div style="width: 25px;">
                            <i style="color: #2b2770" :class="o.icon"></i>
                        </div>
                        <div class="font-bold text-slate-500" style="font-size: 15px; color: #2b2770">{{ o.name }}</div>
                    </div>
                    <div class="flex hidden lg:block">
                        <div style="width: 25px;"></div>
                        <div class="" style="max-width: 80%">
                            {{ o.description }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="" style="width: 80%;">
            <div class="relative mb-2" style="width: 30%; height: 5%; margin-left: 1.5rem;">
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
            <div class="" style="margin-left: 1.5rem; margin-right: 1.5rem; height: 100%;">
                <Transition name="bounce" mode="out-in">
                    <component :is="componentNow"></component>
                </Transition>
            </div>
        </div>
    </div>
</template>
<script src="../../scripts/setting/setting.ts"></script>