import axios from "axios"

export default {
    props: {
        // formStatus: {
        //     type: Number,
        // }
    },
    mounted(){
        this.getDataFromServer()
        console.log("FORM STATUS: ", this.formStatus)
        let formStat = this.checkFormStatus
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
            formStatus: 0
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
            this.formStatus = 1
            console.log("OPEN FORM")
        },
        submitForm(){
            let data = this.roleForm.model
            console.log("ROLE FORM: ", data) 
        }
    },
    computed: {
        checkFormStatus() {
            let data = this.formStatus
            console.log("FORM STAT COMPUTED: ", data)
            return data
        }
    },
    watch: {
        checkFormStatus:{
            handler: function(newVal, oldVal) {
                console.log("FORM STATUS WATCH: ", newVal)
                let els = document.getElementsByClassName('inputStatus')
                if(newVal == 1){
                    console.log("NEWVAL 1")
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