<template>
    <div class="space-y-4 flex" style="height: 96.9%;">
        <div class="border-r-2 border-slate-200 space-y-4" style="width: 20%; height: 100%;">
            <div class="lg:flex sm:flex-wrap" style="">
                <h1 class="text-2xl font-bold" style="width: 50%;">Employee</h1>
                <div class="" style="width: 30%;">
                </div>
                <div class="" style="width: 20%;">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
                        style="height: 35px; background-color: #6A67CE; box-shadow: -4px 4px  #4a488b;">
                        <i class="fa-solid fa-user-plus"></i>
                    </button>
                </div>
            </div>
            <div class="relative mb-2" style="width: 97%; height: 5%;">
                <input type="text" id="voice-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                            <img class="w-5 h-5 lg:w-10 lg:h-10 rounded-full object-cover" src="/public/assets/face.jpg"
                                alt="Rounded avatar">
                        </div>
                        <div class="" style="width: 60%;">
                            <div class="" style="height: 30%;">
                                <div class="font-bold label-heading ellipsiphy " style="max-width: 200px;">Aslam Hamdi
                                </div>
                            </div>
                            <div class="" style="height: 70%;">
                                <div class="flex items-end" style="height: 50%;">
                                    <div class="text-slate-500 text-sm ellipsiphy " style="max-width: 100px;">Developer
                                    </div>
                                </div>
                                <div class="" style="height: 50%;">
                                    <div class="text-slate-500 text-sm ellipsiphy " style="max-width: 200px;">
                                        m.aslamhamdi@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="" style="width: 20%;">
                            <div class="float-right pr-3" style="height: 30%;">
                                <div class="text-slate-500 text-xl" style="max-width: 100px;">
                                    <span v-if="n%3 == 0" class="" style="color: green;">●</span>
                                    <span v-else class="" style="color: gray;">●</span>
                                </div>
                                <!-- <span class="font-bold label-heading hidden lg:block">Dec 02</span> -->
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
                        <img class="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover" src="/public/assets/face2.jpg"
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
                            <span class="">Aslam Hamdi</span>
                            <div class="float-right space-x-2">
                                <span><i class="fa-solid fa-pen-to-square cursor-pointer"></i></span>
                                <span><i class="fa-solid fa-trash cursor-pointer"></i></span>
                            </div>
                        </div>
                        <div class="text-slate-500 text-sm">
                            Developer
                        </div>
                        <div class="text-slate-500 text-sm" style="max-width: 100px;">
                            <span class="" style="color: green;">●</span> Active
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-auto" style="height: 81%;">
                <div class="" style="margin-left: 1.5rem; margin-right: 1.5rem; height: 100%;">
                    <form class="space-y-4 lg:space-y-0 space-x-0 lg:space-x-6 w-full h-max block lg:flex"
                        style="width: 100%;">
                        <!-- Form 1 -->
                        <div class="w-full lg:w-2/4">
                            <h3 class="mb-8 font-semibold">Personal Information</h3>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        First Name
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text" placeholder="Jane">
                                    <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text" placeholder="Doe">
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        DATE OF BIRTH
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text" placeholder="dd-mmm-yyyy">
                                    <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        SEX
                                    </label>
                                    <div class="relative">
                                        <select
                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                        <div
                                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path
                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        IC NUMBER
                                    </label>
                                    <input
                                        class="aappearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text" placeholder="123456-78-9001">
                                    <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        ADDRESS
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text" placeholder="A-17-09 Residensi Desa Satumas">
                                    <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-8">
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        City
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text" placeholder="Albuquerque">
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        State
                                    </label>
                                    <div class="relative">
                                        <select
                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                            <option>New Mexico</option>
                                            <option>Missouri</option>
                                            <option>Texas</option>
                                        </select>
                                        <div
                                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path
                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Zip
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text" placeholder="90210">
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        MARITAL STATUS
                                    </label>
                                    <div class="relative">
                                        <select
                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                            <option>Single</option>
                                            <option>Married</option>
                                        </select>
                                        <div
                                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path
                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Phone number
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text" placeholder="011-2345678">
                                </div>
                            </div>
                        </div>
                        <div class="border-2 border-slate-200"></div>
                        <!-- Form 2 -->
                        <div class="w-full lg:w-2/4">
                            <h3 class="mb-8 font-semibold">Company Information</h3>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        EMAIL ADDRESS
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="email" placeholder="jane.doe@gmail.com">
                                    <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        EMPLOYEE ID
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text" placeholder="SFD0020058">
                                    <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        DATE REGISTERED
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text" placeholder="dd-mmmm-yyyy">
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        DEPARTMENT
                                    </label>
                                    <div class="relative">
                                        <select
                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                            <option>Software</option>
                                            <option>Dev Ops</option>
                                            <option>Network</option>
                                            <option>Sales</option>
                                            <option>Marketing</option>
                                        </select>
                                        <div
                                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path
                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        POSITION
                                    </label>
                                    <div class="relative">
                                        <select
                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                            <option>Front end dev</option>
                                            <option>Back end dev</option>
                                            <option>Digital marketer</option>
                                            <option>Software tester</option>
                                        </select>
                                        <div
                                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path
                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-3">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Password
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                        type="password" placeholder="******************">
                                    <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                                </div>
                            </div>
                            <hr>
                            <h3 class="mb-4 mt-2 font-semibold">Emergency Contact</h3>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        NAME
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                        type="text" placeholder="Mark Smith">
                                    <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        RELATIONSHIP
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text" placeholder="Father">
                                    <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        PHONE NUMBER
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text" placeholder="011-2345678">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../../scripts/employee/employee.ts"></script>