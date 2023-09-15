function passwordCheck(){

    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm_pass");

    if(password.value == confirmPassword.value){
        return;
    }
    else{
        alert("passwords do not match!");
        confirmPassword.value = "";
    }
}