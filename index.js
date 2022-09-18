document.addEventListener("DOMContentLoaded", () => {
    // variables
    const minusButton = document.querySelector('.minus');
    const plusButton = document.querySelector('.plus');
    var itemPrice = document.querySelector('.item-price');
    var itemPriceValue = parseInt(document.querySelector('.item-price').textContent);

    // functions
    const increment = () => {
        itemPriceValue++
        itemPrice.textContent = itemPriceValue
    }
    const decrement = () => {
        if (itemPriceValue > 0) {
            itemPriceValue--
            itemPrice.textContent = itemPriceValue
        }
    }

    // eventListeners
    minusButton.addEventListener("click", () => {
        decrement()
    })
    plusButton.addEventListener("click", () => {
        increment()
    })

})