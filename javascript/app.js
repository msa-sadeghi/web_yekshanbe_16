function my(){
    console.log("this is a test")
}
const btn = document.getElementById("btn")
btn.addEventListener("click", (e)=>{
    console.log("another btn clicked")
})
const btn2 = document.getElementById("btn2")
btn2.onclick = function(){
    console.log("third btn clicked")
}