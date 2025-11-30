// let arr1 = ["ali", "sara", "nik"]
// console.log(arr1.length)
// arr1.push("saber")
// arr1.forEach(item => console.log(item))

// let arr2 = new Array(3)
// arr2[0] = "a"
// arr2[1] = "b"
// arr2[2] = "c"
// console.log(arr2.length)
// arr2.shift()
// arr2.pop()
// arr2.forEach(item => console.log(item))

// let arr3 = new Array("milk", "apple", "another")
// console.log(arr3.length)
// arr3.unshift("banana")

// arr3.forEach(item => console.log(item))


let names = ["abtin", "soshian", "paniz", "arash"]
for(let i =0; i < names.length;  i++){
    console.log(names[i])
}
console.log("------------------")

names.forEach(n => console.log(n))
console.log("------------------")

for(let n of names){
    console.log(n)
}
console.log("------------------")

for(let i in names){
    console.log(names[i])
}
console.log("------------------")