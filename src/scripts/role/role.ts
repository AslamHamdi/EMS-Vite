import Form from "../../components/role/Form.vue"
import EmployeeList from "../../components/role/EmployeeList.vue"

export default {
    mounted(){
        localStorage.setItem('currentTab', 'role')
        console.log("BUTTON LIST: ", this.dialogButtonList)
    },
    data(){
        return{
            tabSelected: "form",
            tabClass: [{iconColor: "text-slate-100"},{iconColor: "text-black"}],
            tabStyle: [{color: '#6A67CE'}, {}],
            dialogButtonList: [
                {name: 'Confirm', function: 'confirmEditUser'},
            ],
            formStatus: 0
        }
    },
    methods: {
        onTabSelect(data: any){
            this.tabSelected = data
        },
        openEditUserDialog(){
            this.$refs.dialogModalComp.toggleDialog()
        },
        confirmEditUser(){
            console.log("CONFIRM EDIT")
            this.formStatus = 1
            this.$refs.dialogModalComp.toggleDialog()
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
        }
    },
    components: {
        "form-app": Form,
        "employee-list-app": EmployeeList
    }
}