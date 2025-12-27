let cart = {};

function addToCart(name, price, image) {

    if (cart[name]) {
        cart[name].quantity++;
    } else {
        cart[name] = {
            name,
            price,
            image,
            quantity: 1
        };
    }

    updateCartUI();
    toggleCart(true);
}

function updateCartUI() {
    let cartItems = document.getElementById("cartItems");
    let sidebarTotal = document.getElementById("sidebarTotal");
    let count = 0;
    let total = 0;

    cartItems.innerHTML = "";

    for (let key in cart) {
        let item = cart[key];
        count += item.quantity;
        total += item.price * item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}">
                <div>
                    <h4>${item.name}</h4>
                    <p>PKR ${item.price}</p>
                    <p>Qty: ${item.quantity}</p>
                </div>
            </div>
        `;
    }

    document.getElementById("cartCount").innerText = count;
    document.getElementById("totalPrice").innerText = total;
    sidebarTotal.innerText = total;
}

function toggleCart(forceOpen = false) {
    const sidebar = document.getElementById("cartSidebar");
    forceOpen ? sidebar.classList.add("active") : sidebar.classList.toggle("active");
}

function checkout() {
    if (Object.keys(cart).length === 0) {
        alert("Cart is empty!");
        return;
    }

    alert("Order placed successfully!");
    alert("Thank you for choosing Golden Bakery 💛");

    cart = {};
    updateCartUI();
    toggleCart(false);
}

function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById("themeBtn");

    if (body.classList.contains("light-theme")) {
        body.classList.replace("light-theme", "dark-theme");
        btn.innerText = "☀️ Light Mode";
    } else {
        body.classList.replace("dark-theme", "light-theme");
        btn.innerText = "🌙 Dark Mode";
    }
}
