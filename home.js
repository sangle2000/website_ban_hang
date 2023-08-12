const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// const bodyPart = $(body)

const homePage = $('.home-page')
const introduce = $('.introduce')
const store = $('.store')
const contact = $('.contact')
const aboutUs = $('.content__about-us')
const content = $('.content')

const homeImage = $('.content__image-tc')
const introduceImage = $('.content__image-gt')

const productStore = $('.product__store')
const totalPriceShow = $('.user-cart-bill-price')

const userInfomation = $('.header__user')
const login = $('.header__form')
const userAction = $('.header__user-action')
const logOut = $('.user-action-log-out')
const userCart = $('.header__user-cart')
const userItemCart = $('.user__item-cart')

const contentTitle = $('.content__title')
const contentProduct = $('.content__product')
const contentProduct2 = $('.content__product-2')

const productList = $$('.product__store-image')

const cartHidden = $('.cart-icon')
const cart = $('.cart')
const addCart = $$('.product__store-item-btn')
const cartList = $('.cart-item-list')

const btnDown = $$('.select-quantity-down')
const btnUp = $$('.select-quantity-up')
const inputQuantity = $$('.input-quantity')

const btnPayContainer = $('.btn-pay-container') 

const priceItemChoose = $$('.item-detail-choose--price')
const selectWeight = $$('.weight-list')

const detailList = $$('.item-detail-list')
const submitItemBtn = $$('.submit-item-btn')

const quickChooseItem = $$('.quick-choose-item')
const quickContainer = $('.quick-choose-item-container')

const headerContainer = $('.header__container')

const userCartPay = $('.user-cart-pay')
const userCartInfoList = $('.user-cart-item-info-list')
const footerContact = $('.footer__contact')
const footerPage = $('.footer__page')

const famousItem = $('.famous-item')
const famousItemBtn = $$('.product__store-item-btn-top')
const famousItemImage = $$('.product__store-image-top')

const storedData = localStorage.getItem('user');
const totalUserCart = $('.user-cart-bill-detail')

var userData = JSON.parse(storedData);

var accountActive = false

var currentItemList

var checkCartOpen = false

const listItemDetail = [
    {
        id: 0,
        image: "./assest/images/Biscotti hạt tổng hợp - ảnh sp.jpg",
        name: "Biscotti hạt tổng hợp",
        price: 25000,
        price_show: "25.000VNĐ"
    },
    {
        id: 1,
        image: "./assest/images/Biscotti Matcha - ảnh sp.jpg",
        name: "Biscotti nguyên cám vị Matcha",
        price: 25000,
        price_show: "25.000VNĐ"
    },
    {
        id: 2,
        image: "./assest/images/Biscotti socola - ảnh sp.jpg",
        name: "Biscotti nguyên cám vị Chocolate",
        price: 25000,
        price_show: "25.000VNĐ"
    },
    {
        id: 3,
        image: "./assest/images/Granola - ảnh sp.jpg",
        name: "Granola mix 11 vị",
        price: 35000,
        price_show: "35.000VNĐ"
    },
    {
        id: 4,
        image: "./assest/images/Hạnh nhân.jpg",
        name: "Hạt hạnh nhân nứt vỏ",
        price: 140000,
        price_show: "140.000VNĐ"
    },
    {
        id: 5,
        image: "./assest/images/macca.jpg",
        name: "Hạt Macca sấy chín nứt vỏ",
        price: 100000,
        price_show: "100.000VNĐ"
    },
    {
        id: 6,
        image: "./assest/images/Yến mạch.jpg",
        name: "Yến mạch tươi",
        price: 50000,
        price_show: "50.000VNĐ"
    },
    {
        id: 7,
        image: "./assest/images/bmd.png",
        name: "Bánh mì đen nguyên cám",
        price: 30000,
        price_show: "60.000VNĐ"
    },
    {
        id: 8,
        image: "./assest/images/bd.jpg",
        name: "Biscotti vị dừa",
        price: 25000,
        price_show: "25.000VNĐ"
    }
]

const listItemTopDetail = [
    {
        id: 3,
        image: "./assest/images/Granola - ảnh sp.jpg",
        name: "Granola mix 11 vị",
        price: 35000,
        price_show: "35.000VNĐ"
    },
    {
        id: 1,
        image: "./assest/images/Biscotti Matcha - ảnh sp.jpg",
        name: "Biscotti nguyên cám vị Matcha",
        price: 25000,
        price_show: "25.000VNĐ"
    },
    {
        id: 5,
        image: "./assest/images/macca.jpg",
        name: "Hạt Macca sấy chín nứt vỏ",
        price: 100000,
        price_show: "100.000VNĐ"
    }

]

function userCartFunction() {

    if (!(userData[currentUser]['cart'].length === 0)) {

        let listItem = []
        let userListItem = []
        let total = 0

        currentItemList = userData[currentUser]['cart'].length
        
        for(let i = 0; i < userData[currentUser]['cart'].length; i++){
            let itemImage = userData[currentUser]['cart'][i].image
            let itemName = userData[currentUser]['cart'][i].name
            let itemPrice = userData[currentUser]['cart'][i].price_show
            let itemQuanlity = userData[currentUser]['cart'][i].quanlity

            total += userData[currentUser]['cart'][i].price

            listItem.push(`<div class="item-cart">
                <img src="${itemImage}" class="item-image--cart">
                <p class="item-name--cart">${itemName}</p>
                <p class="item-price--cart">${itemPrice} VNĐ</p>
                <p class="item-quanlity--cart">Số lượng: ${itemQuanlity}</p>
                <i class="fa-solid fa-trash-can delete-in-cart"></i>
            </div>`)

        }

        // listItem.push(`<p class="total-cost">Tổng tiền: ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ</p>`)

        userListItem.push(
            `
                <p class="user__cart-total-cost"><span>Tổng tiền hàng:</span> <span> ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ </span></p>
                <p class="user__cart-total-cost"><span>Phí vận chuyển:</span> <span> 30.000 VNĐ </span></p>
                <p class="user__cart-total-cost"><span>Tổng tiền:</span> <span> ${(total + 30000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ </span></p>
            `
        )

        totalUserCart.innerHTML = userListItem.join('')

        const showItemList = listItem.join('')

        userCartInfoList.innerHTML = showItemList

        deleteInCart()
    } else {
        userCartInfoList.innerHTML = `<p class="no-item" style="font-size: 1.2rem;">Chưa có sản phẩm nào trong giỏ hàng</p>`

        userListItem = []

        userListItem.push(
            `
                <p class="user__cart-total-cost"><span>Tổng tiền hàng:</span> <span> 0 VNĐ </span></p>
                <p class="user__cart-total-cost"><span>Tổng tiền:</span> <span> 0 VNĐ </span></p>
            `
        )
        totalUserCart.innerHTML = userListItem.join('')
    }
}

function carItemList() {

    userItemCart.innerHTML = userData[currentUser]['cart'].length
    
    if (!(userData[currentUser]['cart'].length === 0)) {

        let listItem = []
        let total = 0

        currentItemList = userData[currentUser]['cart'].length

        for(let i = 0; i < userData[currentUser]['cart'].length; i++){
            let itemImage = userData[currentUser]['cart'][i].image
            let itemName = userData[currentUser]['cart'][i].name
            let itemPrice = userData[currentUser]['cart'][i].price_show
            let itemQuanlity = userData[currentUser]['cart'][i].quanlity

            total += userData[currentUser]['cart'][i].price

            listItem.push(`<div class="item-cart">
                <img src="${itemImage}" class="item-image--cart">
                <p class="item-name--cart">${itemName}</p>
                <p class="item-price--cart">${itemPrice} VNĐ</p>
                <p class="item-quanlity--cart">Số lượng: ${itemQuanlity}</p>
                <i class="fa-solid fa-trash-can delete"></i>
            </div>`)
        }

        totalPriceShow.innerHTML = `<p class="total-cost">Tổng tiền: ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ</p>`

        const showItemList = listItem.join('')

        cartList.innerHTML = showItemList

        // btnPayContainer.classList.remove('hide')

        btnPayContainer.innerHTML = `<button class="btn-pay">Thanh toán</button>`

        btnPay = $('.btn-pay')
        checkCartOpen = true

        checkCart(true)

    } else {
        cartList.innerHTML = `<p class="no-item">Chưa có sản phẩm nào trong giỏ hàng <br> <span class="text-fun">Thêm gì đó vào giỏ hàng của mình nhé :></span></p>`
        // btnPayContainer.innerHTML = ``
        totalPriceShow.innerHTML = `<p class="total-cost">Tổng tiền: ${0} VNĐ</p>`
        // btnPayContainer.classList.add('hide')

        const quickBuy = $('.text-fun')

        checkCart(false)

        quickBuy.onclick = () => {
            store.classList.add('active')
            introduce.classList.remove('active')
            homePage.classList.remove('active')
            contact.classList.remove('active')
            footerContact.classList.add('hide')
            famousItem.classList.add('hide')

            // e.preventDefault()

            contentTitle.classList.add('hide')
            contentProduct.classList.add('hide')
            contentProduct2.classList.add('hide')
            aboutUs.classList.add('hide')
            productStore.classList.remove('hide')
            content.classList.remove('hide')
            userCartPay.classList.add('hide')

            homeImage.classList.add('hide')
            introduceImage.classList.add('hide')

            for (let j = 0; j < detailList.length; j++) {
                detailList[j].classList.add('hide')
            }
            hideCart()
        }
    }
}

if(userData !== null){

    for(let i = 0; i < userData.length; i++){

        if(userData[i]['active'] === 1){
            var currentUser = i
            login.classList.toggle('show')
            userInfomation.classList.toggle('show')
            userInfomation.innerHTML = `<span class="user-info">Hello, </span><span class="user-info">${userData[i]['user-name']}</span> <i class="header__user-icon fa-solid fa-user" style="color: #ff0000;"></i> `
            accountActive = true
            break
        }
    }
}

document.body.addEventListener('click', hideAction, true);

function hideAction(){
    userAction.classList.add('hide')
}

function hideCart(){
    cart.classList.remove("move-back")
    cart.classList.add("move-right")
    setTimeout(() => {
        cart.classList.add("hide")
        document.body.removeEventListener('click', hideCart, true);
    }, 900) 
}

function showCart() {
    cart.classList.remove("move-right")
    cart.classList.remove("hide")
    cart.classList.add("move-back")

    carItemList()
    document.body.addEventListener('click', hideCart, true);
    cart.onmouseleave = () => {
        document.body.addEventListener('click', hideCart, true);
    }

    cart.onmousedown = () => {
        document.body.removeEventListener('click', hideCart, true);
    }
}

if(accountActive){

    if((userData[currentUser]['cart'] === undefined)) {
        userData[currentUser]['cart'] = []
    }

    carItemList()
    
    const userInfor = $('.header__user-icon')

    userInfor.onclick = () => {
        userAction.classList.toggle('hide')
    }

    logOut.onclick = () => {
        // alert("Log out")
        login.classList.toggle('show')
        userInfomation.classList.toggle('show')
        userAction.classList.add('hide')
        userData[currentUser].active = 0
        localStorage.setItem('user', JSON.stringify(userData));

        location.href = "/home.html"
    }

    userCart.onclick = () => {
        cart.classList.remove("move-right")
        cart.classList.remove("hide")
        cart.classList.add("move-back")
        carItemList()
        document.body.addEventListener('click', hideCart, true);
        cart.onmouseleave = () => {
            document.body.addEventListener('click', hideCart, true);
        }

        cart.onmousedown = () => {
            document.body.removeEventListener('click', hideCart, true);
        }
    }
} else {
    userAction.classList.add('hide')
}

function checkCart(state){

    document.body.removeEventListener('click', hideCart, true);

    const deleteItem = $$('.delete')
    const btnPay = $('.btn-pay')

    for (let i = 0; i < deleteItem.length; i++) {
        deleteItem[i].addEventListener('click', () => {
            alert("Remove success")
            userData[currentUser]['cart'].splice(i, 1)
            userCartFunction()
            carItemList()
            localStorage.setItem('user', JSON.stringify(userData));
        })
    }

    // btnPay.addEventListener('click', () => {
        
        
    // })

    btnPay.onclick = () => {
        if(state){
            userCartPay.classList.remove('hide')
            content.classList.add('hide')
    
            homePage.classList.remove('active')
            introduce.classList.remove('active')
            store.classList.remove('active')
            contact.classList.remove('active')
    
            for(let i = 0; i < detailList.length; i++){
                detailList[i].classList.add('hide')
            }
    
            userCartFunction()
        } else {
            alert("Vui lòng chọn sản phẩm vào giỏ hàng")
        }
    }
}

function deleteInCart() {
    document.body.removeEventListener('click', hideCart, true);
    
    const deleteItemCart = $$('.delete-in-cart')

    for (let i = 0; i < deleteItemCart.length; i++) {
        deleteItemCart[i].addEventListener('click', () => {
            alert("Remove Item Success")
            userData[currentUser]['cart'].splice(i, 1)
            localStorage.setItem('user', JSON.stringify(userData));
            carItemList()
            userCartFunction()
        })
    }
}

homePage.onclick = (e) => {
    homePage.classList.add('active')
    introduce.classList.remove('active')
    store.classList.remove('active')
    contact.classList.remove('active')
    famousItem.classList.remove('hide')
    
    e.preventDefault()
    
    footerContact.classList.remove('hide')
    contentTitle.classList.remove('hide')
    aboutUs.classList.remove('hide')
    contentProduct.classList.remove('hide')
    contentProduct2.classList.remove('hide')
    productStore.classList.add('hide')
    content.classList.remove('hide')
    userCartPay.classList.add('hide')

    homeImage.classList.remove('hide')
    introduceImage.classList.add('hide')

    for (let j = 0; j < detailList.length; j++) {
        detailList[j].classList.add('hide')
    }
}

introduce.onclick = (e) => {
    introduce.classList.add('active')
    homePage.classList.remove('active')
    store.classList.remove('active')
    contact.classList.remove('active')
    footerContact.classList.add('hide')
    famousItem.classList.add('hide')

    e.preventDefault()

    aboutUs.classList.remove('hide')
    contentTitle.classList.add('hide')
    contentProduct.classList.add('hide')
    contentProduct2.classList.add('hide')
    productStore.classList.add('hide')
    content.classList.remove('hide')
    userCartPay.classList.add('hide')

    homeImage.classList.add('hide')
    introduceImage.classList.remove('hide')

    for (let j = 0; j < detailList.length; j++) {
        detailList[j].classList.add('hide')
    }
}

store.onclick = (e) => {
    store.classList.add('active')
    introduce.classList.remove('active')
    homePage.classList.remove('active')
    contact.classList.remove('active')
    footerContact.classList.add('hide')
    famousItem.classList.add('hide')

    // e.preventDefault()

    contentTitle.classList.add('hide')
    contentProduct.classList.add('hide')
    contentProduct2.classList.add('hide')
    aboutUs.classList.add('hide')
    productStore.classList.remove('hide')
    content.classList.remove('hide')
    userCartPay.classList.add('hide')

    homeImage.classList.add('hide')
    introduceImage.classList.add('hide')

    for (let j = 0; j < detailList.length; j++) {
        detailList[j].classList.add('hide')
    }
}

contact.onclick = (e) => {
    contact.classList.add('active')
    introduce.classList.remove('active')
    store.classList.remove('active')
    homePage.classList.remove('active')
    homeImage.classList.add('hide')
    introduceImage.classList.add('hide')
    introduce.classList.remove('hide')
    store.classList.remove('hide')
    footerContact.classList.remove('hide')
    famousItem.classList.add('hide')
    // e.preventDefault()

    content.classList.add('hide')

    for (let j = 0; j < detailList.length; j++) {
        detailList[j].classList.add('hide')
    }
    userCartPay.classList.add('hide')
}

cartHidden.onclick = () => {
    cart.classList.remove("move-back")
    cart.classList.add("move-right")
    
    setTimeout(() => {
        cart.classList.add("hide")
        document.body.removeEventListener('click', hideCart, true);
    }, 900)
}

function hideQuickChoose() {
    quickContainer.classList.remove('show')

    for (let j = 0; j < quickChooseItem.length; j++){
        quickChooseItem[j].classList.add('hide')
        inputQuantity[j + 9].value = "1"
        selectWeight[j + 9].value = ""
        priceItemChoose[j + 9].innerHTML = `<p class="item-detail-choose--price">${listItemDetail[j].price_show}</p>`
    }

    content.classList.remove('black')
    headerContainer.classList.remove('black')
    footerPage.classList.remove('black')

    document.body.removeEventListener('click', hideQuickChoose, true)
}

function handleBuyItem(state, currentQuickItem, listAction) {
    footerContact.classList.add('hide')
    var inputQuantityValue = 1
    var totalCost = 0
    var totalCostShow = ""

    if(!state){
        console.log("quick")
        var quickItemIndex = currentQuickItem + 9
    } else {
        console.log("detail")
        var quickItemIndex = currentQuickItem
    }
    
    for (let j = 0; j < listAction.length; j++) {
        if(j === currentQuickItem) {
            listAction[j].classList.remove('hide')
        } else {
            listAction[j].classList.add('hide')
        }
    }
    
    btnDown[quickItemIndex].onclick = () => {

        if(selectWeight[quickItemIndex].value !== "") {

            inputQuantityValue = parseInt(inputQuantity[quickItemIndex].value)
            if (inputQuantity[quickItemIndex].value == 1){
                inputQuantity[quickItemIndex].value = 1 
            } else {
                inputQuantity[quickItemIndex].value = inputQuantityValue - 1
            }
            
            totalCost = parseInt(inputQuantity[quickItemIndex].value) * listItemDetail[currentQuickItem].price * (parseInt(selectWeight[quickItemIndex].value)/100)
        
            totalCostShow = totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        
            priceItemChoose[quickItemIndex].innerHTML = `<p class="item-detail-choose--price">${totalCostShow}VNĐ</p>`
        } else {
            alert("Vui lòng chọn khối lượng sản phẩm")
        }
    }

    btnUp[quickItemIndex].onclick = () => {
        
        if(selectWeight[quickItemIndex].value !== "") {
            inputQuantityValue = parseInt(inputQuantity[quickItemIndex].value)
            inputQuantity[quickItemIndex].value = inputQuantityValue + 1
        
            totalCost = parseInt(inputQuantity[quickItemIndex].value) * listItemDetail[currentQuickItem].price * (parseInt(selectWeight[quickItemIndex].value)/100)
        
            totalCostShow = totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        
            priceItemChoose[quickItemIndex].innerHTML = `<p class="item-detail-choose--price">${totalCostShow}VNĐ</p>`
        } else {
            alert("Vui lòng chọn khối lượng sản phẩm")
        }
    }

    selectWeight[quickItemIndex].onchange = () => {
        totalCost = parseInt(inputQuantity[quickItemIndex].value) * listItemDetail[currentQuickItem].price * (parseInt(selectWeight[quickItemIndex].value)/100)

        totalCostShow = totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

        priceItemChoose[quickItemIndex].innerHTML = `<p class="item-detail-choose--price">${totalCostShow}VNĐ</p>`
        console.log(selectWeight[quickItemIndex].value)
    }


    inputQuantity[quickItemIndex].onchange = () => {
        if(selectWeight[quickItemIndex].value !== "") {
            totalCost = parseInt(inputQuantity[quickItemIndex].value) * listItemDetail[currentQuickItem].price * (parseInt(selectWeight[quickItemIndex].value)/100)
        
            totalCostShow = totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        
            priceItemChoose[quickItemIndex].innerHTML = `<p class="item-detail-choose--price">${totalCostShow}VNĐ</p>`
        } else {
            alert("Vui lòng chọn khối lượng sản phẩm")
        }
    }

    submitItemBtn[quickItemIndex].onclick = () => {
        let itemExist = false
        // console.log(itemExist)
        if(selectWeight[quickItemIndex].value !== ""){
            if(accountActive){
                alert("Đã thêm vào giỏ hàng")
                if(userData[currentUser].cart.length === 0){
                    userData[currentUser].cart.push({
                        id: currentQuickItem,
                        name: listItemDetail[currentQuickItem].name,
                        image: listItemDetail[currentQuickItem].image,
                        price_show: totalCostShow,
                        price: totalCost,
                        quanlity: parseInt(inputQuantity[quickItemIndex].value)
                    })
                } else {
                    for (let k = 0; k < userData[currentUser]['cart'].length; k++) {
                        if (userData[currentUser]['cart'][k]['id'] == currentQuickItem){
                            itemExist = true
                            var currentItem = k
                            break
                        } else {
                            itemExist = false
                        }
                    }

                    if(itemExist) {
                        userData[currentUser]['cart'][currentItem]['price'] += totalCost
                        userData[currentUser]['cart'][currentItem]['price_show'] = userData[currentUser]['cart'][currentItem]['price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                        userData[currentUser]['cart'][currentItem]['quanlity'] += parseInt(inputQuantity[quickItemIndex].value)
                    } else {
                        userData[currentUser].cart.push({
                            id: currentQuickItem,
                            name: listItemDetail[currentQuickItem].name,
                            image: listItemDetail[currentQuickItem].image,
                            price_show: totalCostShow,
                            price: totalCost,
                            quanlity: parseInt(inputQuantity[quickItemIndex].value)
                        })
                    }
                }

                localStorage.setItem('user', JSON.stringify(userData));

                carItemList()

                if (!state) {
                    showCart()
                }

            } else {
                alert("Vui lòng đăng nhập để mua sản phẩm")
            }
        } else {
            alert("Vui lòng chọn khối lượng sản phẩm")
        }
    }
    
}

for (let i = 0; i < addCart.length; i++) {
    var currentQuickItem = 0
    addCart[i].onclick = () => {
        // cart.classList.remove("move-right")
        // cart.classList.remove("hide")
        // cart.classList.add("move-back")

        quickContainer.classList.add('show')
        
        for (let j = 0; j < quickChooseItem.length; j++){
            if(j == i){
                currentQuickItem = j
                quickChooseItem[j].classList.remove('hide')
            } else {
                quickChooseItem[j].classList.add('hide')
            }
        }
        
        content.classList.add('black')
        headerContainer.classList.add('black')
        footerPage.classList.add('black')
        
        
        document.body.addEventListener('click', hideQuickChoose, true)
        
        quickChooseItem[currentQuickItem].onmouseleave = () => {
            document.body.addEventListener('click', hideQuickChoose, true)
        }
        
        console.log(quickChooseItem[currentQuickItem])
        
        quickChooseItem[currentQuickItem].onmousedown = () => {
            document.body.removeEventListener('click', hideQuickChoose, true)
        }

        handleBuyItem(false, currentQuickItem, quickChooseItem)
    }
}


for (let i = 0; i < productList.length; i++) {
    productList[i].onclick = () => {
        footerContact.classList.add('hide')
        if((detailList[i].classList.contains('hide'))) {
            inputQuantity[i].value = "1"
            selectWeight[i].value = ""
            priceItemChoose[i].innerHTML = `<p class="item-detail-choose--price">${listItemDetail[i].price_show}</p>`
        }
        
        var inputQuantityValue = 1
        var totalCost = 0
        var totalCostShow = ""
        
        if(i < 8){
            productStore.classList.add('hide')
            content.classList.add('hide')
            homeImage.classList.add('hide')
            introduceImage.classList.add('hide')
        }
        
        for (let j = 0; j < detailList.length; j++) {
            if(j === i) {
                detailList[j].classList.remove('hide')
            } else {
                detailList[j].classList.add('hide')
            }
        }
        
        btnDown[i].onclick = () => {
    
            if(selectWeight[i].value !== "") {
    
                inputQuantityValue = parseInt(inputQuantity[i].value)
                if (inputQuantity[i].value == 1){
                    inputQuantity[i].value = 1 
                } else {
                    inputQuantity[i].value = inputQuantityValue - 1
                }
                
                totalCost = parseInt(inputQuantity[i].value) * listItemDetail[i].price * (parseInt(selectWeight[i].value)/100)
            
                totalCostShow = totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            
                priceItemChoose[i].innerHTML = `<p class="item-detail-choose--price">${totalCostShow}VNĐ</p>`
            } else {
                alert("Vui lòng chọn khối lượng sản phẩm")
            }
        }
    
        btnUp[i].onclick = () => {
            
            if(selectWeight[i].value !== "") {
                inputQuantityValue = parseInt(inputQuantity[i].value)
                inputQuantity[i].value = inputQuantityValue + 1
            
                totalCost = parseInt(inputQuantity[i].value) * listItemDetail[i].price * (parseInt(selectWeight[i].value)/100)
            
                totalCostShow = totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            
                priceItemChoose[i].innerHTML = `<p class="item-detail-choose--price">${totalCostShow}VNĐ</p>`
            } else {
                alert("Vui lòng chọn khối lượng sản phẩm")
            }
        }
    
        selectWeight[i].onchange = () => {
            totalCost = parseInt(inputQuantity[i].value) * listItemDetail[i].price * (parseInt(selectWeight[i].value)/100)
    
            totalCostShow = totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    
            priceItemChoose[i].innerHTML = `<p class="item-detail-choose--price">${totalCostShow}VNĐ</p>`
        }
    
        inputQuantity[i].onchange = () => {
            if(selectWeight[i].value !== "") {
                totalCost = parseInt(inputQuantity[i].value) * listItemDetail[i].price * (parseInt(selectWeight[i].value)/100)
            
                totalCostShow = totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            
                priceItemChoose[i].innerHTML = `<p class="item-detail-choose--price">${totalCostShow}VNĐ</p>`
            } else {
                alert("Vui lòng chọn khối lượng sản phẩm")
            }
        }
    
        submitItemBtn[i].onclick = () => {
            let itemExist = false
            // console.log(itemExist)
            if(selectWeight[i].value !== ""){
                if(accountActive){
                    alert("Đã thêm vào giỏ hàng")
                    if(userData[currentUser].cart.length === 0){
                        userData[currentUser].cart.push({
                            id: i,
                            name: listItemDetail[i].name,
                            image: listItemDetail[i].image,
                            price_show: totalCostShow,
                            price: totalCost,
                            quanlity: parseInt(inputQuantity[i].value)
                        })
                    } else {
                        for (let k = 0; k < userData[currentUser]['cart'].length; k++) {
                            if (userData[currentUser]['cart'][k]['id'] == i){
                                itemExist = true
                                var currentItem = k
                                break
                            } else {
                                itemExist = false
                            }
                        }
    
                        if(itemExist) {
                            userData[currentUser]['cart'][currentItem]['price'] += totalCost
                            userData[currentUser]['cart'][currentItem]['price_show'] = userData[currentUser]['cart'][currentItem]['price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                            userData[currentUser]['cart'][currentItem]['quanlity'] += parseInt(inputQuantity[i].value)
                        } else {
                            userData[currentUser].cart.push({
                                id: i,
                                name: listItemDetail[i].name,
                                image: listItemDetail[i].image,
                                price_show: totalCostShow,
                                price: totalCost,
                                quanlity: parseInt(inputQuantity[i].value)
                            })
                        }
                    }
    
                    localStorage.setItem('user', JSON.stringify(userData));
    
                    carItemList()
    
                } else {
                    alert("Vui lòng đăng nhập để mua sản phẩm")
                }
            } else {
                alert("Vui lòng chọn khối lượng sản phẩm")
            }
        }
    }
}

for(let i = 0; i < famousItemBtn.length; i++){
    famousItemBtn[i].onclick = () => {
        var currentQuickItem = listItemTopDetail[i].id

        quickContainer.classList.add('show')
        
        for (let j = 0; j < quickChooseItem.length; j++){
            if(j == currentQuickItem){
                quickChooseItem[j].classList.remove('hide')
            } else {
                quickChooseItem[j].classList.add('hide')
            }
        }
        
        content.classList.add('black')
        headerContainer.classList.add('black')
        footerPage.classList.add('black')
        
        
        document.body.addEventListener('click', hideQuickChoose, true)
        
        quickChooseItem[currentQuickItem].onmouseleave = () => {
            document.body.addEventListener('click', hideQuickChoose, true)
        }
        
        quickChooseItem[currentQuickItem].onmousedown = () => {
            document.body.removeEventListener('click', hideQuickChoose, true)
        }

        handleBuyItem(false, currentQuickItem, quickChooseItem)
    }

    console.log(famousItemImage[i])

    famousItemImage[i].onclick = () => {
        var currentQuickItem = listItemTopDetail[i].id

        productStore.classList.add('hide')
        content.classList.add('hide')
        homeImage.classList.add('hide')
        introduceImage.classList.add('hide')

        homePage.classList.remove('active')
        introduce.classList.remove('active')
        store.classList.remove('active')
        contact.classList.remove('active')

        for (let j = 0; j < detailList.length; j++) {
            if((detailList[j].classList.contains('hide'))) {
                inputQuantity[j].value = "1"
                selectWeight[j].value = ""
                priceItemChoose[j].innerHTML = `<p class="item-detail-choose--price">${listItemDetail[j].price_show}</p>`
            }
            if(j == currentQuickItem) {
                detailList[j].classList.remove('hide')
            } else {
                detailList[j].classList.add('hide')
            }
        }
        handleBuyItem(true, currentQuickItem, detailList)
    }
}

