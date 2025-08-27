document.getElementById("myForm").addEventListener("submit" ,function(myFunction){
    myFunction.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    let nameError=document.getElementById("nameError");
    let emailError=document.getElementById("emailError");
    let phoneError=document.getElementById("phoneError");
    let passwordError=document.getElementById("passwordError");

    nameError.textContent ="";
    emailError.textContent="";
    phoneError.textContent ="";
    passwordError.textContent="";

    let valid=true;
    if(name===""){
        nameError.textContent="Name is required";
        valid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
        emailError.textContent ="Enter a valid Email .";
        valid=false;
    }

    let phonePattern = /^[0-9]{11}$/;
    if(!phone.match(phonePattern)){
        phoneError.textContent="Phone must be 11 digits.";
        valid = false;
    }

    if(password < 8){
        passwordError.textContent="Password must be at least 8 characters.";
        valid = false;
    }
    
    if(valid){
        Swal.fire({
            title:"Success!",
            text:"Your form has been submitted",
            icon:"success",
            confirmButtonText:"Continue.",
        }).then(()=>{
            document.getElementById("myForm").submit();
        });
    }

})

