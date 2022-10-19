function profileInitialState(){
    return {
        name: 'John Doe', 
        email: 'john.doe@gmail.com',
        department: 'Software',
        role: 'Frontend Developer',
        reportTo: 'Jane Doe',
        profilePicture: '',
    }
}

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
            formStatus: 0,
            profileData: profileInitialState()
        }
    },
    methods: {
        viewEmployeeProfile(idd: any){
            console.log("SELECTED IDD: ", idd)
            const found = this.roleEmployeeList.find(o => o.idd === idd);
            this.profileData = found
        }
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
        },
        profileDataComp(){
            let data = {
                name: this.profileData.firstName ? `${this.profileData.firstName} ${this.profileData.lastName}` : 'John Doe',
                email: this.profileData.emailAddress ? this.profileData.emailAddress : 'john.doe@gmail.com',
                department: this.profileData.departmentName ? this.profileData.departmentName : 'Software',
                role: this.profileData.roleName ? this.profileData.roleName : 'Frontend Developer',
                profilePicture: this.profileData.profilePicture ? `company_files/${this.profileData.profilePicture}` : '/assets/face3.jpg',
                reportTo: 'Wokle'
            }
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
                this.profileData = profileInitialState()
            },
            immediate: true
        }
    },
}