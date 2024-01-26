// get the reference of all objects
// DOM Document Object Mode : Helps to coonect with JS and HTML code

var nameTxt = document.getElementById('name');
var emailTxt = document.querySelectorAll('input')[1]
var btn = document.querySelectorAll('input')[2]
var para = document.querySelector('p')

btn.onclick = function(e){
    e.preventDefault()
    nameData  = nameTxt.value;
    emailData  = emailTxt.value;
    console.log(nameData, emailData )
    para.innerText = "Hi My name is "+nameData + " and my Email is "+emailData 
    para.style.color = "blue"
    nameTxt.value = ""
    emailTxt.value= ""
    
}
