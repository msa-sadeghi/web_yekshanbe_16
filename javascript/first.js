let divElement = document.getElementById("welcomeMessage")


function showWelcome(){
    let username = prompt("لطفا اسم خود را وارد نمائید")
    divElement.textContent = `سلام ${username} چطوری؟`
    divElement.style.display = "block"
}