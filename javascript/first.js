const btn = document.getElementsByTagName('button')[0]
const p = document.querySelector("p")
const img = document.querySelector('img')
btn.addEventListener('click', () => {
    // p.classList.add("red")
    p.classList.toggle("red")
    if(img.getAttribute("src") === ""){

        img.src = "bmw.png"
    }else{
        img.src = ""
    }
})