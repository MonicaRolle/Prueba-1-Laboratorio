document.getElementById('name').value = "Mi nombre";
document.getElementById('lastName').value = "Mi apellido";

document.getElementById('avatar').src = "img/profile.png"


function getData(){
    console.log(document.getElementById('name').value);
    console.log(document.getElementById('lastName').value);
}