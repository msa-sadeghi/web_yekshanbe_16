// for(let i = 0; i < 5; i++){
//     console.log(`iteration number ${i}`)
// }
// let username = "admin"
// for(let i = 0; i < username.length; i++){
//     console.log(username[i])
// }
// let names = ["amir", "sara", "babak", "pezham"]
// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }

// let result = 0;
// for (let i = 1; i <= 100; i++){
//     result += i
// }
// console.log(`sum of numbers = ${result}`)
// let result2 = 0;
// for (let i = 1; i <= 100; i+=2){
//     result2 += i
// }
// console.log(`sum of numbers = ${result2}`)


// let age = 19

// if (age < 8){
//     console.log("baby")
// }else if(age >= 9 && age <=13){
//     console.log("teenager")
// }else{
//     console.log("adult")
// }
// let person = {
//     name : "ali",
//     age:23
// }
// console.log(person.name)
// console.log(person.age)
// console.log(person["name"])
// console.log(person["age"])
// let x = 123
// let y = x.toString()
// let z = String(x)

// console.log(123 === "123")

 let names = ["amir", "sara", "babak", "pezham"]

 names.forEach(function(n){
    console.log(n)
 })

 let numbers = [1,2,3,4,5,6,7,8,9]
 let result = 0
 numbers.forEach(function(x){
    result += x
 })

 console.log(result)