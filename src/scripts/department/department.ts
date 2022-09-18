import EmployeeList from "../../components/department/EmployeeList.vue"
import Form from "../../components/department/Form.vue"

export default {
    mounted(){
        localStorage.setItem('currentTab', 'department')
    },
    data(){
        return{
            tabSelected: "form",
            tabClass: [{iconColor: "text-slate-100"},{iconColor: "text-black"}],
            tabStyle: [{color: '#6A67CE'}, {}]
        }
    },
    methods: {
        onTabSelect(data: any){
            this.tabSelected = data
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
        }
    },
    components: {
        "form-app": Form,
        "employee-list-app": EmployeeList,
    }
}