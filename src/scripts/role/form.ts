import axios from "axios"
import * as __customFunction from '../../libraries/custom-function';

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
                    inDepartment: "",
                    roleLeader: "",
                    officeAddress: "",
                    companyId: "",
                    roleDesc: "",
                    createdDate: '01-02-2022',
                    lastEditedDate: '01-02-2022',
                    createdByUserId: "",
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
        createNewRole(){
            Object.assign(this.$data, this.$options.data.apply(this))
            this.formStatus = 1
        },
        openForm(){
            this.formStatus = 1
            console.log("OPEN FORM")
        },
        submitForm(){
            let form = new FormData()

            let dataToPost = {}
            dataToPost = this.roleForm.model

            form.append('data', JSON.stringify(dataToPost))
            form.append('image', this.$parent.$parent.imageUploaded )

            try {
                axios.post('/api/v1/addOrEditRole', form, {
                    headers: {
                        'accept': 'application/json',
                        'Accept-Language': 'en-US,en;q=0.8',
                        'Content-Type': `multipart/form-data`,
                    }
                }).then(resp => {
                    __customFunction.showDefaultToast("Role succesfully saved into company's database")
                }).catch(error => {
                    __customFunction.showDefaultToast("Some error occured during saving the role details. Please try again or contact developer")
                    console.error(new Error('axios catch error: ', error))
                    
                })
            } catch (error) {
                __customFunction.showDefaultToast("Some error occured during saving the role details. Please try again or contact developer")
                console.error("try catch error: ", error)
            }
            console.log("ROLE FORM: ", form) 
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
                this.$emit('passFormStatus', newVal)
            },
            immediate: true
        } 
    }
}