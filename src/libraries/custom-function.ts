import Toastify from 'toastify-js'
import { useToast, POSITION } from "vue-toastification";

export function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
}

export function showDefaultToast(msg){
    const toast = useToast()
    toast(msg, {
        timeout: 2000,
        position: POSITION.TOP_CENTER,
        toastClassName: "my-custom-toast-class",
    });
}

export function showSuccessToast(msg){
    const toast = useToast()
    toast.success(msg, {
        timeout: 2000,
        position: POSITION.TOP_CENTER,
        toastClassName: "my-custom-toast-class",
    });
}

export function showWarningToast(msg){
    const toast = useToast()
    toast.warning(msg, {
        timeout: 2000,
        position: POSITION.TOP_CENTER,
        toastClassName: "my-custom-toast-class",
    });
}

export function showErrorToast(msg){
    const toast = useToast()
    toast.error(msg, {
        timeout: 2000,
        position: POSITION.TOP_CENTER,
        toastClassName: "my-custom-toast-class",
    });
}

export var textFilter = function(text, length, clamp){
    clamp = clamp || '...';
    var node = document.createElement('div');
    node.innerHTML = text;
    var content = node.textContent;
    return content!.length > length ? content!.slice(0, length) + clamp : content;
};