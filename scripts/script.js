// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  const prod_list = document.getElementById('product-list');
  var prod_JSON = '';

  if (localStorage.getItem('JSONObj') == null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => localStorage.setItem('JSONObj', JSON.stringify(data)))
      .then(() => {
        prod_JSON = eval(localStorage.getItem('JSONObj'));

        prod_JSON.forEach(o => {
          prod_list.innerHTML += `<product-item image ='${o.image}' title='${o.title}' price='${o.price}' id='${o.id}'/>`
        }) 
      }); 
  }
  else {
    prod_JSON = eval(localStorage.getItem('JSONObj'));

    prod_JSON.forEach(o => {
      prod_list.innerHTML += `<product-item image ='${o.image}' title='${o.title}' price='${o.price}' id='${o.id}'/>`
    })

  }
});