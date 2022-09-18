export default {
    data(){
        return {
            currentTab: "home"
        }
    },
    mounted(){
        console.log("Mounted APP")
        this.onTabSelect(this.currentTab)
    },
    methods: {
        onTabSelect(tab: string){
            this.currentTab = tab
            for (let value of Object.entries(this.$refs)) {
                if(value[0] == this.currentTab){
                    this.$refs[value[0]].classList.add('border-l-4')
                    this.$refs[value[0]].classList.add('bg-indigo-900')
                }else{
                    this.$refs[value[0]].classList.remove('border-l-4')
                    this.$refs[value[0]].classList.remove('bg-indigo-900')
                }
            }
        }
    }
}
