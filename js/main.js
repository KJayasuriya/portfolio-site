let usr = document.getElementById("nameId").value;
let pwd = document.getElementById("pwdId").value;
let users = new Map();
users = {"Jack":1234, "Arun":33453};
alert("Nothing to say");
function validate(){
    if (usr === "" || pwd === ""){
        alert("Username and password must be entered!");
        return;
    }
}
