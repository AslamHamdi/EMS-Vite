import accountTab from '../../components/setting/Account.vue'

export default {
    data() {
        return{
            tabs:[
                { id: 1, component: "account-tab", name: 'ACCOUNT', icon: "fa-solid fa-gear", description: "Change profile picture, email address and personal information" },
                { id: 2, component: "security-tab", name: 'SECURITY', icon: "fa-solid fa-key", description: "Change, reset password and security" },
                { id: 3, component: "about-tab", name: 'ABOUT', icon: "fa-solid fa-circle-info", description: "About EMS, version and additional information" }
            ],
            selectedTab: "account-tab"
        }
    },
    mounted(){
    },
    methods: {
        onSelectTab(component: any){
            this.selectedTab = component
        }
    },
    computed: {
        componentNow(){
            let component = this.selectedTab

            return component
        }
    },
    components:{
        "account-tab": accountTab,
        // "security-tab": securityTab,
        // "about-tab": aboutTab
    }
}