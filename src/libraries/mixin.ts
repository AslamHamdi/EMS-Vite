export default({
    mounted(){
    },
    methods: {
        __showDefaultToast(msg: string){
            this.$moshaToast(msg, {
                showIcon: true,
                position: 'top-center',
                type: 'default',
                transition: 'slide',
            })
        },
        __showInfoToast(msg: string){
            this.$moshaToast(msg, {
                showIcon: true,
                position: 'top-center',
                type: 'info',
                transition: 'slide',
            })
        },
        __showSuccessToast(msg: string){
            this.$moshaToast(msg, {
                showIcon: true,
                position: 'top-center',
                type: 'success',
                transition: 'slide',
            })
        },
        __showWarningToast(msg: string){
            this.$moshaToast(msg, {
                showIcon: true,
                position: 'top-center',
                type: 'warning',
                transition: 'slide',
            })
        },
        __showDangerToast(msg: string){
            this.$moshaToast(msg, {
                showIcon: true,
            position: 'top-center',
            type: 'danger',
            transition: 'slide',
            })
        },
        __tConvert(time) {
            // Check correct time format and split into components
            time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
          
            if (time.length > 1) { // If time format crrec
              time = time.slice (1);  // Remove full string match value
              time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
              time[0] = +time[0] % 12 || 12; // Adjust hours
            }
            return time.join (''); // return adjusted time or original string
        },
        __textFilter(text, length, clamp){
            clamp = clamp || '...';
            var node = document.createElement('div');
            node.innerHTML = text;
            var content = node.textContent;
            return content!.length > length ? content!.slice(0, length) + clamp : content;
        }
    }
})