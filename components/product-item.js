// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const li = document.createElement('li');
    li.setAttribute('class', 'product');
    const img = li.appendChild(document.createElement('img'));
    img.setAttribute('src', this.getAttribute('image'));
    img.setAttribute('alt', this.getAttribute('title'));
    img.setAttribute('width', 200);
    img.setAttribute('height', 180);
    const title_p = li.appendChild(document.createElement('p'));
    title_p.setAttribute('class', 'title');
    title_p.innerHTML = this.getAttribute('title');
    const price_p = li.appendChild(document.createElement('p'));
    price_p.setAttribute('class', 'price');
    price_p.innerHTML = this.getAttribute('price');
    const button = li.appendChild(document.createElement('button'));
    button.onclick = (e) => {
      var cartElem = document.getElementById('cart-count');
      var num_items = parseInt(cartElem.innerHTML);

      if (button.innerHTML === 'Add to Cart') {
        cartElem.innerHTML = num_items + 1;
        alert('Added to Cart!');
        button.innerHTML = 'Remove from Cart';
        localStorage.setItem(this.getAttribute('id'),this.getAttribute('id'));
        localStorage.setItem('cart-count',num_items + 1);
      }
      else {
        cartElem.innerHTML = num_items - 1;
        button.innerHTML = 'Add to Cart';
        localStorage.removeItem(this.getAttribute('id'));
        localStorage.setItem('cart-count',num_items - 1);
      }

    };

    if(localStorage.getItem(this.getAttribute('id')) != null) {
      button.innerHTML = 'Remove from Cart';
      let x = document.getElementById('cart-count');
      x.innerHTML = localStorage.getItem('cart-count');
    }
    else {
      button.innerHTML = 'Add to Cart';
    }
    

    const style = document.createElement('style');
    style.textContent =
      `.price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`

    this.shadowRoot.append(style, li);
  }
}

customElements.define('product-item', ProductItem);