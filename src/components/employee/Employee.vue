<template>
    <div class="space-y-4 flex" style="height: 96.9%;">
        <div class="border-r-2 border-slate-200 space-y-4" style="width: 20%; height: 100%;">
            <div class="lg:flex sm:flex-wrap" style="">
                <h1 class="text-2xl font-bold" style="width: 50%;">Employee</h1>
                <div class="" style="width: 30%;">
                </div>
                <div class="" style="width: 20%;">
                    <button @click="createNewEmployee()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
                        style="height: 35px; background-color: #6A67CE; box-shadow: -4px 4px  #4a488b;">
                        <i class="fa-solid fa-user-plus"></i>
                    </button>
                </div>
            </div>
            <div class="relative mb-2" style="width: 97%; height: 5%;">
                <input type="text" id="voice-search" v-model="searchText"
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
                <div v-for="(o, i) in employeeList" ref="employeeDiv" :key="i" class="employee-list cursor-pointer" @click="getEmployeeById(o.employeeId)" style="height: 85px; margin-right: 4px;">
                    <div class="flex space-x-1" style="height: 100%; width: 100%;">
                        <div class="flex items-center justify-center" style="width: 20%;">
                            <img class="w-5 h-5 lg:w-10 lg:h-10 rounded-full object-cover" :src="[o.profilePicture ? 'company_files/' + o.profilePicture : 'assets/face.jpg']"
                                alt="Rounded avatar">
                        </div>
                        <div class="" style="width: 60%;">
                            <div class="" style="height: 30%;">
                                <div class="employee-name font-bold label-heading ellipsiphy " style="max-width: 200px;">
                                    {{o.fName + ' ' + o.lName}}
                                </div>
                            </div>
                            <div class="" style="height: 70%;">
                                <div class="flex items-end" style="height: 50%;">
                                    <div class="employee-role text-slate-500 text-sm ellipsiphy " style="max-width: 100px;">
                                        {{o.roleName}}
                                    </div>
                                </div>
                                <div class="" style="height: 50%;">
                                    <div class="employee-email text-slate-500 text-sm ellipsiphy " style="max-width: 200px;">
                                        {{o.emailAddress}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="" style="width: 20%;">
                            <div class="float-right pr-3" style="height: 30%;">
                                <div class="text-slate-500 text-xl" style="max-width: 100px;">
                                    <span v-if="i%3 == 0" class="" style="color: green;">●</span>
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
                <div @click="openUploadDialog()"  class="mr-4 lg:mr-0" style="width: 15%;">
                    <div :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed']" class="flex items-center justify-center cursor-pointer" style="width: 100%; height: 100%;">
                        <img ref="imageFrame" id="imageFrame" class="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover" :src="[this.dpChange ?  this.dpChange : 'assets/face2.jpg']"
                            alt="Rounded avatar">
                        <div
                            class="group flex items-center justify-center absolute w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover">
                            <div :class="[formStatus === 1 || formStatus === 2? '' : 'hidden']" class="rounded-full object-cover absolute group-hover:bg-slate-500 group-hover:opacity-20"
                                style="width: 100%; height: 100%;">
                            </div>
                            <div :class="[formStatus === 1 || formStatus === 2? '' : 'hidden']"  class="rounded-full object-cover" style="width: 100%; height: 100%;">
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
                <input :disabled="formStatus === 1 || formStatus === 2? null : true" type="file" name="uploadImage" ref="uploadImageRef" @change="onChangeFileInput()" id="uploadFile" hidden>
                <div class="w-full flex items-center" style="">
                    <div class="w-full">
                        <div class="font-bold label-heading flex-grow">
                            <span class="">{{this.userForm.model.fName ? `${this.userForm.model.fName} ${this.userForm.model.lName}` : 'John Doe'}}</span>
                            <div v-if="idd != 0" class="float-right space-x-2">
                                <span @click="openEditEmployeeDialog()"><i class="fa-solid fa-pen-to-square cursor-pointer"></i></span>
                                <span @click="openDeleteEmployeeDialog()"><i class="fa-solid fa-trash cursor-pointer"></i></span>
                            </div>
                        </div>
                        <div class="text-slate-500 text-sm">
                            {{this.companyForm.model.position ? `${roleList.find(o => o.id === this.companyForm.model.position).roleName}` : 'Software Developer'}}
                        </div>
                        <div class="text-slate-500 text-sm" style="max-width: 100px;">
                            <span class="" style="color: green;">●</span> Active
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-auto" style="height: 81%;">
                <!-- Form tab -->
                <div class="flex mb-8" style="margin-left: 1.5rem; margin-right: 1.5rem; height: 10%">
                    <div class="flex flex-grow space-x-2 cursor-pointer" ref="personalFormButton" @click="selectForm(1)">
                        <div class="flex items-center justify-center" style="width: 20%; height: 100%;">
                            <div class="w-8 h-8 lg:w-12 lg:h-12 rounded-full object-cover flex justify-center items-center" :class="[whichForm == 1 ? 'bg-indigo-500' : 'bg-gray-500']">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="h-3/5 w-3/5" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                    <g>
                                        <circle cx="256" cy="128" r="128"/>
                                        <path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="flex-grow flex items-center">
                            <div>
                                <p class="text-md lg:text-lg font-semibold lg:font-bold" :class="[whichForm == 1 ? 'text-indigo-500' : 'text-gray-500']">Personal Information</p>
                                <p class="hidden lg:block text-sm lg:text-md" :class="[whichForm == 1 ? 'text-indigo-500' : 'text-gray-500']">Personal Information</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-grow space-x-2 cursor-pointer" ref="personalFormButton" @click="selectForm(2)">
                        <div class="flex items-center justify-center" style="width: 20%; height: 100%;">
                            <div class="w-8 h-8 lg:w-12 lg:h-12 rounded-full object-cover flex justify-center items-center" :class="[whichForm == 2 ? 'bg-indigo-500' : 'bg-gray-500']">
                                <svg id="Layer_1" height="512" viewBox="0 0 24 24" fill="white" class="h-3/5 w-3/5" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                                    <path d="m4 13h3v2h-3zm5 2h3v-2h-3zm-5 4h3v-2h-3zm5 0h3v-2h-3zm-5-12h3v-2h-3zm5 0h3v-2h-3zm-5 4h3v-2h-3zm5 0h3v-2h-3zm15-3v16h-24v-21a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2h5a3 3 0 0 1 3 3zm-10-5a1 1 0 0 0 -1-1h-10a1 1 0 0 0 -1 1v19h12zm8 5a1 1 0 0 0 -1-1h-5v15h6zm-4 7h2v-2h-2zm0 4h2v-2h-2zm0-8h2v-2h-2z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="flex-grow flex items-center">
                            <div>
                                <p class="text-md lg:text-lg font-semibold lg:font-bold" :class="[whichForm == 2 ? 'text-indigo-500' : 'text-gray-500']">Company Information</p>
                                <p class="hidden lg:block text-sm lg:text-md" :class="[whichForm == 2 ? 'text-indigo-500' : 'text-gray-500']">Company Information</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-grow space-x-2 cursor-pointer" ref="personalFormButton" @click="selectForm(3)">
                        <div class="flex items-center justify-center" style="width: 20%; height: 100%;">
                            <div class="w-8 h-8 lg:w-12 lg:h-12 rounded-full object-cover flex justify-center items-center" :class="[whichForm == 3 ? 'bg-indigo-500' : 'bg-gray-500']">
                                <svg id="Layer_1" viewBox="0 0 24 24" fill="white" class="h-3/5 w-3/5" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                                    <path d="m19.828 3.414-2.242-2.242a3.975 3.975 0 0 0 -2.829-1.172h-8.757a3 3 0 0 0 -3 3v21h18v-17.758a4.022 4.022 0 0 0 -1.172-2.828zm-1.414 1.414a1.923 1.923 0 0 1 .141.172h-2.555v-2.555a1.923 1.923 0 0 1 .172.141zm-13.414 17.172v-19a1 1 0 0 1 1-1h8v5h5v15zm2-6h10v-6h-10zm2-4h6v2h-6zm-2 6h10v2h-10z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="flex-grow flex items-center">
                            <div>
                                <p class="text-md lg:text-lg font-semibold lg:font-bold" :class="[whichForm == 3 ? 'text-indigo-500' : 'text-gray-500']">Emergency Information</p>
                                <p class="hidden lg:block text-sm lg:text-md" :class="[whichForm == 3 ? 'text-indigo-500' : 'text-gray-500']">Emergency Information</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="" style="margin-left: 1.5rem; margin-right: 1.5rem; height: 85%;">
                    <form class="space-y-4 lg:space-y-0 space-x-0 lg:space-x-6 w-full h-max block" style="width: 100%;">
                        <!-- Form 1 -->
                        <Transition name="bounce" mode="out-in">
                            <div class="w-full" v-if="whichForm == 1">
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            First Name
                                        </label>
                                        <input
                                            ref="formInput"
                                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                            :disabled="formStatus === 1 || formStatus === 2? null : true"
                                            v-model="userForm.model.fName"
                                            type="text" placeholder="Jane">
                                        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                                    </div>
                                    <div class="w-full md:w-1/3 px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                            :disabled="formStatus === 1 || formStatus === 2? null : true"
                                            v-model="userForm.model.lName"
                                            type="text" placeholder="Doe">
                                    </div>
                                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            DATE OF BIRTH
                                        </label>
                                        <input
                                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                            :disabled="formStatus === 1 || formStatus === 2? null : true"
                                            v-model="userForm.model.dateOfBirth"
                                            type="date" placeholder="dd-mmm-yyyy">
                                        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                                    </div>

                                </div>
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            GENDER
                                        </label>
                                        <div class="relative">
                                            <select
                                                v-model="userForm.model.gender"
                                                :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                                :disabled="formStatus === 1 || formStatus === 2? null : true"
                                                class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                                <option value="" disabled selected>Select your option</option>
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
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            IC NUMBER
                                        </label>
                                        <input
                                            class="inputStatus aappearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                            :disabled="formStatus === 1 || formStatus === 2? null : true"
                                            v-model="userForm.model.icNum"
                                            type="text" placeholder="123456-78-9001">
                                        <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
                                    </div>
                                </div>
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-2/3 px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            ADDRESS
                                        </label>
                                        <input
                                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                            :disabled="formStatus === 1 || formStatus === 2? null : true"
                                            v-model="userForm.model.address"
                                            type="text" placeholder="A-17-09 Residensi Desa Satumas">
                                        <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
                                    </div>
                                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            COUNTRY
                                        </label>
                                        <div class="relative">
                                            <select @change="testo()"
                                                :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                                :disabled="formStatus === 1 || formStatus === 2? null : true"   
                                                v-model="userForm.model.country"
                                                class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                                <option value="" disabled selected>Select your option</option>
                                                <option v-for="(o, i) in countryList" :key="i">{{o.name}}</option>
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
                                <div class="flex flex-wrap -mx-3 mb-8">
                                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            State
                                        </label>
                                        <div class="relative">
                                            <select
                                                :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                                :disabled="formStatus === 1 || formStatus === 2? null : true"   
                                                v-model="userForm.model.state"
                                                class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                                <option value="" disabled selected>Select your option</option>
                                                <option v-for="(o, i) in stateList" :key="i">{{o.name}}</option>
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
                                            City
                                        </label>
                                        <input
                                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                            :disabled="formStatus === 1 || formStatus === 2? null : true"
                                            v-model="userForm.model.city"
                                            type="text" placeholder="Albuquerque">
                                    </div>
                                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Zip
                                        </label>
                                        <input
                                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                            :disabled="formStatus === 1 || formStatus === 2? null : true"
                                            v-model="userForm.model.zip"
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
                                                :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                                :disabled="formStatus === 1 || formStatus === 2? null : true"
                                                v-model="userForm.model.maritalStatus"    
                                                class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                                <option value="" disabled selected>Select your option</option>
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
                                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                            :disabled="formStatus === 1 || formStatus === 2? null : true"
                                            v-model="userForm.model.phoneNum"
                                            type="text" placeholder="011-2345678">
                                    </div>
                                </div>
                            </div>

                        <!-- Form 2 -->
                            <div class="w-full" v-else-if="whichForm == 2">
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3 md:w-1/2">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            EMAIL ADDRESS
                                        </label>
                                        <input
                                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                            :disabled="formStatus === 1 || formStatus === 2? null : true"
                                            v-model="companyForm.model.emailAddress"
                                            type="email" placeholder="jane.doe@gmail.com">
                                        <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
                                    </div>
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            REPORT TO
                                        </label>
                                        <div class="relative">
                                            <select @change="testo($event)"
                                                :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                                :disabled="formStatus === 1 || formStatus === 2? null : true"
                                                v-model="companyForm.model.reportTo"    
                                                class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                                <option value="" disabled selected>Select your option</option>
                                                <option v-for="(o, i) in employeeList" :key="i" :value="o.employeeId">{{o.fName + ' ' + o.lName}}</option>
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
                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            EMPLOYEE ID
                                        </label>
                                        <input
                                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                            :disabled="formStatus === 1 || formStatus === 2? null : true"
                                            v-model="companyForm.model.employeeId"
                                            type="text" placeholder="SFD0020058">
                                        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                                    </div>
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            DATE REGISTERED
                                        </label>
                                        <input
                                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                            :disabled="formStatus === 1 || formStatus === 2? null : true"
                                            v-model="companyForm.model.dateReg"
                                            type="date" placeholder="dd-mmmm-yyyy">
                                    </div>
                                </div>
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            DEPARTMENT
                                        </label>
                                        <div class="relative">
                                            <select @change="testo($event)"
                                                :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                                :disabled="formStatus === 1 || formStatus === 2? null : true"
                                                v-model="companyForm.model.department"    
                                                class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                                <option value="" disabled selected>Select your option</option>
                                                <option v-for="(o, i) in departmentList" :key="i" :value="o.id">{{o.departmentName}}</option>
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
                                            ROLE/POSITION
                                        </label>
                                        <div class="relative">
                                            <select
                                                :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                                :disabled="formStatus === 1 || formStatus === 2? null : true"
                                                v-model="companyForm.model.position"    
                                                class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                                <option value="" disabled selected>Select your option</option>
                                                <option v-for="(o, i) in roleList" :key="i" :value="o.id">{{o.roleName}}</option>
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
                                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                            :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                            :disabled="formStatus === 1 || formStatus === 2? null : true"
                                            v-model="companyForm.model.password"
                                            type="password" placeholder="******************">
                                        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                                    </div>
                                </div>
                            </div>

                        <!-- Form 3 -->
                            <div class="w-full" v-else-if="whichForm == 3">
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            NAME
                                        </label>
                                        <input
                                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                            :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                            :disabled="formStatus === 1 || formStatus === 2? null : true"
                                            v-model="emergencyForm.model.name"
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
                                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                            :disabled="formStatus === 1 || formStatus === 2? null : true"
                                            v-model="emergencyForm.model.relationship"
                                            type="text" placeholder="Father">
                                        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                                    </div>
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            PHONE NUMBER
                                        </label>
                                        <input
                                            class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            :class="[formStatus === 1 || formStatus === 2? '' : 'cursor-not-allowed'] "
                                            :disabled="formStatus === 1 || formStatus === 2? null : true"
                                            v-model="emergencyForm.model.phoneNum"
                                            type="text" placeholder="011-2345678">
                                    </div>
                                </div>
                                <div class="">
                                    <button v-if="formStatus == 1 || formStatus == 2" type="button" @click="submitForm()" class="float-right w-28 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </Transition>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    <dialog-app ref="dialogModalComp" @confirmEditEmployee="confirmEditEmployee" @confirmDeleteEmployee="confirmDeleteEmployee" 
    :buttons="dialogNow" :icon="dialogNow[0].icon" :title="dialogNow[0].title" :text="dialogNow[0].text"></dialog-app>
    <loader-app ref="loaderComp"></loader-app>
</template>
<script src="../../scripts/employee/employee.ts"></script>