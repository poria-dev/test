const span = document.getElementById("span")

let flag = true


span.onclick = function para(e) {
    console.log("welcome");

    if (flag) {
        span.style.rotate = "200deg"
        span.innerHTML = "⭕"
    } else {
        span.style.rotate = "0deg"
        span.innerHTML = "✔"
    }

    flag = !flag

    // e.target.style.backgroundColor = "red"



}