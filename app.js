const userName = document.querySelector('#userName')
const email = document.querySelector('#email')
const nicNumber = document.querySelector('#nicNumber')
const password = document.querySelector('#password')
const btn = document.querySelector('#btn')

const regex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,8}$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const nicRegex = /^42\d{11}$/
const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{8,15}$/

let object;

btn.addEventListener('submit', function(event){
    event.preventDefault()
    if(regex.test(userName.value)){
        console.log(userName.value);
        object.push(userName.value)
        console.log(object);
    }else {
        console.log(' Wronge UserName  ');
    }
    if(emailRegex.test(email.value)){
        console.log(email.value);
    }else {
        console.log(' WrongeEmial  ');
    }
    if(nicRegex.test(nicNumber.value)){
        console.log(nicNumber.value); 
    }else {
        console.log(' Wronge NIC');
    }
    if(passwordRegex.test(password.value)){
        console.log(password.value);
    }else {
        console.log(' Wronge Password');
    }
    
    userName.value = ''
    email.value = ''
    password.value = ''
    nicNumber.value = ''
})