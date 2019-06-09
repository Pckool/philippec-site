function validateForm() {
    var data = {
        email: $('#input-email').val(),
        name: $('#input-name').val(),
        message: $('#input-message').val()
    };
    
    var isvalid = true;

    if (data.email == "") {
        $('#input-email').addClass('is-invalid');
        isvalid = false;
    }
    if (data.name == "") {
        $('#input-name').addClass('is-invalid');
        isvalid = false;
    }
    if (data.message == "") {
        $('#input-message').addClass('is-invalid');
        isvalid = false;
    }
    
    if(isvalid){
        $.post("email.php", data)
        .done( function(res){
            console.log("Message was sent!");
            $('#input-email').val(""),
            $('#input-name').val(""),
            $('#input-message').val("")
        })
    }
}