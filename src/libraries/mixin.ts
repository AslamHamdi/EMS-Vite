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
        },
        __detectMimeType(b64) { //to check for base64 mime type
            var signatures = {
                JVBERi0: "application/pdf",
                R0lGODdh: "image/gif",
                R0lGODlh: "image/gif",
                iVBORw0KGgo: "image/png",
                "/9j/": "image/jpg"
            };
            for (var s in signatures) {
                if (b64.indexOf(s) === 0) {
                    return signatures[s];
                }
            }
        },
        __dataURLtoFile(dataurl, filename) {// to convert data URL (base64) to file object usage eg: MainFunctionCustom.__dataURLtoFile(`data:${mime};base64,${o.value}`, o.name);

            var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = window.atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
    
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
    
            return new File([u8arr], filename, { type: mime });
        }
    }
})