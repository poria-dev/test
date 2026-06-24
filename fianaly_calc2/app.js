const inp = document.querySelectorAll("input")

const h3 = document.getElementById("h3")


function para(op) {

    console.log(op);
    window.op = op

}


function equal() {

    let error = 0

    let val1 = +inp[0].value;
    let val2 = +inp[1].value


    inp[0].style.border = "1px solid black"
    inp[1].style.border = "1px solid black"





    if (val1 == "") {
        inp[0].style.border = "2px solid red"
        error++
    } 
    if (val2 == "") {
        inp[1].style.border = "2px solid red"
        error++
    }




    if (error == 0) {
        if (op == "+") {
            h3.innerHTML = val1 + val2
        } else if (op == "-") {
            h3.innerHTML = val1 - val2

        } else if (op == "*") {
            h3.innerHTML = val1 * val2

        } else {
            h3.innerHTML = val1 / val2

        }
    }



}