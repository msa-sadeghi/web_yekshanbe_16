// let score = 0
// console.log(score)
// score = score + 1
// console.log(score)
// score += 1
// console.log(score)
// score++
// console.log(score)

// console.log("123" == 123)
// console.log("123" === 123)

// &&     ||    !

// let age = 17

// if(age >= 15 && age <= 23){
//     console.log("blalalal")
// }
// if(age >= 15 || age <= 23){
//     console.log("blalalal")
// }

// let isLoggedIn = false
// if(!isLoggedIn){
//     console.log("yes")
// }

// let isLoggedIn = true
// if(isLoggedIn){
//     document.body.innerHTML = "<h1>Welcome</h1>"
// }else{
//     document.body.innerHTML = "<h1>Not LoggedIn</h1>"
// }

// isLoggedIn ?  document.body.innerHTML =
//  "<h1>Welcome</h1>" : document.body.innerHTML =
//   "<h1>Not LoggedIn</h1>"

// let dayNumber = 1
// switch(dayNumber){
//     case 1:
//         console.log("sat")
//         break
//     case 2:
//         console.log("sun")
//         break
//     case 3:
//         console.log("mon")
//         break
//     case 4:
//         console.log("tue")
//         break
//     case 5:
//         console.log("wed")
//         break
//     case 6:
//         console.log("thurs")
//         break
//     case 7:
//         console.log("fri")
//         break
//     default:
//         console.log("not valid number")

// }

// let numbers = [1,2,3,4,5,6,7,8,9]
// let s = 0
// for(let i = 0; i < numbers.length; i++){
//     s += numbers[i]
// }
// console.log(s)
// s  = 0
// numbers.forEach(function(n){
//     s += n
// })
// console.log(s)

// let i =  0
// s = 0
// while(i < numbers.length){
//     s += numbers[i]
//     i++
// }
// console.log(s)

// s = 0
// i = 0
// do{
//     s += numbers[i]
//     i++
// }while(i < numbers.length)
// console.log(s)

let items = ["sport", "food", "jobs", "math", "algebra"]

let result = "<ul>"

items.forEach(function(x){
    result += "<li>" + x + "</li>"
})
result += "</ul>"

document.body.innerHTML = result