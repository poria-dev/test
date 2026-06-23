

// function user(x, y) {

//     return x * y


// }
// console.log(user(10, 20));


// let age = prompt("enter your age")
// let firstName = prompt("enter your name")

// if (age > 18 && firstName.length >= 4) {

//     console.log("welcome to your website");

// }else{
//     console.log("try again");

// }




// let inp = document.getElementById("inp1")
// console.log(inp.value);




// let inp = document.getElementById("inp")
// let btn = document.getElementById("btn")
// let para = document.getElementById("para")

// btn.onclick = function userselect() {

//     if (inp.value % 2 == 0) {
//         para.innerHTML = "even"
//     } else {
//         para.innerHTML = "odd"
//     }

// }

// const group = document.getElementById("group")
// let num1 = prompt("one")
// let num2 = prompt("tew")
// let num3 = prompt("three")
// const some = num1 + num2 + num3
// let select = prompt("about number")

// const result = some / select
// console.log(result.toFixed(2));


// if (result >= 12) {
//     group.innerHTML = "this ok"
// } else if (result < 12) {
//     group.innerHTML = "not ok"
// } else {
//     group.innerHTML = "try again"
// }


// let inp = document.getElementById("inp")
// let btn = document.getElementById("btn")



// btn.onclick = function acc() {

//     let img = document.getElementById("img")
//     let para = document.getElementById("para")

//     let end = inp.value


//     if (end <= 100 && end != 0 && end != "") {
//         img.src = "img/free-gluten-snack.png"
//         img.style.opacity = "100%"
//         para.style.opacity = "0"

//     } else if (end > 100 && end <= 249) {

//         img.src = "img/pngpraid.parspng.com-2.png"
//         para.style.opacity = "0"
//         img.style.opacity = "100%"


//     } else if (end >= 250 && end <= 499) {
//         img.src = "img/70781960318.jpg"
//         para.style.opacity = "0"
//         img.style.opacity = "100%"



//     } else if (end >= 500) {
//         img.src = "img/11084823164.jpg"
//         para.style.opacity = "0"
//         img.style.opacity = "100%"


//     } else if (end == "" || end == 0) {
//         para.innerHTML = "<h3>dont have mony beacuse i know</h3>"
//         img.style.opacity = "0"
//         para.style.opacity = "100%"

//     }

// }



// let day = 2


// switch (day) {

//     case 1: console.log("sanbe");
//         break;
//     case 2: console.log("yeksanbe");
//         break;
//     default: console.log("ffwf");

// }


// function user_data() {

//     console.log("welcome");

// }

// user_data()
// user_data()
// user_data()
// user_data()


// const password = function () {
//     console.log("anonymous");

// }
// password()


// const inp2 = document.getElementById("inp2")

// const arrive = function (name, age) {


//     let result = inp2.value

//     if (result % 2 == 0) {
//         alert("zoj")
//     } else {
//         alert("fard")
//     }

//     console.log(name + age);


// }

// arrive("pori", 20)



// let evenorodd = function (number, age) {

//     if (number % 2 == 0) {

//         alert("even")
//         console.log("even");


//     } else {

//         alert("odd")
//         console.log("odd");


//     }
//     console.log(age);


// }

// evenorodd(prompt("enter number"), 15)
// evenorodd(47, 10)





// const inp3 = document.getElementById("inp3")
// const btn3 = document.getElementById("btn3")
// let result = inp3.value

// btn3.onclick = function user_select(enter) {

//     console.log(enter);


// }

// user_data(result)



// const inp5 = document.getElementById("inp5")
// const inp6 = document.getElementById("inp6")
// const val1 = inp5.value
// const val2 = inp6.value
// const h4 = document.getElementById("h4")
// const btn4 = document.getElementById("btn4")
// const btn5 = document.getElementById("btn5")
// const btn6 = document.getElementById("btn6")
// const btn7 = document.getElementById("btn7")
// const para = document.getElementById("para")


// function send(num) {



//     h4.innerHTML = num

//     para.innerHTML = val1 + val2


// }




// function solid(branch) {

//     let res = branch * 9 / 5 + 32
//     console.log(res);


// }

// solid(12414)



// function add(number) {

//     alert(number)

// }


// function vin(num1, num2) {

//     let some = num1 * num2
//     console.log(some);
//     let end = some / 2
//     console.log(end);



// }
// vin(prompt("num1"), prompt("num2"))






// let x = 10
// let y = 20

// let chenge = x
// x = y
// console.log('x :' + x);

// y = chenge
// console.log('y :' + y);


// console.log(`add ${x}, ${y} isequal ${x * y}`);


// function myness(numbers) {

//     if (numbers > 0) {
//         numbers--
//         console.log(numbers);

//     } else {
//         alert("try again")
//     }

// }
// myness(prompt("enter number"))


// function circle(r) {

//     let pi = 3.14

//     let f = pi * r * r
//     console.log(f);


// }
// circle(prompt("r"))

// function far(give) {

//     let log = give * 9 / 5 + 32 + "s"
//     console.log(log);


// }
// far(prompt("give"))

// -------------------------

// let look = 0
// function pass(password) {



//     if (password === 123) {

//         console.log("welcome");


//     } else {
//         look++
//         console.log(look);

//         if (look == 3) {
//             alert("no chance")
//         } else {
//             pass(+prompt("enter your password pleas again ..."))
//         }


//     }


// }

// pass(+prompt("enter your password pleas .... "))






// let inp10 = document.getElementById("inp10")
// const btn10 = document.getElementById("btn10")


// let shance = 0

// btn10.onclick = function conftable() {
//     let val = inp10.value
//     if (val.length >= 2) {
//         alert("welcome")
//     } else {
//         shance++
//         console.log(shance);

//         if (shance == 3) {
//             alert("end")
//         } else {
//             conftable()
//         }
//     }

// }
// conftable()




// let x = 13


// if (x % 2) {
//     // true
//     console.log("even");

// } else {
//     // false
//     console.log("odd");

// }









// function loop(number1, number2) {

//     for (let i = number1; i <= number2; i++) {

//         console.log(i);


//     }

// }
// loop(prompt("num1"), prompt("num2"))



// function reapit(number1, number2) {
//     let result = 0

//     if (number1 < number2) {
//         result++
//         console.log(result);
//         reapit()

//     } else {
//         alert("finish")
//     }

// }

// reapit(prompt("num1 enter .. "), prompt("num2 enter .. "))


// let sass = 3
// function para(name) {


//     console.log(name);

//     sass--
//     if (sass == 0) {
//         alert("dont")
//     } else {
//         para(prompt("name"))
//     }





// }

// para(prompt("enter name"))




// let flag = 0

// function para2(name) {

//     if (flag < 100) {
//         console.log(flag);
//         flag++
//         para2()
//     } else {
//         alert("qfqwfqwfqwf")
//     }


// }

// para2(prompt("esm"))



// let numinp = document.getElementById("numinp")
// let btnrun = document.getElementById("btnrun")
// let val = numinp.value

// let calc = 0
// btnrun.onclick = function para() {

//     if (val < 1000) {
//         console.log(calc);
//         calc++
//         if (calc == 1000) {
//             alert("calc finish")
//         } else {
//             para()
//         }


//     } else if (val > 1000 && val < 3000) {
//         console.log(calc);
//         calc--
//         if (calc == 0) {
//           alert("eeeeee")
//         }else{
//             para()
//         }

//     }




// }



// for(let x = 1000000 ; x > 0 ; x --){
//     console.log(x);

// }



// function por(name , age){
//     console.log(name , age);

// }


const h2 = document.getElementById("h2")
const inp = document.querySelectorAll("input")

function op(amal) {
    console.log(amal);
    window.amal = amal

}

function sum() {


    let flag = 0
    // reset

    inp[0].style.border = '2px solid black'
    inp[1].style.border = '2px solid black'

    // reset

    let x = +inp[0].value
    let y = +inp[1].value

    if (x == "") {
        inp[0].style.border = "4px solid red"
        flag++
        return
    }
    if (y == "") {
        inp[1].style.border = "4px solid red"

        flag++
        return
    }

    

    if (flag == 0) {

        if (amal == "+") {
            h2.innerHTML = x + y
        } else if (amal == "-") {
            h2.innerHTML = x - y
        } else if (amal == "*") {
            h2.innerHTML = x * y
        } else if (amal == "/") {
            if (x == 0 || y == 0) {
                alert("0 clear")
            } else {

                h2.innerHTML = x / y
            }
        }

    } else {
        alert("pleas again")
    }






}





function para(uo) {
    console.log(uo);
    uo.style.border = "1px solid red"

}