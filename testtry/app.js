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



function pori(x) {
    return x * 10
}



function sum(x, y) {
    return x * y
}


const pooria = () => {

    console.log("dwdqw");


}

const h1 = document.getElementById("h1")



h1.innerHTML = 
function para1(x, y) {

    return x * y

}

function para2(home) {


    para1(10, 20)

}