// let x = 0
// x = x + 1
// x += 1
// x++
// console.log(x)
// for(let i = 0; i < 3; i++){
//     console.log(`number ${i}`)
// }

// let counter = 0
// while(counter < 3){
//     console.log(`item # ${counter}`)
//     counter++
// }

// let username = "sara"
// console.log(username[0])

// let username = 'sara'
// console.log(username[0])

// let username = `sara`
// console.log(username[0])
// console.log(username.length)
// for(let j = 0; j < username.length;  j++){
//     console.log(username[j])
// }

// let number = 123
// let strNumber = number.toString()
// console.log(typeof strNumber)

// let another = "123"
// let numberAnother = Number(another)
// console.log(typeof numberAnother)

// true    false

// let person = {
//     username: "sara",
//     password : "12345"
// }
// console.log(person.username)
// console.log(person.password)
// console.log(person['username'])
// console.log(person['password'])

// let x  = 12
// let y = "12"
// console.log(x === y)

// //   and    or      &&     ||

// let  numbers = [1, 2, 3, 4, 5]
// let sum = 0
// numbers.forEach(function(n){
//     console.log(n)
//     sum += n
// })
// console.log(sum)

let tempInput = document.getElementById("tempInput")
let tempFrom = document.getElementById("tempFrom").value
let tempTo = document.getElementById("tempTo").value
let tempResult = document.getElementById("tempResult")

function convertTemperature(){
    let val = tempInput.value
    let result
    if(tempFrom ==  tempTo){
        result = val
    }else if (tempFrom === "celsius"){
        if (tempTo === "fahrenheit"){
            result = val  *2 
        }
    }
    console.log(tempFrom, tempTo)
    tempResult.textContent = result
    tempResult.style.display = "block"
}