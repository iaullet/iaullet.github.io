$(document).ready(() =>{
    $('.order, .register, .profile').hide();
    
    $('nav ul li').on('click', event =>{
        let sectionName = $(event.currentTarget).attr('id').replace('-btn','');
        $('.section').hide();
        $('.' + sectionName).show();
    })
})
    //Cart Items
    const cartContainer = document.getElementById("cart-container");
    const checkoutContainer = document.getElementById("checkout-container");
    const productsContainer = document.getElementById("products-container");
    const itemCards = document.getElementById("items-card-container");
    const bestCards = document.getElementById("best-seller-container");
    const cartBtn = document.getElementById("cart-btn");
    const clearCartBtn = document.getElementById("clear-cart-btn");
    const totalNumberOfItems = document.getElementById("total-items");
    const cartSubTotal = document.getElementById("subtotal");
    const cartTaxes = document.getElementById("taxes");
    const cartTotal = document.getElementById("total");
    const showHideCartSpan = document.getElementById("show-hide-cart");
    const productsContainerOrder = document.getElementById("products-container-order");
    const totalItemsOrder = document.getElementById("total-items-order");
    const subtotalOrder = document.getElementById("subtotal-order");
    const taxesOrder = document.getElementById("taxes-order");
    const totalOrder = document.getElementById("total-order");
    const clearCartBtnOrder = document.getElementById("clear-cart-btn-order");
    let isCartShowing = false;

    const bestSeller = [
        {id: 1, name: "Verstappen Tee", price: 45.99, category: "Tops", url: "https://s7d2.scene7.com/is/image/aeo/0161_4720_023_f?$plp-web-desktop$&fmt=webp"} ,
        { id: 2, name: "Women's Joggers", price: 34.99, category: "Bottoms", url: "https://s7d2.scene7.com/is/image/aeo/0322_5435_329_of?$pdp-m-opt$&fmt=webp" },
        { id: 3, name: "Women's Cardigan", price: 44.99, category: "Outerwear", url: "https://s7d2.scene7.com/is/image/aeo/2534_1455_106_of?$pdp-m-opt$&fmt=webp" },
        { id: 4, name: "Cargo Shorts", price: 27.99, category: "Bottoms", url: "https://s7d2.scene7.com/is/image/aeo/0132_7878_238_of?$plp-web-mobile$&fmt=webp" },

    ]

    bestSeller.forEach(({ name, id, url }) => {
        bestCards.innerHTML += `
            <div class="product-card">
            <img src="${url} class="product-img">
            <h3>${name}</h3>
            <button 
                id="${id}" 
                class="btn add-to-cart-btn">Add to cart
            </button>
            </div>
        `;
        });
    const products = [
    { id: 1, name: "Men's Classic T-Shirt", price: 19.99, category: "Tops", url: "https://s7d2.scene7.com/is/image/aeo/1164_4821_001_of?$pdp-m-opt$&fmt=webp" },
    { id: 2, name: "Women's Skinny Jeans", price: 39.99, category: "Bottoms", url: "https://s7d2.scene7.com/is/image/aeo/0433_5417_914_of?$pdp-m-opt$&fmt=webp" },
    { id: 3, name: "Hooded Sweatshirt", price: 29.99, category: "Outerwear", url: "https://s7d2.scene7.com/is/image/aeo/0193_2721_410_f?$pdp-m-opt$&fmt=webp" },
    { id: 4, name: "Baseball Cap", price: 14.99, category: "Accessories", url: "https://s7d2.scene7.com/is/image/aeo/0221_8001_410_f?$pdp-m-opt$&fmt=webp" },
    { id: 5, name: "Women's Joggers", price: 34.99, category: "Bottoms", url: "https://s7d2.scene7.com/is/image/aeo/0322_5435_329_of?$pdp-m-opt$&fmt=webp" },
    { id: 6, name: "Women's Cardigan", price: 44.99, category: "Outerwear", url: "https://s7d2.scene7.com/is/image/aeo/2534_1455_106_of?$pdp-m-opt$&fmt=webp" },
    { id: 7, name: "Sneakers", price: 59.99, category: "Footwear", url: "https://s7d2.scene7.com/is/image/aeo/0414_6701_100_f?$pdp-m-opt$&fmt=webp" },
    { id: 8, name: "Denim Jacket", price: 49.99, category: "Outerwear", url: "https://s7d2.scene7.com/is/image/aeo/0381_3628_896_of?$pdp-m-opt$&fmt=webp" },
    { id: 9, name: "Graphic Tee", price: 24.99, category: "Tops", url: "https://s7d2.scene7.com/is/image/aeo/0181_4819_421_f?$plp-web-mobile$&fmt=webp" },
    { id: 10, name: "Flip Flops", price: 9.99, category: "Footwear", url: "https://s7d2.scene7.com/is/image/aeo/0417_6796_001_f?$plp-web-mobile$&fmt=webp" },
    { id: 11, name: "Sports Bra", price: 22.99, category: "Activewear", url: "https://s7d2.scene7.com/is/image/aeo/2696_1566_073_of?$plp-web-mobile$&fmt=webp" },
    { id: 12, name: "Cargo Shorts", price: 27.99, category: "Bottoms", url: "https://s7d2.scene7.com/is/image/aeo/0132_7878_238_of?$plp-web-mobile$&fmt=webp" },
    ];

    products.forEach(({ name, id, price, category, url }) => {
    itemCards.innerHTML += `
        <div class="product-card">
        <img src="${url} class="product-img">
        <h3>${name}</h3>
        <p class="product-price">$${price}</p>
        <p class="product-category">Category: ${category}</p>
        <button 
            id="${id}" 
            class="btn add-to-cart-btn">Add to cart
        </button>
        </div>
    `;
    });

    class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.taxRate = 8.25;
    }

    addItem(id, products) {
        const product = products.find((item) => item.id === id);
        const { url, name, price } = product;
        this.items.push(product);
    
        const totalCountPerProduct = {};
        this.items.forEach((product) => {
            totalCountPerProduct[product.id] = (totalCountPerProduct[product.id] || 0) + 1;
        });
    
        const currentProductCount = totalCountPerProduct[product.id];
        const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);
    
        if (currentProductCount > 1) {
            currentProductCountSpan.textContent = `${currentProductCount}x`;
        } else {
            const html = `
            <div id="product${id}" class="product">
                <p>
                    <span class="product-count" id="product-count-for-id${id}"></span>${name}
                </p>
                <img src="${url}" class="order-img">
                <p>$${price.toFixed(2)}</p>
            </div>`;
            productsContainer.innerHTML += html;
            productsContainerOrder.innerHTML += html;
        }
    }
    

    getCounts() {
        return this.items.length;
    }

    clearCart() {
        if (!this.items.length) {
            alert("Your shopping cart is already empty");
            return;
        }
    
        const isCartCleared = confirm("Are you sure you want to clear all items from your shopping cart?");
        if (isCartCleared) {
            this.items = [];
            this.total = 0;
            productsContainer.innerHTML = "";
            productsContainerOrder.innerHTML = "";
            totalNumberOfItems.textContent = 0;
            totalItemsOrder.textContent = 0;
            cartSubTotal.textContent = 0;
            subtotalOrder.textContent = 0;
            cartTaxes.textContent = 0;
            taxesOrder.textContent = 0;
            cartTotal.textContent = 0;
            totalOrder.textContent = 0;
        }
    }    

    calculateTaxes(amount) {
        return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
    }

    calculateTotal() {
        const subTotal = this.items.reduce((total, item) => total + item.price, 0);
        const tax = this.calculateTaxes(subTotal);
        this.total = subTotal + tax;
    
        cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
        subtotalOrder.textContent = `$${subTotal.toFixed(2)}`;
    
        cartTaxes.textContent = `$${tax.toFixed(2)}`;
        taxesOrder.textContent = `$${tax.toFixed(2)}`;
    
        cartTotal.textContent = `$${this.total.toFixed(2)}`;
        totalOrder.textContent = `$${this.total.toFixed(2)}`;
    
        return this.total;
    }    
    }

    const cart = new ShoppingCart();
    const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

    [...addToCartBtns].forEach((btn) => {
    btn.addEventListener("click", (event) => {
        cart.addItem(Number(event.target.id), products);
        totalNumberOfItems.textContent = cart.getCounts();
        cart.calculateTotal();
    });
    });

    cartBtn.addEventListener("click", () => {
    isCartShowing = !isCartShowing;
    showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
    cartContainer.style.display = isCartShowing ? "block" : "none";
    });

    clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));
    clearCartBtnOrder.addEventListener("click", cart.clearCart.bind(cart)); 


        document.getElementById("primaryAddress").addEventListener("change", toggleAddressFields);
        document.getElementById("newAddress").addEventListener("change", toggleAddressFields);

        // Toggle visibility of payment fields
        document.getElementById("primaryPayment").addEventListener("change", togglePaymentFields);
        document.getElementById("newPayment").addEventListener("change", togglePaymentFields);

        function toggleAddressFields() {
        const newFields = document.getElementById("newAddressFields");
        newFields.classList.toggle("hidden", !document.getElementById("newAddress").checked);
        }

        function togglePaymentFields() {
        const newFields = document.getElementById("newPaymentFields");
        newFields.classList.toggle("hidden", !document.getElementById("newPayment").checked);
        }

        function confirmOrder() {
        // Get selected shipping address
        let shippingAddress = {};
        if (document.getElementById("primaryAddress").checked) {
            shippingAddress = {
            street: "123 Main St",
            city: "New York",
            state: "NY",
            zip: "10001"
            };
        } else {
            shippingAddress = {
            street: document.getElementById("street").value,
            city: document.getElementById("city").value,
            state: document.getElementById("state").value,
            zip: document.getElementById("zip").value
            };
        }

        // Get selected payment method
        let paymentText = "";
        if (document.getElementById("primaryPayment").checked) {
            paymentText = "Primary Payment Method (Visa ending in 1234)";
        } else {
            const cardNum = document.getElementById("cardNumber").value;
            const expiration = document.getElementById("expiration").value;
            const cardName = document.getElementById("cardName").value;
            paymentText = `${cardName} - Card ending in ${cardNum.slice(-4)} (Exp: ${expiration})`;
        }

        // Display confirmation details
        document.getElementById("confirmedAddress").textContent =
            `${shippingAddress.street}, ${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.zip}`;

        document.getElementById("confirmedPayment").textContent = paymentText;
        document.getElementById("confirmedTotal").textContent = cart.total.toFixed(2);

        // Show the order confirmation section
        document.getElementById("checkout").classList.add("hidden");
        document.getElementById("orderConfirmed").classList.remove("hidden");
        }

        function returnLog() {
            document.getElementById("row").classList.remove("hidden");
            document.getElementById("confirmedAccount").classList.add("hidden");
        }
        let accountInfo = null;
        document.querySelector('input[type="submit"].register').addEventListener('click', function (event) {
            event.preventDefault(); 
            let paymentText = "(Visa ending in 1234)";
            let accountInfo = {
                username: document.getElementById("username").value,
                password: document.getElementById("password").value,
                street: document.getElementById("street").value,
                city: document.getElementById("city").value,
                state: document.getElementById("state").value,
                zip: document.getElementById("zip").value,
                cardNum: document.getElementById("card-number").value,
                expiration: document.getElementById("card-exp").value,
                cardName: document.getElementById("card-cvv").value,
                };

                localStorage.setItem('user', JSON.stringify(accountInfo));

                document.getElementById("confirmUser").textContent = `${accountInfo.username}`;
                document.getElementById("confirmStreet").textContent = `${accountInfo.street}`;
                document.getElementById("confirmAddress").textContent =`${accountInfo.city}, ${accountInfo.state} ${accountInfo.zip}`;
    
                document.getElementById("confirmPayment").textContent = paymentText;

    
            // Show the order confirmation section
            document.getElementById("row").classList.add("hidden");
            document.getElementById("confirmedAccount").classList.remove("hidden");
        });

        document.querySelector('input[type="submit"].login').addEventListener('click', function (event) {
            event.preventDefault(); 
            const loginUsername = document.getElementById("logusername").value;
            const loginPassword = document.getElementById("logpassword").value;

            const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && loginUsername === storedUser.username && loginPassword === storedUser.password) {
            document.querySelector('.profile').innerHTML = `
                <h2>Account Information</h2>
                <p><b>Log In Details</b></p>
                <p><b>Username:</b> ${storedUser.username}</p>
                <p><b>Password: </b>********</p>
                <button>Change Password</button>
                <div class="line"></div>
                <p><b>Primary Address</b><p>
                <p><b>Street:</b> ${storedUser.street}</p>
                <p><b>City:</b> ${storedUser.city}</p>
                <p><b>State:</b> ${storedUser.state}</p>
                <p><b>Zip:</b> ${storedUser.zip}</p>
                <button>Edit Primary Address</button>
                <div class="line"></div>
                <p><b>Primary Payment</b><p>
                <p><b>Card Number:</b> ${storedUser.cardNum}</p>
                <p><b>Expiration:</b> ${storedUser.expiration}</p>
                <p><b>CVV: </b>***</p>
                <button>Edit Primary Payment</button>
            `;
            $('.register').hide();
            $('.profile').show();
        } else {
            alert("Invalid username or password.");
        }
        });
    