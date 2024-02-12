fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const productListContainer = document.getElementById('productList');

        data.forEach(product => {
            const cardItem = document.createElement('div');
            cardItem.classList.add('card');

            let clickCount = 0; // Define outside the loop

            cardItem.innerHTML = `
                <div class="img-box">
                    <img src="" alt="${product.Name}">
                </div>
                <div class="details">
                    <p></p>
                    <h2>${product.price}</h2>
                    <button class="addToCartBtn">Add to Cart</button>
                    <button class="cancelBtn">Cancel</button>
                    <p>Quantity: <span class="clickCount">${clickCount}</span></p>
                </div>

                <div class="card" style="width: 18rem;">
  <img src="${product.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.Name}</h5>
    <p class="card-text">The Audi R8 Spider is the drop-top version of the brand's successful R8 supercar. It not only looks more dramatic but the sound of that wonderful V10 is further amplified. </p>
    <a href="#" class=" btn btn-primary"> product.price</a>
  </div>
</div>
            `;

            const addToCartButton = cardItem.querySelector('.addToCartBtn');
            const cancelBtn = cardItem.querySelector('.cancelBtn');
            const clickCountElement = cardItem.querySelector('.clickCount');

            addToCartButton.addEventListener('click', () => {
                clickCount++;
                clickCountElement.textContent = clickCount;
            });

            cancelBtn.addEventListener('click', () => {
                clickCount = 0;
                clickCountElement.textContent = clickCount;
            });

            productListContainer.appendChild(cardItem);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
