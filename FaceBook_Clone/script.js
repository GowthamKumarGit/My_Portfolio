$(document).ready(function() {
    $("#signup").validate({
        rules:{
            fname: {
                required:true,
                minlength:5,
            },
            lname: {
                required:true,
                minlength:5,
            },
            mobile:{
                required:true,
            },
            password:{
                required:true,
                minlength:8,
            },
            day:{
                required:true,
                minlength:8,
            },
            month:{
                required:true,
            },
            year:{
                required:true,
            },
            gender:{
                required:true,
            },
        }
    })
});