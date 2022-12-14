import { template } from "lodash"

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
     * @props {Array} buttons: List of buttons that will be displayed on dialog
     * name = button text, function = parent function to run, addOnClass = additional button class for color, hover, etc
     * @props {String} title: Action text on dialog
     * @props {String} text: Description text on dialog
     * @props {String} icon: icon on top of text
     */
    static __dialog = {
        props: {
            buttons: {
                type: Array,
                default: []
            },
            icon: "",
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
        <div class="info-dialog hidden cover absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" id="dialogModal" ref="dialogModal">
            <div class="bounce-enter-active shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
                <div class="w-full h-full text-center">
                    <div class="flex h-full flex-col justify-between">
                        <span v-html="icon"></span>
                        <p class="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                            <span v-html="title"></span>
                        </p>
                        <p class="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
                            <span v-html="text"></span>
                        </p>
                        <div class="flex items-center justify-between gap-4 w-full mt-8">
                            <button type="button" @click="toggleDialog()" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Cancel
                            </button>
                            <button v-for="button in buttons.slice(1)" type="button" @click="runParentFunction(button.function)" :class="button.addOnClass" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                {{button.name}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    static __loader = {
        props: {

        },
        mounted(){
            
        },
        methods: {
            show(){
                let el = this.$refs.loaderApp!
                el.classList.remove('hidden')
            },
            hide(){
                let el = this.$refs.loaderApp!
                el.classList.add('hidden')
            }
        },
        template: `
        <div ref="loaderApp" class="hidden cover absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="p-4 w-64 m-auto">
                <div class="w-full h-full text-center flex">
                
                <div class="loadingio-spinner-ellipsis-4tvh5ho9z8g"><div class="ldio-8tfjwqrc4zu">
                <div></div><div></div><div></div><div></div><div></div>
                </div></div>
                    
                </div>
            </div>
        </div>
       
        `
    }
}