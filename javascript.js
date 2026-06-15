

function travels() {

    let enter = Number(prompt("inter you number"))
    let repeat = 0
    let list = document.querySelectorAll("#list>li")

    if (enter.length === 11) {
        console.log("welcome");

    } else if (enter.length > 11 || enter.length < 11) {

        console.log("try again");


    }

    if (repeat < 3) {
        repeat++
        travels()

    }
    else if (repeat == 3) {

        console.log("never mind ... ");

    }


}
