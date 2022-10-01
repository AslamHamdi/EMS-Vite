export default {
    mounted(){
        console.log("MOUNTED EMPLOYEE LIST APP")
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
    }
}