import router from "./router"

export default {
    data(){
        return {
            currentTab: ""
        }
    },
    mounted(){
        this.currentTab = this.$router
    },
    methods: {
        onTabSelect(tab: string){
            this.currentTab = tab ? tab : this.$router.currentRoute
        }
    },
    watch: {
        currentTab: function(tab: any) {
            let proxyTab = JSON.parse(JSON.stringify(tab))
            let valueTab = ""
            if(proxyTab.options){
                valueTab = proxyTab.options.history.location == "/" ? "/" : proxyTab.options.history.location.substring(1)
            }else{
                valueTab = tab
            }
            router.push({path: `${valueTab}`})
            for (let value of Object.entries(this.$refs)) {
                if(value[0] == valueTab){
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
