
function signUp(event){
    event.preventDefault();
    var email = document.getElementById("userEmailInput").value;
    var userName = document.getElementById("userNameInput").value;
    var password = document.getElementById("passwordInput").value;
    var user={
        userEmailInput : email,
        userNameInput : userName,
        passwordInput : password,
    };
    if(localStorage.getItem ("users") !== null){
        let arrayAllUsers = localStorage.getItem ("users")
        let newUsers = arrayAllUsers + "*" + JSON.stringify(user)
        
        localStorage.setItem("users", newUsers)
        console.log(localStorage.getItem("users"))
    }
    else{
        localStorage.setItem("users", JSON.stringify(user));
     }
    console.log("user added")
}
function loginUser(event){
    event.preventDefault();
    var userName = document.getElementById("nameInput").value;
    var passWord = document.getElementById("passInput").value;
    var email = document.getElementById("emailInput").value;
    var result = document.getElementById("result");
    var user={
        userEmailInput : email,
        userNameInput : userName,
        passwordInput : passWord,
    };
    var users = localStorage.getItem("users");
    users=users.split("*")
    let x = users.indexOf(JSON.stringify(user))
    if(x===-1 ){result.innerHTML=`<b>error dear</b>`}
    
    else {result.innerHTML=`<b>Welcom ${userName} </b>`}
}