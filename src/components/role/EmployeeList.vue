<template>
    <div class="overflow-auto" style="height: 100%; width: 100%;">
        <div class="lg:flex lg:flex-wrap" style="height: 65%; width: 99.7%;">
            <div class="justify-center items-center lg:w-1/2" style="height: 98.7%">
                <div class="w-full" style="height: 100%">
                    <!-- Header -->
                    <div class="w-full flex pb-4 border-b-2 border-gray-200" style="height: 7%">
                        <div class="pl-6 cursor-pointer text-base text-gray-400" style="width: 20%">●</div>
                        <div class="cursor-pointer text-base text-gray-400" style="width: 20%">ID <span class="invisible md:invisible lg:visible float-right pr-8"><i class="fa-solid fa-sm fa-sort"></i></span></div>
                        <div class="cursor-pointer text-base text-gray-400" style="width: 20%">Name <span class="invisible md:invisible lg:visible float-right pr-8"><i class="fa-solid fa-sm fa-sort"></i></span></div>
                        <div class="cursor-pointer text-base text-gray-400" style="width: 20%">Email <span class="invisible md:invisible lg:visible float-right pr-8"><i class="fa-solid fa-sm fa-sort"></i></span></div>
                        <div class="cursor-pointer flex justify-center text-base text-gray-400" style="width: 20%"><span class="float-right pr-8" style="">●</span> </div>
                    </div>
                    <!-- Body -->
                    <div class="table-scrollbar overflow-auto w-full" style="max-height: 93%;">
                        <div v-for="(o, i) in roleEmployeeListComp"  :key="i" class="w-full flex table-list pt-2 pb-2" :class="o.class()">
                            <div class="flex items-center" style="width: 20%">
                                <img @click="viewEmployeeProfile(o.idd)" class="cursor-pointer w-14 h-14 rounded-full object-cover" :src="o.profilePicture ? 'company_files/' + o.profilePicture : '/assets/face.jpg'"
                                alt="Rounded avatar">
                            </div>
                            <div class="block lg:flex-grow text-sm text-gray-900 font-medium py-4 whitespace-nowrap" style="width: 20%">
                                <div class="ellipsiphy" style="max-width: 80px;">
                                    {{o.employeeId}}
                                </div>
                            </div>
                            <div class="block lg:flex-grow text-sm text-gray-900 font-medium py-4 whitespace-nowrap" style="width: 20%">
                                <div class="ellipsiphy">
                                    {{o.firstName}}
                                </div>
                            </div>
                            <div class="block lg:flex-grow text-sm text-gray-900 font-medium py-4 whitespace-nowrap" style="width: 20%">
                                <div class="ellipsiphy">
                                    {{o.emailAddress}}
                                </div>
                            </div>
                            <div class="flex-grow flex justify-center items-center text-sm text-gray-900 py-4 text-gray-400" style="width: 20%">
                                <i class="fa-solid fa-ellipsis cursor-pointer" style="color: gray"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center lg:w-1/2 h-full">
                <div class="rounded-2xl" style="height: 90%; width: 97%; margin-top: 34px; box-shadow: 0 0 20px  #d8d8f1;">
                    <div class="flex justify-center" style="height: 10%;">
                        <div class="border-b-2 flex items-end" style="width: 95%">
                            <span class="text-xl font-medium mb-1" style="color: #2b2770;">
                                <i class="fa-solid fa-address-card"></i>
                                PROFILE
                            </span>
                        </div>
                    </div>
                    <div class="w-full lg:overflow-hidden" style="height: 89%;">
                        <div class="w-full flex justify-center items-center my-6" style="height: 25%">
                            <img class="w-32 h-32 rounded-full object-cover"
                            :src="profileDataComp.profilePicture" alt="Rounded avatar">
                        </div>
                        <div class="w-full flex justify-center" style="height: 70%">
                            <div class="" style="height: 100%; width: 90%">
                                <div class="lg:flex border-b-2 border-slate-200 w-full pt-2" >
                                    <div class="hidden lg:block font-medium" style="width: 30%">Name</div>
                                    <div class="grow">
                                        <div class="lg:float-right">{{profileDataComp.name}}</div>
                                    </div>
                                </div>
                                <div class="lg:flex border-b-2 border-slate-200 w-full pt-2" >
                                    <div class="hidden lg:block font-medium" style="width: 30%">Email</div>
                                    <div class="grow" >
                                        <div class="lg:float-right">{{profileDataComp.email}}</div>
                                    </div>
                                </div>
                                <div class="lg:flex border-b-2 border-slate-200 w-full pt-2" >
                                    <div class="hidden lg:block font-medium" style="width: 30%">Department</div>
                                    <div class="grow" >
                                        <div class="lg:float-right">{{profileDataComp.department}}</div>
                                    </div>
                                </div>
                                <div class="lg:flex border-b-2 border-slate-200 w-full pt-2" >
                                    <div class="hidden lg:block font-medium" style="width: 30%">Position</div>
                                    <div class="grow" >
                                        <div class="lg:float-right">{{profileDataComp.role}}</div>
                                    </div>
                                </div>
                                <div class="lg:flex border-b-2 border-slate-200 w-full pt-2" >
                                    <div class="hidden lg:block font-medium" style="width: 30%">Report to</div>
                                    <div class="grow" >
                                        <div class="lg:float-right">{{profileDataComp.reportTo}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full" style="height: 53%;">
                <div class="flex justify-center w-full h-full">
                    <div class="rounded-2xl" style="height: 98%; width: 99%; padding: 2px; box-shadow: 0 0 20px  #d8d8f1;">
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../../scripts/role/employeeList.ts"></script>