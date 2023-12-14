document.addEventListener("DOMContentLoaded", function () {
    // Dummy JSON data for products
    const products = [
        { id: 1, name: 'Product 1', price: '$19.99' },
        { id: 2, name: 'Product 2', price: '$29.99' },
        { id: 3, name: 'Product 3', price: '$39.99' },
        { id: 4, name: 'Product 4', price: '$59.99' },
      
    ];
 
    const productSection = document.getElementById('productSection');

    // Render product cards
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        productSection.appendChild(productCard);
    });
});


// `https://dummyjson.com/products/`