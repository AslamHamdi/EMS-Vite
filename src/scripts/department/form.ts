import axios from "axios"

export default {
    mounted(){
        let formStat = this.checkFormStatus
    },
    props: {
        employeeList: Array,
    },
    data(){
        return {
            deptForm: {
                model: {
                    deptName: "",
                    deptId: "",
                    deptLeader: "",
                    officeAddress: "",
                    deptDesc: "",
                    profilePicture: "",
                    createdDate: new Date(),
                    lastEditedDate: new Date()
                },
                rules: {

                }
            },
            idd: 0,
            formStatus: 0,
        }
    },
    methods: {
        submitForm(){
            let type = this.formStatus == 1 ? 'update' : 'add'
            let form = new FormData()
            let dataToPost = {}
            dataToPost = this.deptForm.model

            form.append('data', JSON.stringify(dataToPost))
            form.append('image', this.$parent.$parent.$parent.imageUploaded)
            form.append('type', type)
            form.append('idd', this.idd)

            try {
                this.$parent.$parent.$parent.$refs.loaderComp.show()
                axios.post('/api/v1/addOrEditDepartment', form, {
                    headers: {
                        'accept': 'application/json',
                        'Accept-Language': 'en-US,en;q=0.8',
                        'Content-Type': `multipart/form-data`,
                    }
                }).then(resp => {
                    this.__showSuccessToast("Department succesfully saved")
                }).catch(error => {
                    this.__showDangerToast("Some error occured during saving the department details")
                    console.error(new Error('axios catch error: ', error))
                })
                setTimeout(() => {
                    this.$parent.$parent.$parent.$refs.loaderComp.hide()
                }, 800)
            } catch (error) {
                this.__showDangerToast("Some error occured during saving the department details")
                console.error("try catch error: ", error)
            }
            this.$parent.$parent.$parent.imageUploaded = 'assets/developer.jpg' 
            this.clearForm()
            setTimeout(() => {
                this.$emit('getDataFromServer')
            }, 500)
        },
        createNewDepartment(){
            Object.assign(this.$data, this.$options.data.apply(this))
            this.formStatus = 2
            this.__showInfoToast("Please fill in the form provided")
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
        },
    },
    watch: {
        checkFormStatus:{
            handler: function(newVal, oldVal) {
                let els = document.getElementsByClassName('inputStatus')
                if(newVal == 1 || newVal == 2){
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
        deptForm:{
            handler: function(newData, oldData) {
                this.$parent.$parent.$parent.childFormData = newData.model
                this.$parent.$parent.$parent.childFormData.idd = this.idd
            },
            deep: true
        }
    }
}