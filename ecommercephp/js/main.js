// RUN WOW.JS
new WOW().init();

// GLOBAL
var products = [];
var cartItems = [];
var cart_n = document.getElementById("cart_n");

// DIVS
var fruitDIV = document.getElementById("fruitDIV");
var juiceDIV = document.getElementById("juiceDIV");
var saladDIV = document.getElementById("saladDIV");

// INFORMATION
var FRUIT = [
    { name: 'Apple', price: 1 },
    { name: 'Orange', price: 1 },
    { name: 'Cherry', price: 1 },
    { name: 'Strawberry', price: 1 },
    { name: 'Kiwi', price: 1 },
    { name: 'Banana', price: 1 }
];

var JUICE = [
    { name: 'Juice #1', price: 10 },
    { name: 'Juice #2', price: 11 },
    { name: 'Juice #3', price: 12 }
];

var SALAD = [
    { name: 'Salad #1', price: 11 },
    { name: 'Salad #2', price: 12 },
    { name: 'Salad #3', price: 15 }
];

// HTML Functions
function HTMLfruitProduct(con) {
    let URL = `./img/Fruit${con}.jpg`;
    let btn = `btnFruit${con}`;
    return `
        <div class="col-md-4 wow zoomIn" data-wow-duration="10s" data-wow-offset="240">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">${FRUIT[con - 1].name}</p>
                    <p class="card-text">${FRUIT[con - 1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart('${FRUIT[con-1].name}', '${FRUIT[con - 1].price}', '${URL}', '${con}', '${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                            <button type="button" onclick="window.location.href='cart.php'" class="btn btn-sm btn-outline-secondary">Buy</button>
                        </div>
                        <small class="text-muted">Free Shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `;
}


function HTMLjuiceProduct(con) {
    let URL = `./img/juice${con}.jpg`;
    let btn = `btnJuice${con}`;
    return `
        <div class="col-md-4 wow zoomIn" data-wow-duration="10s" data-wow-offset="240">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">${JUICE[con - 1].name}</p>
                    <p class="card-text">${JUICE[con - 1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart('${JUICE[con-1].name}', '${JUICE[con - 1].price}', '${URL}', '${con}', '${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                            <button type="button" onclick="window.location.href='cart.php'" class="btn btn-sm btn-outline-secondary">Buy</button>
                        </div>
                        <small class="text-muted">Free Shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function HTMLsaladProduct(con) {
    let URL = `./img/salad${con}.jpg`;
    let btn = `btnSalad${con}`;
    return `
        <div class="col-md-4 wow zoomIn" data-wow-duration="10s" data-wow-offset="240">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">${SALAD[con - 1].name}</p>
                    <p class="card-text">${SALAD[con - 1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart('${SALAD[con-1].name}', '${SALAD[con - 1].price}', '${URL}', '${con}', '${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                            <button type="button" onclick="window.location.href='cart.php'" class="btn btn-sm btn-outline-secondary">Buy</button>
                        </div>
                        <small class="text-muted">Free Shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `;
}


// ANIMATION
function animation() {
    const toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000
    });
    toast({
        type: 'success',
        title: 'Added to shopping cart'
    });
}

// CART FUNCTIONS
function cart(name, price, url, con, btncart) {
    var item = { name, price, url };
    cartItems.push(item);
    products = JSON.parse(localStorage.getItem("cart")) || [];
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display = "none";
    animation();
}

function cart2(name, price, url, con, btncart) {
    cart(name, price, url, con, btncart);  // Reuse the cart function
}

// RENDER
function render() {
    for (let index = 1; index <= 6; index++) {
        fruitDIV.innerHTML += HTMLfruitProduct(index);
    }
    for (let index = 1; index <= 3; index++) {
        juiceDIV.innerHTML += HTMLjuiceProduct(index);
        saladDIV.innerHTML += HTMLsaladProduct(index);
    }
    products = JSON.parse(localStorage.getItem("cart")) || [];
    cart_n.innerHTML = `[${products.length}]`;
}

// LOGIN 
document.getElementById("formA").addEventListener("submit", (e) => {
    e.preventDefault();
    var userLogin = document.getElementById("usera").value;
    var passLogin = document.getElementById("passworda").value;

    // Giriş bilgilerini kontrol et
    if (userLogin === "ADMIN" && passLogin === "123") {
        // Başarılı giriş, admin sayfasına yönlendir
        window.location.href = "./admin/admin.php";
    } else {
        // Başarısız giriş, kullanıcıya bir mesaj gösterme
        alert('Access denied. Please check your username and password.');
    }
});


function loadPage() {
    window.location.href = "./admin/admin.php";
}

// Rendering function
window.onload = function () {
    console.log("Page loaded"); // Debugging line
    render();
};

