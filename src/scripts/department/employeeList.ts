export default {
    mounted(){
        // this.$parent.$parent.$parent.getDepartmentById()
        // console.log("LIUST: ", this.deptEmployeeList)
    },
    props: {
        deptEmployeeList: Array
    },
    data(){
        return{
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
        }
    },
    activated: function() {
    },
    computed:{
        employeeListData(){
            let data : Object[] = [];
            for(let i = 0; i <= 20; i++){
                data.push({
                    id: 'SFD0020058',
                    name: "Wokle",
                    email: 'wokle08@gmail.com',
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
        deptEmployeeListComp(){
            let data = this.deptEmployeeList
            console.log("COMP DATYA: ", data)
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
        },
    },
    watch:{
        deptForm:{
            handler: function(newData, oldData) {
                this.$parent.$parent.$parent.childFormData = newData.model
                this.$parent.$parent.$parent.childFormData.idd = this.idd
            },
            deep: true
        },
        deptEmployeeList:{
            handler: function(newData, oldData){
                console.log("NEW DATA: ", newData)
            },
            immediate: true
        }
    },
    component: {
        
    }
}