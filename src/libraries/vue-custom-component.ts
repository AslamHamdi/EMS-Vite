export default class VueCustomComponent{
    static __tableFunction = {
        props: {

        },
        data() {
            return {

            }
        }
    }
    /**
     * @props {Array} buttons List of buttons that will be displayed on dialog
     * @props {String} title Action text on dialog
     * @props {String} text Description text on dialog
     */
    static __dialog = {
        props: {
            buttons: {
                type: Array,
                default: []
            },
            title: {
                type: String,
                default: "This is dialog action text"
            },
            text: {
                type: String,
                default: "This is dialog description text"
            },
        },
        mounted(){
            console.log("MOUNTED DIALOG COMP")
            console.log("BUTTONS: ", this.buttons)
        },
        methods: {
            runParentFunction(func){
                this.$emit(func);
            },
            toggleDialog(){
                let el = this.$refs.dialogModal!
                el.classList.toggle('hidden')
            },
        },
        template: `
        <div class="hidden cover absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" id="dialogModal" ref="dialogModal">
            <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
                <div class="w-full h-full text-center">
                    <div class="flex h-full flex-col justify-between">
                        <svg width="40" height="40" class="mt-4 w-12 h-12 m-auto text-indigo-500" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z">
                            </path>
                        </svg>
                        <p class="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                            {{title}}
                        </p>
                        <p class="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
                            {{text}}
                        </p>
                        <div class="flex items-center justify-between gap-4 w-full mt-8">
                            <button type="button" @click="toggleDialog()" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Cancel
                            </button>
                            <button v-for="button in buttons" type="button" @click="runParentFunction(button.function)" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                {{button.name}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}