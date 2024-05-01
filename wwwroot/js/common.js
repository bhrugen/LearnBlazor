window.showToastr = function (type, message) {
    if (type == "success") {
        toastr.success(message);
    }
    if (type == "error") {
        toastr.error(message);
    }
}  

window.ShowSwal = function (type, message) {
    if (type == "success") {
        Swal.fire({
            title: "Good job!",
            text: message,
            icon: "success"
        });
    }
    if (type == "error") {
        Swal.fire({
            title: "Task Failed!",
            text: message,
            icon: "error"
        });
    }

}