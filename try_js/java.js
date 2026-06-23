

// let da = 0
// function para(number) {

//     if (number.length == 11) {
//         alert("welcome")
//         return
//     } else if (da == 3) {
//         alert("you cant")
//         return
//     } else {
//         da++
//         para(prompt("try again"))
//     }

// }



const span = document.getElementById("span")
const menu = document.getElementById("menu")

let test = false
span.onclick = function para() {

    if (test) {

        span.style.rotate = "0deg"
        span.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 24 24"><linearGradient id="oDXcg7ctzdm-e4MvNKv-ta_0mAtpPoNoAEd_gr1" x1="3.086" x2="20.914" y1="3.086" y2="20.914" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".6"></stop><stop offset="1" stop-color="#fff" stop-opacity=".3"></stop></linearGradient><path fill="url(#oDXcg7ctzdm-e4MvNKv-ta_0mAtpPoNoAEd_gr1)" d="M22,12c0,1.105-0.895,2-2,2H4c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h16 C21.105,10,22,10.895,22,12z M4,7h16c1.105,0,2-0.895,2-2c0-1.105-0.895-2-2-2H4C2.895,3,2,3.895,2,5C2,6.105,2.895,7,4,7z M20,17 H4c-1.105,0-2,0.895-2,2c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2C22,17.895,21.105,17,20,17z"></path><linearGradient id="oDXcg7ctzdm-e4MvNKv-tb_0mAtpPoNoAEd_gr2" x1="3.086" x2="20.914" y1="3.086" y2="20.914" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".6"></stop><stop offset=".493" stop-color="#fff" stop-opacity="0"></stop><stop offset=".997" stop-color="#fff" stop-opacity=".3"></stop></linearGradient><path fill="url(#oDXcg7ctzdm-e4MvNKv-tb_0mAtpPoNoAEd_gr2)" d="M20,3.5c0.827,0,1.5,0.673,1.5,1.5 S20.827,6.5,20,6.5H4C3.173,6.5,2.5,5.827,2.5,5S3.173,3.5,4,3.5H20 M20,10.5c0.827,0,1.5,0.673,1.5,1.5s-0.673,1.5-1.5,1.5H4 c-0.827,0-1.5-0.673-1.5-1.5s0.673-1.5,1.5-1.5H20 M20,17.5c0.827,0,1.5,0.673,1.5,1.5s-0.673,1.5-1.5,1.5H4 c-0.827,0-1.5-0.673-1.5-1.5s0.673-1.5,1.5-1.5H20 M20,3H4C2.895,3,2,3.895,2,5c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 C22,3.895,21.105,3,20,3L20,3z M20,10H4c-1.105,0-2,0.895-2,2c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 C22,10.895,21.105,10,20,10L20,10z M20,17H4c-1.105,0-2,0.895-2,2c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 C22,17.895,21.105,17,20,17L20,17z"></path></svg>'
        menu.style.left = "-100%"
    } else {

        span.style.rotate = "360deg"
        menu.style.left = "-0%"
        span.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 24 24"><linearGradient id="Y6xGfEZxwcO24_1tSVfnia_pfF6HpODcjW0_gr1" x1="3.879" x2="20.121" y1="3.879" y2="20.121" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".6"></stop><stop offset="1" stop-color="#fff" stop-opacity=".3"></stop></linearGradient><path fill="url(#Y6xGfEZxwcO24_1tSVfnia_pfF6HpODcjW0_gr1)" d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12 C21,19.657,19.657,21,18,21z"></path><linearGradient id="Y6xGfEZxwcO24_1tSVfnib_pfF6HpODcjW0_gr2" x1="3.879" x2="20.121" y1="3.879" y2="20.121" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".6"></stop><stop offset=".493" stop-color="#fff" stop-opacity="0"></stop><stop offset=".997" stop-color="#fff" stop-opacity=".3"></stop></linearGradient><path fill="url(#Y6xGfEZxwcO24_1tSVfnib_pfF6HpODcjW0_gr2)" d="M18,3.5c1.378,0,2.5,1.122,2.5,2.5v12 c0,1.378-1.122,2.5-2.5,2.5H6c-1.378,0-2.5-1.122-2.5-2.5V6c0-1.378,1.122-2.5,2.5-2.5H18 M18,3H6C4.343,3,3,4.343,3,6v12 c0,1.657,1.343,3,3,3h12c1.657,0,3-1.343,3-3V6C21,4.343,19.657,3,18,3L18,3z"></path><linearGradient id="Y6xGfEZxwcO24_1tSVfnic_pfF6HpODcjW0_gr3" x1="7.791" x2="16.209" y1="7.79" y2="16.209" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".7"></stop><stop offset=".519" stop-color="#fff" stop-opacity=".45"></stop><stop offset="1" stop-color="#fff" stop-opacity=".55"></stop></linearGradient><path fill="url(#Y6xGfEZxwcO24_1tSVfnic_pfF6HpODcjW0_gr3)" d="M13.403,12l2.812-2.812	c0.384-0.384,0.384-1.008,0-1.392l-0.011-0.011c-0.384-0.384-1.008-0.384-1.392,0L12,10.597L9.188,7.785	c-0.384-0.384-1.008-0.384-1.392,0L7.785,7.796c-0.384,0.385-0.384,1.008,0,1.392L10.597,12l-2.812,2.812	c-0.384,0.384-0.384,1.008,0,1.392l0.011,0.011c0.384,0.384,1.008,0.384,1.392,0L12,13.403l2.812,2.812	c0.384,0.384,1.008,0.384,1.392,0l0.011-0.011c0.384-0.384,0.384-1.008,0-1.392L13.403,12z"></path></svg>'
    }


    test = !test


}