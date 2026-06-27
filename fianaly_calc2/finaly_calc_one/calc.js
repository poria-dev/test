const inp = document.getElementById("inp")

const h2 = document.getElementById("h2")



let number1 = 0
let number2 = 0
let operaitor = ""


function para(num) {

    inp.value += num

    if (operaitor == "") {
        number1 = inp.value
    } else {
        number2 = inp.value
    }
}

function op(opaa) {
    operaitor = opaa
    console.log(operaitor);
    inp.value = ""

}

function sum() {

    if (operaitor == "+") {
        h2.innerHTML = number1 + number2
    } else if (operaitor == "-") {
        h2.innerHTML = number1 - number2

    } else if (operaitor == "*") {
        h2.innerHTML = number1 * number2

    } else {
        h2.innerHTML = number1 / number2

    }
    inp.value = ""
}


function reset() {
    operaitor = ""
    number1 = 0
    number2 = 0
    h2.innerHTML = ""

    inp.value = ""

}