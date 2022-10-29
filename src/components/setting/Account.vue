<template>
    <div class="overflow-auto" style="height: 94.5%; width: 100%;">
        <div class="flex">
            <div class="space-y-4 w-full">
                <div class="mt-10 ml-3">
                    <h1 class="text-2xl font-bold" style="width: 50%;">Profile</h1>
                    <span class="text-slate-400">This information will be displayed publicly</span>
                </div>
                <div class="space-y-2">
                    <div class="flex items center" style="width: 100%; height: 100%;">
                        <div class="">
                            <img ref="imageFrame" class="w-28 h-28 lg:w-28 lg:h-28 rounded-full object-cover" src="/assets/team-lead.jpg"
                            alt="Rounded avatar">
                        </div>
                        <div class="flex justify-center items-center space-x-4">
                            <button class="bg-white hover:bg-gray-100 w-20 flex items-center justify-center h-10 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                Change
                            </button>
                            <button class="text-gray-800 font-semibold ">
                                Remove
                            </button>
                        </div>
                    </div>
                    <input type="file" name="uploadImage" ref="uploadImageRef" id="uploadFile" hidden>
                    
                    <div class="w-full ">
                        <div class="flex flex-wrap mb-6">
                            <div class="w-full md:w-1/2 lg:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    First Name
                                </label>
                                <input
                                    class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="text" placeholder="Jane">
                            </div>
                            <div class="w-full md:w-1/2 lg:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Last Name
                                </label>
                                <input
                                    class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="text" placeholder="Doe">
                            </div>
                        </div>
                    </div>

                    <div class="w-full">
                        <div class="flex flex-wrap mb-6">
                            <div class="w-full md:w-1/2 lg:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Username
                                </label>
                                <input
                                    class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="text" placeholder="Jane">
                                    <p class="text-violet-900 text-xs italic">This will be used as credential for login</p>
                            </div>
                            <div class="w-full md:w-1/2 lg:w-1/2 px-3 flex items-center">
                                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                                <input type="checkbox" value="" id="default-toggle" class="sr-only peer">
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark mode</span>
                                </label>
                                <!-- <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    LEADER
                                </label>
                                <div class="relative">
                                    <select 
                                        class="inputStatus appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                        <option value="" disabled selected>Select your option</option>
                                        <option value="" disabled selected>Light </option>
                                        <option value="" disabled selected>Dark</option>
                                    </select>
                                    <div
                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div> -->
                            </div>
                            <div class="w-full mt-5 mr-5">
                                <button  type="button" class="float-right w-28 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>