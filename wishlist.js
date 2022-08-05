// console.log("Yes");
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
var wishlistArr=JSON.parse(localStorage.getItem("wish")) || [];
window.addEventListener("load", displaywish);
document.getElementById("wishlist").addEventListener("click",displaywish)

function displaywish(){
    
    document.getElementById("data").innerText="";
     if (wishlistArr.length == 0) {
       var div = document.createElement("div");
       div.setAttribute("id", "innerdiv");
       var img = document.createElement("img");
       img.setAttribute(
         "src",
         "https://cdn.pixabay.com/photo/2017/02/18/02/59/application-2076445__340.png"
       );
       img.setAttribute("id", "img");
       img.style.margin="20px auto"
       var h4 = document.createElement("h4");
       h4.innerText = "No jobs saved yet";
       h4.setAttribute("id","h4");

       var button = document.createElement("button");
       button.innerText = "Find Job 👉";
       button.addEventListener("click", function () {
         location = "homePage.html";
       });

       // div.append(img,button);

       button.setAttribute("id", "butt");
       button.style.width="100px"
       button.style.margin="10px auto 10px auto"

    //    document.getElementById("data").style.display = "flex";
    //    document.getElementById("data").style.alignItems = "center";
    //    document.getElementById("data").style.flexDirection = "column";

       document.getElementById("data").append(img, h4, button);
     }
     else{
    wishlistArr.map(function(ele,index){
        var div=document.createElement("div");
        var div1=document.createElement("div");
        var div2=document.createElement("div");

        var h3=document.createElement("h3");
        h3.innerText=ele.post;
        
        var p1=document.createElement("p");
        p1.innerText=ele.companyName;

        var p2=document.createElement("p");
        p2.innerText=ele.place;

        var btn1=document.createElement("button");
        btn1.innerText="Apply now";
        btn1.addEventListener("click",function(){
            applyNow(index);
        });

        var btn2=document.createElement("select");
        btn2.setAttribute("id",`wishlist${index}`)
        // btn2.setAttribute("class","select");
        btn2.addEventListener("change",function(){
            changeStatus(index);
        });
        var opt1=document.createElement("option");
        opt1.innerText="Update status";
        opt1.setAttribute("value","");

        var opt2=document.createElement("option");
        opt2.innerText="Applied";
        opt2.setAttribute("value","applied");

        var opt3=document.createElement("option");
        opt3.innerText="Interviewing";

        var opt4=document.createElement("option");
        opt4.innerText="Offer received";

        var opt5=document.createElement("option");
        opt5.innerText="Hired";

        var opt6=document.createElement("option");
        opt6.innerText="Not selected by employer";

        var opt7=document.createElement("option");
        opt7.innerText="No longer interested";

        var btn3=document.createElement("button");
        btn3.innerText="Remove";
        btn3.addEventListener("click",function(){
            removeFromWish(index);
        });

        // var hr=document.createElement("hr");
        btn2.append(opt1,opt2,opt3,opt4,opt5,opt6,opt7);
        div1.append(h3,p1,p2);
        div2.append(btn1,btn2,btn3);
        div.append(div1,div2)
        document.getElementById("data").append(div);

    })
}
}

function applyNow(index){
    var f=0;
    for(var i=0;i<appliedArr.length;i++){
        if(wishlistArr[index].post===appliedArr[i].post){
            f=1;
            break;
        }
    }
    if(f==0){
        appliedArr.push(wishlistArr[index]);
        localStorage.setItem("applyed",JSON.stringify(appliedArr))
        document.getElementById("appliedcount").innerText=appliedArr.length;
    }
    
    wishlistArr.splice(index,1);
    displaywish();
    localStorage.setItem("wish",JSON.stringify(wishlistArr));
    document.getElementById("wishlistcount").innerText=wishlistArr.length;
}

function changeStatus(index){
    console.log(index);
    var selected=document.querySelector(`#wishlist${index}`).value;
    console.log(selected);
    if(selected==="applied"){
        var f=0;
        for(var i=0;i<appliedArr.length;i++){
            if(wishlistArr[index].post===appliedArr[i].post){
                f=1;
                break;
            }
        }
        if(f===0){
            appliedArr.push(wishlistArr[index]);
            localStorage.setItem("applyed",JSON.stringify(appliedArr))
            document.getElementById("appliedcount").innerText=appliedArr.length;
        }
        
        wishlistArr.splice(index,1);
        displaywish();
        localStorage.setItem("wish",JSON.stringify(wishlistArr));
        document.getElementById("wishlistcount").innerText=wishlistArr.length;
    }
}

function removeFromWish(index){
    wishlistArr.splice(index,1);
    displaywish();
    localStorage.setItem("wish",JSON.stringify(wishlistArr));
    document.getElementById("wishlistcount").innerText=wishlistArr.length;
}
document.getElementById("wishlistcount").innerText=wishlistArr.length;

var appliedArr=JSON.parse(localStorage.getItem("applyed")) || [];
document.getElementById("applied").addEventListener("click",displayapplied);

function displayapplied(){

    document.getElementById("data").innerText="";
    if (appliedArr.length == 0) {
       var div = document.createElement("div");
       div.setAttribute("id", "innerdiv");
       var img = document.createElement("img");
       img.setAttribute(
         "src",
         "https://cdn.pixabay.com/photo/2018/07/15/15/12/observe-3539810__340.jpg"
       );
       img.setAttribute("id", "img");
       img.style.margin="20px auto"
       var h4 = document.createElement("h4");
       h4.innerText = "No jobs applied  yet";
       h4.setAttribute("id","h4");

       var button = document.createElement("button");
       button.innerText = "Find Job 👉";
       button.addEventListener("click", function () {
         location = "homePage.html";
       });

       // div.append(img,button);

       button.setAttribute("id", "butt");
       button.style.width="100px"
       button.style.margin="10px auto 10px auto"

    //    document.getElementById("data").style.display = "flex";
    //    document.getElementById("data").style.alignItems = "center";
    //    document.getElementById("data").style.flexDirection = "column";

       document.getElementById("data").append(img, h4, button);
     }
     else{
    appliedArr.map(function(ele,index){
        var div=document.createElement("div");
        var div1=document.createElement("div");
        var div2=document.createElement("div");

        var h3=document.createElement("h3");
        h3.innerText=ele.post;
        
        var p1=document.createElement("p");
        p1.innerText=ele.companyName;

        var p2=document.createElement("p");
        p2.innerText=ele.place;

        var btn2=document.createElement("select");
        btn2.setAttribute("id",`applied${index}`);
        btn2.addEventListener("change",function(){
            changeStatusInApplied(index);
        });
        
        var opt1=document.createElement("option");
        opt1.innerText="Update status";
        // opt1.setAttribute("value","");

        var opt2=document.createElement("option");
        opt2.innerText="Interviewing";

        var opt3=document.createElement("option");
        opt3.innerText="Offer received";

        var opt4=document.createElement("option");
        opt4.innerText="Hired";

        var opt5=document.createElement("option");
        opt5.innerText="Not selected by employer";

        var opt6=document.createElement("option");
        opt6.innerText="No longer interested";

        var opt7=document.createElement("option");
        opt7.innerText="Move back to 'Wishlist'";
        opt7.setAttribute("value","movetowishlist")
        
        var btn3=document.createElement("button");
        btn3.innerText="Remove";
        btn3.addEventListener("click",function(){
            removeFromApplied(index);
        });

        btn2.append(opt1,opt2,opt3,opt4,opt5,opt6,opt7);
        div1.append(h3,p1,p2);
        div2.append(btn2,btn3);
        div.append(div1,div2)
        document.getElementById("data").append(div);

    });
}
}

function changeStatusInApplied(index){

    var selected=document.querySelector(`#applied${index}`).value;
    console.log(selected);
    if(selected==="movetowishlist"){
        var f=0;
        for(var i=0;i<wishlistArr.length;i++){
            if(wishlistArr[i].post===appliedArr[index].post){
                f=1;
                break;
            }
        }
        if(f===0){
            wishlistArr.push(appliedArr[index]);
            localStorage.setItem("wish",JSON.stringify(wishlistArr));
            document.getElementById("wishlistcount").innerText=wishlistArr.length;
        }
        
        appliedArr.splice(index,1);
        displayapplied();
        localStorage.setItem("applyed",JSON.stringify(appliedArr));
        document.getElementById("appliedcount").innerText=appliedArr.length;
    }
}

function removeFromApplied(index){
    appliedArr.splice(index,1);
    displayapplied();
    localStorage.setItem("applyed",JSON.stringify(appliedArr));
    document.getElementById("appliedcount").innerText=appliedArr.length;
}
document.getElementById("appliedcount").innerText=appliedArr.length;

