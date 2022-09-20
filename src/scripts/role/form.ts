import axios from "axios"

export default {
    mounted(){
        console.log("MOUNTED FORM APP")
        this.getDataFromServer()
    },
    data(){
        return {
            editButtonList: [
                {name: 'Edit', function: 'confirmEditUser'}
            ]
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
        confirmEditUser(){
            console.log("CONFIRM EDIT")
        },
    }
}