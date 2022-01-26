document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
    
      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function(everysubmenu){
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
        })
      });
    
      document.querySelectorAll('.dropdown-menu a').forEach(function(element){
        element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if(nextEl && nextEl.classList.contains('submenu')) {	
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              if(nextEl.style.display == 'block'){
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }
    
            }
        });
      })
    }
    // end if innerWidth
    }); 
    // DOMContentLoaded  end


    $('.slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '.arrow_prev',
      nextArrow: '.arrow_next'
    });

    //Load popular items

    document.getElementById("loadMore").onclick = function()
    {loadMoreFunction();
      document.getElementById("loadMore").classList.add('d-none');
    };

    function loadMoreFunction(){


            fetch('../data/items.json')
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              appendItems(data);
            })
            .catch(function (err) {
              console.log('error: ' + err);
            });

            function appendItems(data) {
              var mainContainer = document.querySelector("#popular-items > .row");
              for (var i = 0; i < data.length; i++) {
                  var div = document.createElement("div");
                  div.classList.add("col")
                  div.innerHTML = 
                  ` <div class="card card_hover h-100">
                  <img src="${data[i].image}" class="card-img-top img-fluid" alt="item 1">
                  <div class="card-body text-center d-flex flex-column justify-content-between">
                    <p class="card-text">${data[i].text}</p>
                    <p class="card-text price">${data[i].price}</p>
                      <div class="middle">
                      <div class="middle-center">
                                <span class="btn plus"><i class="add-cart fas fa-plus "></i></span>
                                <span class="btn heart"><i class="add-wish fas fa-heart "></i></span>
                      </div>
                      </div>
                  </div>
                </div> `
                  ;
                  mainContainer.appendChild(div);
              }
          }
        }

//ADD TO CART FUNCTION


let buttons = document.querySelector('.container-popular');

buttons.addEventListener('click', (event)=>{
  if(event.target.classList.contains('add-cart')){
    cartNumbers();
  }else if(event.target.classList.contains('add-wish')){
    cartWishes();
  }
})


let cartItems = 0;



function cartNumbers(){
  cartItems++;
  document.querySelector('.cart').innerHTML = cartItems;
}

//ADD TO WISH FUNCTION

let wishItems = 0;


function cartWishes(){
  wishItems++;
  document.querySelector('.wish').innerHTML = wishItems;
}


// INJECT CURRENT YEAR

let date = new Date();
let year = date.getFullYear();
document.getElementById('current_year').innerHTML = year;

// SHOW HIDE PASSWORD

const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');
 
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

//Product page

// $('#myTab a').on('click', function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// })