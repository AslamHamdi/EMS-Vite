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
            employeeForm: {
                model: {
                    roleName: "",
                    roleId: "",
                    departmentLead: "",
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
        saveEmployeeDetails(){
            let data = this.employeeForm.model
            console.log("EMPLOYEE FORM: ", data) 
        }
    }
}