import axios from 'axios'

export default {
    mounted(){
        this.onInitialLoadPage();
    },
    data() {
        return{
            employeeList: [],
            userForm: {
                model: {
                    fName: "",
                    lName: "",
                    dateOfBirth: "",
                    gender: "",
                    icNum: "",
                    address: "",
                    country: "",
                    state: "",
                    city: "",
                    zip: "",
                    maritalStatus: "",
                    phoneNum: "",
                    profilePicture: "",
                }
            },
            companyForm: {
                model: {
                    emailAddress: "",
                    employeeId: "",
                    dateReg: "",
                    department: "",
                    position: "",
                    password: "",
                }
            },
            emergencyForm: {
                model: {
                    name: "",
                    relationship: "",
                    phoneNum: ""
                }
            },
            editDialogButtonList: [
                {icon: `
                <svg fill="white" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="mt-4 w-12 h-12 m-auto text-indigo-500" xmlns="http://www.w3.org/2000/svg" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>`, 
                title: "Edit staff", text: `Are you sure you want to edit this staff?`},
                {name: 'Confirm', function: 'openForm', addOnClass: `bg-sky-500 hover:bg-sky-700`},
            ],
            deleteDialogButtonList: [
                {icon: `
                <svg width="40" height="40" class="mt-4 w-12 h-12 m-auto text-indigo-500" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z">
                    </path>
                </svg>`, 
                title: "Delete staff", 
                text: `Are you sure you want to delete this staff? <br><br>
                        <b>This action cannot be undone</b>`},
                {name: 'Confirm', function: 'confirmDeleteEmployee', addOnClass: `bg-red-400 hover:bg-red-700`},
            ],
            whichForm: 1,
            whichDialog: "",
            formStatus: 0, //to keep track whether to add new employee or edit existing employee
            dpChange: "",
        }
    },
    methods: {
        onInitialLoadPage(){
            this.dpChange = this.$refs.imageFrame.src
        },
        getDataFromServer(){

        },
        onSelectEmployee(employeeId: any){

        },
        createNewEmployee(){
            Object.assign(this.$data, this.$options.data.apply(this))
            this.formStatus = 1
        },
        openEditEmployeeDialog(){
            this.whichDialog = 'edit'
            this.$refs.dialogModalComp.toggleDialog()
        },
        openForm(){
            this.formStatus = 1
            this.$refs.dialogModalComp.toggleDialog()
        },
        openDeleteEmployeeDialog(){
            this.whichDialog = 'delete'
            this.$refs.dialogModalComp.toggleDialog()
        },
        confirmDeleteEmployee(employeeId: any){
            this.$refs.dialogModalComp.toggleDialog()
        },
        selectForm(form: Number){
            this.whichForm = form
        },
        dataMakerBeforeSubmit(){
            let data = {}
            data = {
                ...data, 
                userForm: this.userForm.model, 
                companyForm: this.companyForm.model, 
                emergencyForm: this.emergencyForm.model 
            }
            return data
        },
        openUploadDialog(){
            document.getElementById("uploadFile")!.click()
        },
        onChangeFileInput(){
            this.dpChange = this.$refs.uploadImageRef.files[0]
        },
        submitForm(){
            let form = new FormData()

            let dataToPost = {}
            dataToPost = this.dataMakerBeforeSubmit()

            let uploadImage = this.$refs.uploadImageRef.files[0]
            
            form.append('data', JSON.stringify(dataToPost))
            form.append('image', uploadImage )
            try {
                axios.post('/api/v1/addOrEditEmployee', form, {
                    headers: {
                        'accept': 'application/json',
                        'Accept-Language': 'en-US,en;q=0.8',
                        'Content-Type': `multipart/form-data`,
                    }
                }).then(resp => {
                    console.log("SUCCESS")
                }).catch(error => [
                    console.error("ERROR AXIOS: ", error)
                ])
            } catch (error) {
                console.error("ERROR AXIOS CATCH: ", error)
            }
        }
    },
    computed: {
        componentNow(){
            let component = ""
            if(this.tabSelected == 'form'){
                 component = "form-app"
                 this.tabClass = [{iconColor: "text-slate-100"},{iconColor: "text-black"}],
                 this.tabStyle = [{color: '#6A67CE'}, {}]
            }else{
                component = "employee-list-app"
                this.tabClass = [{iconColor: "text-black"},{iconColor: "text-slate-100"}],
                this.tabStyle = [{}, {color: '#6A67CE'}]
            }
            return component
        },
        dialogNow(){
            let data = this.editDialogButtonList
            if(this.whichDialog == 'delete'){
                data = this.deleteDialogButtonList
            }
            return data
        }
    },
    watch: {
        dpChange(newDp, oldDp){
            console.log("SONO")
            console.log("NEW: ", newDp)
            console.log("OLD: ", oldDp)
            if(newDp != "" && newDp != oldDp){
                console.log("SINI")
                if(newDp.type){
                    console.log("SANA")
                    let uploadImage = newDp
                    let FR = new FileReader
                    FR.readAsDataURL(uploadImage);
                    let imageRef = this.$refs.imageFrame
                    FR.addEventListener("load", function(evt) {
                        console.log("EVT: ", evt.target!.result!)
                        imageRef.src = evt.target!.result!;
                    }); 
                }
            }
        }
    }
}