

let da = 0
function para(number) {

    if (number.length == 11) {
        alert("welcome")
        return
    } else if (da == 3) {
        alert("you cant")
        return
    } else {
        da++
        para(prompt("try again"))
    }

}
