// Product adding to the cart

$(function(){

    $('input[type="number"]').niceNumber();
    
  });
  
  let productButton = document.querySelector('#product-btn-add');
  
  productButton.addEventListener('click', (event)=>{
    let prodNumbers = document.querySelector('#product-number-cart').value;
    prodNumbers = parseInt(prodNumbers, 10);
    let currentItems = document.querySelector('.cart').innerHTML;
    console.log(currentItems);
    currentItems = parseInt(currentItems, 10);
    console.log(currentItems);
    if(currentItems){
    document.querySelector('.cart').innerHTML = currentItems  + prodNumbers;
    } else document.querySelector('.cart').innerHTML = prodNumbers;
  });
  