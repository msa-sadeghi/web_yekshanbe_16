const nameElement = document.getElementById("name")
const nameError = document.getElementById("nameError")

nameElement.addEventListener('input', (e)=>{
    let nameLength = nameElement.value.length
    if(nameLength <  3){
        nameError.style.display = "block"
        nameElement.classList.add("error")
    }else{
        nameError.style.display = "none"
        nameElement.classList.remove("error")

    }

})
const emailElement = document.getElementById("email")
const emailError = document.getElementById("emailError")

emailElement.addEventListener('input', (e)=>{
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    emailValue = emailElement.value
    if(!pattern.test(emailValue)){
        emailError.style.display = "block"
        emailElement.classList.add("error")
    }else{
        emailError.style.display = "none"
        emailElement.classList.remove("error")

    }

})


