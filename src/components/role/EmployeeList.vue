<template>
    <div class="flex space-x-2" style="height: 100%; width: 100%;">
        <div class="flex justify-center items-center w-1/2" style="height: 100%">
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
                            <img class="w-14 h-14 rounded-full object-cover" src="/assets/face.jpg"
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
        <div class="flex justify-center items-center w-1/2 h-full">
            <div class="rounded-2xl" style="height: 60%; width: 90%; margin-top: 34px; box-shadow: 0 0 20px  #d8d8f1;">
                <div class="flex justify-center" style="height: 10%;">
                    <div class="border-b-2 flex items-end" style="width: 95%">
                        <span class="text-xl font-medium mb-1" style="color: #2b2770;">
                            <i class="fa-solid fa-address-card"></i>
                            PROFILE
                        </span>
                    </div>
                </div>
                <div class="w-full overflow-auto lg:overflow-hidden" style="height: 89%">
                    <div class="w-full flex justify-center items-center my-6" style="height: 25%">
                        <img class="w-32 h-32 rounded-full object-cover"
                        src="/assets/face3.jpg" alt="Rounded avatar">
                    </div>
                    <div class="w-full flex justify-center" style="height: 70%">
                        <div class="" style="height: 100%; width: 90%">
                            <div class="border-b-2 border-slate-200 w-full pt-2">
                                <span class="font-medium">Name</span>
                                <span class="float-right">Muhammad Aslam Hamdi Bin Amran</span>
                            </div>
                            <div class="border-b-2 border-slate-200 w-full pt-2">
                                <span class="font-medium ">Email</span>
                                <span class="float-right">m.aslamhamdi@gmail.com</span>
                            </div>
                            <div class="border-b-2 border-slate-200 w-full pt-2">
                                <span class="font-medium ">Department</span>
                                <span class="float-right">Software</span>
                            </div>
                            <div class="border-b-2 border-slate-200 w-full pt-2">
                                <span class="font-medium ">Position</span>
                                <span class="float-right">Front end developer</span>
                            </div>
                            <div class="border-b-2 border-slate-200 w-full pt-2">
                                <span class="font-medium ">Report to</span>
                                <span class="float-right">Amran Bin Hassan</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script src="../../scripts/role/employeeList.ts"></script>