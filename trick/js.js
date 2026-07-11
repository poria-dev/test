const box = document.getElementById("box")
const btn = document.getElementById("btn")
const span = document.getElementById("span")
const body = document.getElementById("body")
const h2 = document.getElementById("h2")
h2.onclick = function dark(){
    body.classList.toggle("dark")
}
btn.onclick = function () {
    box.style.scale = "1"

}
span.onclick=function span(){
    box.style.scale="0"
}