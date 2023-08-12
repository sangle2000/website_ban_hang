const $ = document.querySelector.bind(document)

const btn_login = $(".login_btn")

const result = $(".result")

// function alerInfo(state){
//     alert(state)
// }

var x1 = 8
var x2 = 100

btn_login.onclick = () => {
    result.innerHTML = `<h1>${x1}</h1> <h1>${x2}</h1>`
}