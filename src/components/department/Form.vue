<template>
        <form class="space-y-4 lg:space-y-0 space-x-0 lg:space-x-6 w-full h-max block lg:flex" style="width: 100%;">
        <!-- Form 1 -->
        <div class="w-full">
            <h3 class="mb-8 font-semibold">Department Information</h3>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 lg:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        DEPARTMENT NAME
                    </label>
                    <input
                        class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white cursor-not-allowed"
                        v-model="deptForm.model.deptName"
                        disabled
                        type="text" placeholder="Jane">
                    <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                </div>
                <div class="w-full md:w-1/2 lg:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        DEPARTMENT ID
                    </label>
                    <input
                        class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white cursor-not-allowed"
                        v-model="deptForm.model.deptId"
                        disabled
                        type="text" placeholder="Doe">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-8">
                <div class="w-full md:w-1/2 lg:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        UPPER DEPARTMENT
                    </label>
                    <div class="relative">
                        <select v-model="deptForm.model.upperDept"
                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 cursor-not-allowed"
                            disabled>
                            <option value="" disabled selected>Select your option</option>
                            <option v-for="(o, i) in departmentList" :key="i" :value="o.id">{{o.departmentName}}</option>
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
                        DEPARTMENT LEAD
                    </label>
                    <div class="relative">
                        <select v-model="deptForm.model.deptLeader"
                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 cursor-not-allowed"
                            disabled>
                            <option value="" disabled selected>Select your option</option>
                            <option v-for="(o, i) in employeeList" :key="i" :value="o.employeeId">{{o.fName + ' ' + o.lName}}</option>
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
                        v-model="deptForm.model.officeAddress"
                        disabled
                        id="grid-password" type="text" placeholder="A-17-09 Residensi Desa Satumas">
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
                        v-model="deptForm.model.deptDesc"
                        disabled
                        rows="6"
                        placeholder="A Software Developer is a professional who is charged with designing and coding software for businesses and consumers alike. They work closely with clients to determine what they need, then use programming languages like Java or C++ to create programs. They must have critical thinking skills, as well as strong problem-solving abilities."></textarea>
                    <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
                </div>
            </div>
            <div class="">
                <button v-if="formStatus == 1 || formStatus == 2" type="button" @click="submitForm()" class="float-right w-28 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Submit
                </button>
            </div>
        </div>
    </form>
</template>

<script src="../../scripts/department/form.ts"></script>