import axios from "axios"

function initialState(){
    return{
        roleForm: {
            model: {
                roleName: "",
                roleId: "",
                inDepartment: "",
                roleLeader: "",
                officeAddress: "",
                roleDesc: "",
                createdDate: new Date(),
                lastEditedDate: new Date(),
                profilePicture: "",
            },
            rules: {

            }
        },
        idd: 0,
    }
}

export default {
    mounted(){
        let formStat = this.checkFormStatus
        Object.assign(this.$data, initialState())
    },
    props: {
        employeeList: Array,
        departmentList: Array,
        childFormData: Object,
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
                    roleDesc: "",
                    createdDate: new Date(),
                    lastEditedDate: new Date(),
                    profilePicture: "",
                },
                rules: {

                }
            },
            idd: 0,
            formStatus: 0
        }
    },
    methods: {
        submitForm(){
            let type = this.formStatus == 1 ? 'update' : 'add'
            let form = new FormData()
            let dataToPost = {}
            dataToPost = this.roleForm.model

            console.log("SUBMITTED: ", dataToPost)

            form.append('data', JSON.stringify(dataToPost))
            form.append('image', this.$parent.$parent.$parent.imageUploaded )
            form.append('type', type)
            form.append('idd', this.idd)

            try {
                axios.post('/api/v1/addOrEditRole', form, {
                    headers: {
                        'accept': 'application/json',
                        'Accept-Language': 'en-US,en;q=0.8',
                        'Content-Type': `multipart/form-data`,
                    }
                }).then(resp => {
                    this.__showSuccessToast("Role succesfully save")
                }).catch(error => {
                    this.__showDangerToast("Some error occured during saving the role details. Please try again or contact developer")
                    console.error(new Error('axios catch error: ', error))
                    
                })
            } catch (error) {
                this.__showDangerToast("Some error occured during saving the role details. Please try again or contact developer")
                console.error("try catch error: ", error)
            }
            this.$parent.$parent.$parent.imageUploaded = '/assets/team-lead.jpg' 
            this.clearForm()
            setTimeout(() => {
                this.$emit('getDataFromServer')
            }, 500)
            console.log("ROLE FORM: ", form) 
        },
        createNewRole(){
            Object.assign(this.$data, this.$options.data.apply(this))
            this.formStatus = 2
            this.__showInfoToast("Please fill in the form provided")
            console.log("EMP LIST: ", this.employeeList)
        },
        openForm(){
            this.formStatus = 1
        },
        clearForm(){
            Object.assign(this.$data, this.$options.data.apply(this))
            this.formStatus = 2
        }

    },
    computed: {
        checkFormStatus() {
            let data = this.formStatus
            return data
        }
    },
    watch: {
        checkFormStatus:{
            handler: function(newVal, oldVal) {
                console.log("FORM STATUS WATCH: ", newVal)
                let els = document.getElementsByClassName('inputStatus')
                if(newVal == 1 || newVal == 2){
                    console.log("NEWVAL 1")
                    Array.prototype.forEach.call(els, function(el) {
                        el.classList.remove('cursor-not-allowed')
                        el.disabled = false;
                    });
                }else{
                    Array.prototype.forEach.call(els, function(el) {
                        el.classList.add('cursor-not-allowed')
                        el.disabled = true;
                    });
                }
                this.$emit('passFormStatus', newVal)
            },
            immediate: true
        },
        childFormData:{
            handler: function(newData, oldData) {
                this.roleForm = newData.roleForm
                this.idd = newData.idd
                console.log("NEW DATA: ", newData)
                console.log("role from: ", this.idd)
            },
            deep: true
        } 
    }
}