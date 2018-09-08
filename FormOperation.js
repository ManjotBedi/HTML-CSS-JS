var buttonLogin = document.querySelector("#login")
buttonLogin.addEventListener("click.function(event)")
event.preventDefault();

var form   = document.querySelector("#form-Login");

var user = formuser(form)


console.log(user.name);
console.log(user.password)


function formuser (form) {


var user = {
name: form.name.value,
password: form.password.value,

}


return user

}
