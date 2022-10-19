import Form from "../../components/role/Form.vue"
import EmployeeList from "../../components/role/EmployeeList.vue"
import axios from "axios"
import moment from 'moment'

function initialState(){
    return{
        roleForm: {
            model: {
                roleName: "",
                roleId: "",
                inDepartment: "",
                roleLeader: 0,
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
        this.getDataFromServer()
        Object.assign(this.$data.childFormData, initialState())
    },
    data(){
        return{
            tabSelected: "form",
            tabClass: [{iconColor: "text-slate-100"},{iconColor: "text-black"}],
            tabStyle: [{color: '#6A67CE'}, {}],
            editDialogButtonList: [
                {icon: `
                <svg fill="white" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="mt-4 w-12 h-12 m-auto text-indigo-500" xmlns="http://www.w3.org/2000/svg" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>`, 
                title: "Edit role", text: `Are you sure you want to edit this role?`},
                {name: 'Confirm', function: 'confirmEditRole', addOnClass: `bg-sky-500 hover:bg-sky-700`},
            ],
            deleteDialogButtonList: [
                {icon: `
                <svg width="40" height="40" class="mt-4 w-12 h-12 m-auto text-indigo-500" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z">
                    </path>
                </svg>`, 
                title: "Delete role", 
                text: `Are you sure you want to delete this role? <br><br>
                        <b>Reminder:</b> <br>
                        This action cannot be undone`},
                {name: 'Confirm', function: 'confirmDeleteRole', addOnClass: `bg-red-400 hover:bg-red-700`},
            ],
            whichDialog: "",
            imageUploaded: "",
            roleList: [],
            employeeList: [], //use for leader dropdown list
            departmentList: [],
            childFormStatus: 0,
            childFormData: initialState(),
            searchText: "",
            roleEmployeeList: [] //use for table of employee in the role in employee-list component
        }
    },
    methods: {
        onTabSelect(data: any){
            this.tabSelected = data
        },
        refresh(){
            this.getDataFromServer()
        },
        getDataFromServer(){
            let dataToPost = {}
            let endpoints = [
                '/api/v1/getAllDepartment',
                '/api/v1/getAllEmployee',
                '/api/v1/getAllRole',
            ]

            try {
                this.$refs.loaderComp.show()
                Promise.all(endpoints.map((endpoint) => 
                    axios.get(endpoint, dataToPost))
                    ).then(resp => {
                        this.$nextTick(() => {
                            this.departmentList = resp[0].data.data
                            this.employeeList = resp[1].data.data
                            this.roleList = resp[2].data.data
                        })
                    }).catch((error) => {
                        this.__showDangerToast("Some error occured during saving the employee details. Please try again or contact developer")
                        console.error(error.message)
                    }
                );
                setTimeout(() => {
                    this.$refs.loaderComp.hide()
                }, 800)
            } catch (error) {
                this.__showDangerToast("Some error occured during saving the employee details. Please try again or contact developer")
                console.error(error)
            }
        },
        getRoleById(roleId: Number){
            this.$refs.childComp.formStatus = 0
            let dataToPost = {
                data: roleId,
            }
            let endpoints = [
                '/api/v1/getRoleById',
                '/api/v1/getEmployeesByRole'
            ]

            try {
                this.$refs.loaderComp.show()
                Promise.all(endpoints.map((endpoint) => 
                    axios.get(endpoint, {params: {data: roleId,} }))
                    ).then(resp => {
                        let data1 = resp[0].data.data
                        let data2 = resp[1].data.data

                        this.childFormData.roleForm = data1.roleForm
                        this.childFormData.idd = data1.idd
                        this.imageUploaded = data1.roleForm.model.profilePicture ? `company_files/${data1.roleForm.model.profilePicture}` : '/assets/team-lead.jpg' 
                        this.roleEmployeeList = [...data2];
                    }).catch((error) => {
                        this.__showDangerToast("Some error occured during saving the employee details. Please try again or contact developer")
                        console.error(error.message)
                    }
                );
                setTimeout(() => {
                    this.$refs.loaderComp.hide()
                }, 800)
            } catch (err) {
                this.__showDangerToast("Some error occured during fetching the employee details. Please try again or contact developer")
                console.error("ERROR: ", err)
            }
            this.$refs.childComp.formStatus = 0
        },
        getChildFormStatus(val: Number){
            this.childFormStatus = val
        },
        createNewRole(){
            this.$refs.childComp.createNewRole()
            Object.assign(this.$data.childFormData, initialState())
            this
            this.imageUploaded = '/assets/team-lead.jpg' 
        },
        openEditRoleDialog(){
            this.whichDialog = 'edit'
            this.$refs.dialogModalComp.toggleDialog()
        },
        confirmEditRole(){
            this.$refs.childComp.openForm()
            this.__showDefaultToast("Please fill in the form provided")
            this.$refs.dialogModalComp.toggleDialog()
        },
        openDeleteRoleDialog(){
            this.whichDialog = 'delete'
            this.$refs.dialogModalComp.toggleDialog()
        },
        confirmDeleteRole(){
            let dataToPost = {
                data: this.childFormData.idd,
            }
            try {
                this.$refs.loaderComp.show()
                axios.post('/api/v1/deleteRole', dataToPost, {
                }).then(resp => {
                    let data = resp.data.data
                    this.__showDefaultToast("Role successfully deleted") 
                }).catch(err => {
                    this.__showDangerToast("Some error occured during fetching the role details. Please try again or contact developer")
                    console.error("ERROR: ", err)
                })
                setTimeout(() => {
                    this.$refs.loaderComp.hide()
                }, 800)
            } catch (err) {
                this.__showDangerToast("Some error occured during fetching the role details. Please try again or contact developer")
                console.error("ERROR: ", err)
            }
            this.imageUploaded = '/assets/team-lead.jpg' 
            this.$refs.childComp.clearForm()
            this.$refs.dialogModalComp.toggleDialog()
            setTimeout(() => {
                this.getDataFromServer()
            }, 500)
        },
        openUploadDialog(){
            document.getElementById("uploadFile")!.click()
        },
        onChangeFileInput(){
            this.imageUploaded = this.$refs.uploadImageRef.files[0]
        },
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
        },
        roleListComp(){
            let data = this.roleList
            data.forEach((o, i) => {
                o.createdDate = o.createdDate ? new Date(o.createdDate) : new Date()
                o.createdDate = moment(o.createdDate,"DD MM YYYY").format('MMM DD')
            })
            return data
        },
        displayTimeComp(){
            let lastEdited;
            if(this.childFormData.idd){
                if(this.childFormData.roleForm.model.lastEditedDate){
                    lastEdited = new Date(this.childFormData.roleForm.model.lastEditedDate)
                }else{
                    lastEdited = new Date()
                }
            }else{
                lastEdited = null
            }
            let data = {
                lastEditedDate: lastEdited == null ? '' : moment(lastEdited,"DD MM YYYY").format('Do MMM YYYY'),
            }
            return data
        }
    },
    watch: {
        imageUploaded(newImage, oldImage){
            if(newImage != "" && newImage != oldImage){
                if(newImage.type){
                    let uploadImage = newImage
                    let FR = new FileReader
                    FR.readAsDataURL(uploadImage);
                    let imageRef = this.$refs.imageFrame
                    FR.addEventListener("load", function(evt) {
                        imageRef.src = evt.target!.result!;
                    }); 
                }
            }
        },
        searchText(newText, oldText){
            let roleDivRefs = this.$refs.roleDiv
            roleDivRefs.forEach((o, i) => {
                let nameEl = o.querySelector('.role-name')
                let createdByEl = o.querySelector('.role-created-by')
                let createdDateEl = o.querySelector('.role-date-created')
                if(nameEl.innerText.toLowerCase().indexOf(newText.toLowerCase()) !== -1 || createdByEl.innerText.toLowerCase().indexOf(newText.toLowerCase()) !== -1 || createdDateEl.innerText.toLowerCase().indexOf(newText.toLowerCase()) !== -1){
                    o.classList.remove('hidden')
                }else{
                    o.classList.add('hidden')
                }
            })
        }
    },
    components: {
        "form-app": Form,
        "employee-list-app": EmployeeList
    }
}