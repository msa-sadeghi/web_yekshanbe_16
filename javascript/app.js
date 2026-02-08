fetch("https://jsonplaceholder.typicode.com/users")
.then(respose => respose.json())
.then(data => renderUsers(data))
.catch(error => console.log(error))

const mainElement = document.querySelector("main")

function renderUsers(users){
    users.forEach(user => {
        const cardElemenet =  document.createElement("div")
        cardElemenet.classList.add("card")
        const idSpan = document.createElement("span")
        idSpan.classList.add('idSpan')
        idSpan.innerText = user.id
        const nameSpan = document.createElement("span")
        nameSpan.innerText = user.name

        cardElemenet.append(idSpan, nameSpan)
        mainElement.append(cardElemenet)
    });
}