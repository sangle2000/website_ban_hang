const $ = document.querySelector.bind(document)

const userName = $('.login-user-name__input')
const password = $('.login-password__input')

const submitLogin = $('.submit-login')

const errorLogin = $('.error-user')

var checkActive = false

submitLogin.onclick = () => {
    const storedData = localStorage.getItem('user');
    var userData = JSON.parse(storedData);

    if(userData !== null){
        for(let i = 0; i < userData.length; i++){

            if(userData[i]['user-name'] !== userName.value || userData[i]['password'] !== password.value){
                userData[i].active = 0
            } else {
                userData[i].active = 1
                checkActive = true
            }
        }

    
        localStorage.setItem('user', JSON.stringify(userData));

        if (!checkActive) {
            errorLogin.classList.add("active-error")
        } else {
            alert("Login success")
            location.href = "./home.html"
        }
    } else {
        errorLogin.classList.add("active-error")
    }
}

userName.onfocus = () => {
    errorLogin.classList.remove("active-error")
}