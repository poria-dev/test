
// const list = document.querySelector("#list")


// const child = list.children[2].parentElement.parentElement

// console.log(child);

// child.innerHTML = "pori"
// child.style.background = "red"


function func() {
    const list = document.querySelector("#test")

    const chi = list.children[3]
    console.log(chi);
    let back = chi.previousElementSibling
    console.log(back);

    back.style.color = "red"
    back.style.opacity = "30%"

    let par = back.parentElement.children[0].children[0].children[0]
    console.log(par);

    let backfast = par.parentElement.parentElement.parentElement.children[1]
    console.log(backfast);

    backfast.style.background = "red"


    let end = backfast.children[0]
    console.log(end);

    const spa = end.children[0]
    console.log(spa);
    spa.style.background = "blue"

    let idSelect = document.getElementById("demo")


    let text = idSelect.innerHTML
    console.log(text);

    let change = idSelect.innerHTML = "<h1>welcome to your web site .... </h1>"


}


let select = document.getElementsByClassName("para")
console.log(select[2].innerHTML);

console.log(select[2].innerHTML = "hellooooooooooooo");


let chose = select[1]
console.log(chose);







const parent = document.querySelectorAll("#parentlist >li")

let opens = parent[6].innerHTML
console.log(opens);

let sas = opens.innerHTML = "777777777"
console.log(sas);

























let x = prompt("one")


if(x % 2 == 0){

    console.log("even");
    

}else{
    console.log("odd");
    
}