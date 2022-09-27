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
                    dateOfBrith: "",
                    sex: "",
                    icNum: "",
                    address: "",
                    city: "",
                    state: "",
                    zip: "",
                    maritalStatus: "",
                    phoneNum: "",
                }
            },
            companyForm: {
                model: {
                    emailAddress: "",
                    employeeId: "",
                    dateReg: "",
                    department: "",
                    position: "",
                }
            },
            emergencyForm: {
                model: {
                    name: "",
                    relationship: "",
                    phoneNum: ""
                }
            },
            isEdit: false,
            isDelete: false,
            isEditModalOpen: false,
            isDeleteModalOpen: false,
            formStatus: 0, //to keep track whether to add new employee or edit existing employee
        }
    },
    methods: {
        onInitialLoadPage(){
            
        },
        getDataFromServer(){

        },
        addNewEmployee(){

        },
        onEmployeeSelect(employeeId: any){

        },
        openEditModal(){

        },
        confirmEdit(){

        },
        openDeleteModal(){

        },
        confirmDelete(employeeId: any){

        },
        openSubmitModal(){

        },
        confirmSubmitForm(){

        }
    }
}