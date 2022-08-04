var form = document.querySelector("#signIn");
form.addEventListener("click", logIn);
var user = JSON.parse(localStorage.getItem("user"));

function logIn() {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("Password").value;

  var ans = false;
  if (email == "" || password == "") {
    alert("Please enter correct details");
  } else {
    for (var i = 0; i < user.length; i++) {
      if (user[i].Email == email && user[i].Password == password) {
        ans = true;
      }
    }

    if (ans == true) {
      alert("login sccessfull !");
      location = "homePage.html";
    } else {
      alert("Wrong Credentials");
    }
  }
}
