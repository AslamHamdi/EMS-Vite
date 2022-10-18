export default {
    mounted(){

    },
    props: {
        roleEmployeeList: Array
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
        
    },
    computed:{
        employeeListData(){
            let data : object[] = []
            for(let i = 0; i <= 7; i++){
                data.push({
                    id: 'SFD0020058',
                    name: "Wokle",
                    email: 'wokle@gmail.com',
                    class: () => {
                        let returner = ""
                        if(i%2 == 0){
                            returner = 'bg-gray-100 border-b'
                        }else{
                            returner = 'bg-white border-b'
                        }
                        return returner
                    }
                })
            }
            return data
        },
        roleEmployeeListComp(){
            let data = this.roleEmployeeList
            data.forEach((o, i) => {
                o.class = () => {
                    let returner = ""
                    if(i%2 == 0){
                        returner = 'bg-gray-100 border-b'
                    }else{
                        returner = 'bg-white border-b'
                    }
                    return returner
                }
            })
            return data
        }
    },
    watch:{
        roleForm:{
            handler: function(newData, oldData) {
                this.$parent.$parent.$parent.childFormData = newData.model
                this.$parent.$parent.$parent.childFormData.idd = this.idd
            },
            deep: true
        },
        roleEmployeeList:{
            handler: function(newData, oldData){
                console.log("NEW ROLE DATA: ", newData)
            },
            immediate: true
        }
    },
}