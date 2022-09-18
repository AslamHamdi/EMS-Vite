export default {
    mounted(){
        console.log("MOUNTED FORM APP")
    },
    data(){
        return {
            deptForm: {
                model: {
                    deptName: "",
                    depatId: "",
                    deptLead: {
                        employeeId: "",
                        employeeName: ""
                    },
                    officeAddress: "",
                    description: ""
                }
            },
            formStatus: 0,
            confirmationText: "",
            isEditModalOpen: false,
            isDeleteModalOpen: false,
        }
    },
    methods: {
        onSubmitForm(){
            console.log("FORM: ", this.deptForm.model)
        },
        /*
        - Status maker to open form for editing
        - only admin can create, edit, delete department and assign lead to department
        0 = view only
        1 = edit
        */
        formStatusMaker(){

        },
        openConfirmationModal(obj: any){
            let text = obj.modal == 'delete' ? 
                    `Are you sure you want to delete department ${obj.dept} from EMS ?` :
                    `Are you sure you want to edit department ${obj.dept} ?`
            this.confirmationText = text
        },
        confirmEdit(obj: any){

        },
        confirmDelete(obj: any){

        }
    }
}