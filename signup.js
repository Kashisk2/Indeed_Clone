document.querySelector("form").addEventListener("submit", signUp)
var formData = JSON.parse(localStorage.getItem("user"))|| [];

function signUp() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var Password = document.getElementById("Password").value;
    console.log(name);
    var flg=0;
    formData.map(function(elm){
        if(elm.Email==email&&elm.Email!=""){
          
            flg=1;
        }
    })
    if(flg==0){
    if(name==""||email==""||Password==""){
        alert("Please enter details");
    }
    else{
    var data = {
        Name: name,
        Email: email,
        Password: Password
    };
    
    formData.push(data);
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Sign Up successfull!");
}
}else{
      alert("Account alredy exist\n Try to login");
}
}

