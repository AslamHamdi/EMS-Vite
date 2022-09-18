<template>
       <div class="flex justify-center items-center" style="height: 100%">
        <div class="w-full" style="height: 100%">
            <!-- Header -->
            <div class="w-full flex pb-4 border-b-2 border-gray-200" style="height: 7%">
                <div class="pl-6 cursor-pointer text-base text-gray-400" style="width: 20%">●</div>
                <div class="cursor-pointer text-base text-gray-400" style="width: 20%">ID <span class="float-right pr-8"><i class="fa-solid fa-sm fa-sort"></i></span></div>
                <div class="cursor-pointer text-base text-gray-400" style="width: 20%">Name <span class="float-right pr-8"><i class="fa-solid fa-sm fa-sort"></i></span></div>
                <div class="cursor-pointer text-base text-gray-400" style="width: 20%">Email <span class="float-right pr-8"><i class="fa-solid fa-sm fa-sort"></i></span></div>
                <div class="cursor-pointer flex justify-center text-base text-gray-400" style="width: 20%"><span class="float-right pr-8" style="">●</span> </div>
            </div>
            <!-- Body -->
            <div class="overflow-auto w-full" style="max-height: 93%;">
                <div v-for="(o, i) in employeeListData" :key="i" class="w-full flex table-list pt-2 pb-2" :class="o.class()">
                    <div class="flex items-center" style="width: 20%">
                        <img class="w-14 h-14 rounded-full object-cover" src="/public/assets/face.jpg"
                        alt="Rounded avatar">
                    </div>
                    <div class="block lg:flex-grow text-sm text-gray-900 font-medium py-4 whitespace-nowrap" style="width: 20%">
                        <div class="ellipsiphy" style="max-width: 80px;">
                            {{o.id}}
                        </div>
                    </div>
                    <div class="block lg:flex-grow text-sm text-gray-900 font-medium py-4 whitespace-nowrap" style="width: 20%">
                        <div class="ellipsiphy">
                            {{o.name}}
                        </div>
                    </div>
                    <div class="block lg:flex-grow text-sm text-gray-900 font-medium py-4 whitespace-nowrap" style="width: 20%">
                        <div class="ellipsiphy">
                            {{o.email}}
                        </div>
                    </div>
                    <div class="flex-grow flex justify-center items-center text-sm text-gray-900 py-4 text-gray-400" style="width: 20%">
                        <i class="fa-solid fa-ellipsis cursor-pointer" style="color: gray"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../../scripts/department/employeeList.ts"></script>