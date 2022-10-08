<template>
    <form class="space-y-4 lg:space-y-0 space-x-0 lg:space-x-6 w-full h-max block lg:flex" style="">
        <!-- Form 1 -->
        <div class="w-full">
            <h3 class="mb-8 font-semibold">Role Information</h3>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 lg:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        ROLE NAME
                    </label>
                    <input
                        class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white cursor-not-allowed"
                        disabled
                        type="text" placeholder="Jane" v-model="roleForm.model.roleName">
                    <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                </div>
                <div class="w-full md:w-1/2 lg:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        ROLE ID
                    </label>
                    <input
                        class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white cursor-not-allowed"
                        disabled
                        type="text" placeholder="Doe" v-model="roleForm.model.roleId">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-8">
                <div class="w-full md:w-1/2 lg:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        DEPARTMENT
                    </label>
                    <div class="relative">
                        <select v-model="roleForm.model.inDepartment"
                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 cursor-not-allowed"
                            disabled>
                            <option value="" disabled selected>Select your option</option>
                            <option>Software</option>
                            <option>Management</option>
                            <option>Sales</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        LEADER
                    </label>
                    <div class="relative">
                        <select v-model="roleForm.model.roleLeader"
                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 cursor-not-allowed"
                            disabled>
                            <option value="" disabled selected>Select your option</option>
                            <option>Aslam</option>
                            <option>Hamdi</option>
                            <option>Amran</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        OFFICE ADDRESS
                    </label>
                    <input
                        class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white cursor-not-allowed"
                        disabled
                        id="grid-password" type="text" placeholder="A-17-09 Residensi Desa Satumas"
                        v-model="roleForm.model.officeAddress">
                    <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        DESCRIPTION
                    </label>
                    <textarea
                        class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 cursor-not-allowed"
                        disabled
                        rows="6"
                        placeholder="A Software Developer is a professional who is charged with designing and coding software for businesses and consumers alike. They work closely with clients to determine what they need, then use programming languages like Java or C++ to create programs. They must have critical thinking skills, as well as strong problem-solving abilities."
                        v-model="roleForm.model.roleDesc"></textarea>
                    <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
                </div>
            </div>
            <div class="">
                <button v-if="formStatus == 1" type="button" @click="submitForm()" class="float-right w-28 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Submit
                </button>
            </div>
        </div>
    </form>
</template>
<script src="../../scripts/role/form.ts"></script>