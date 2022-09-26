import axios from "axios"

export default {
    props: {
        formStatus: {
            type: Number,
            default: 0
        }
    },
    mounted(){
        console.log("MOUNTED FORM APP")
        this.getDataFromServer()
        console.log("FORM STATUS: ", this.formStatus)
    },
    data(){
        return {
            roleForm: {
                model: {
                    roleName: "",
                    roleId: "",
                    departmentLead: "Aslam",
                    officeAddress: "",
                    description: "",
                },
                rules: {

                }
            },
        }
    },
    methods: {
        async getDataFromServer(){
            try {
                let promise = await axios.get('https://api.publicapis.org/entries')
                if(promise.status){
                    console.log("RESPONSE: ", promise.data)
                }
            } catch (err) {
                console.error(err);
            }
        },
        openForm(){
            console.log("OPEN FORM")
        },
        submitForm(){
            let data = this.roleForm.model
            console.log("EMPLOYEE FORM: ", data) 
        }
    },
    computed: {
        checkFormStatus() {test

        }
    },
    watch: {
        formStatus:{
            handler: function(newVal, oldVal) {
                console.log("FORM STATUS WATCH: ", newVal)
                let els = document.getElementsByClassName('inputStatus')
                if(newVal == 1){
                    Array.prototype.forEach.call(els, function(el) {
                        el.classList.remove('cursor-not-allowed')
                        el.disabled = false;
                    });
                }
            },
            immediate: true
        } 
    }
}