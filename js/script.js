let count = localStorage.getItem("cartCount") || 0;

function addToCart() {
    count++;
    localStorage.setItem("cartCount", count);
    updateCart();
}

function updateCart() {
    let elements = document.querySelectorAll("#cartCount");
    elements.forEach(el => {
        el.innerText = count;
    });
}

updateCart();