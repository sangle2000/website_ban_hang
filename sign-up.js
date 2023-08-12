const $ = document.querySelector.bind(document)

const userName = $('.user-name__input')
const password = $('.password__input')
const confirmPassword = $('.confirm-password__input')

const submit = $('.submit-sign-up')

const errorUsername = $('.error-user-name')
const errorConfirmPass = $('.error_confirm')

var check_exist = false

const storedData = localStorage.getItem('user');
// console.log("Store Data",storedData)

var userData = JSON.parse(storedData);
// console.log("User Data",userData)

console.log(userData)

submit.onclick = () => {

    if(userData !== null){
        for(let i = 0; i < userData.length; i++){

            if(userData[i]['user-name'] === userName.value){
                errorUsername.classList.add('active-error')
                check_exist = true
                break
            } else {
                check_exist = false
            }
        }
    } else {
        userData = []
    }

    if(!check_exist) {
        if (confirmPassword.value === password.value){
            userData.push({
                "user-name": userName.value,
                "password": password.value
            })

            localStorage.setItem('user', JSON.stringify(userData));

            alert("Sign in success")
            location.href = "home.html"

        } else {
            errorConfirmPass.classList.add('active-error')
        }
    }
}

userName.onfocus = () => {
    errorUsername.classList.remove('active-error')
}

confirmPassword.onfocus = () => {
    errorConfirmPass.classList.remove('active-error')
}