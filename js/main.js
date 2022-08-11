let links = document.querySelector('header nav ul'),
  menu = document.querySelector('.menu'),
  aside = document.querySelector('aside'),
  close = document.querySelector('.close'),
  overlay = document.querySelector('.overlay'),
  plus = document.querySelector('.plus'),
  minus = document.querySelector('.minus'),
  cart = document.querySelector('.cart'),
  cart_Items = document.querySelector('.items-count'),
  counter = document.querySelector('.counter');
  addToCart = document.querySelector('.foot button');
  cartBox = document.querySelector('.cartBox'),
  cartBoxB = cartBox.querySelector('.body'),
  gallery = document.querySelector('.gallery'),
  big_Img = gallery.querySelector('.big-img img'),
  big_Imgs = gallery.querySelectorAll('.big-img img'),
  img_List = document.querySelector('.gallery ul')
;




// Meida Query
let media = window.matchMedia('(min-width:767px)');
check(media);
media.addEventListener('change', check);




// Cart 
// items count
function updateCart(num) {
  cart_Items.innerHTML = num;
  if (num == 0) {
    cart_Items.innerHTML = '';
  }
};
// cart Box
function cartView(proName, price, items) {
  cartBoxB.innerHTML= `
  <div>
    <img src="../assets/images/image-product-1.jpg" alt="">
    <p class="productName">${proName}
      <span class="total">
      $${price} x ${items}   $${price * items}
      </span>
    </p>
    <img class="delete"; src="../assets/images/icons/delete.svg" alt="">
  </div>
  <button class="btn">checkout</button>
  `;


  let d = cartBox.querySelector('.delete');
  d.onclick = () => {
    del();
  }
};




// Generate Number
function generateNum(str) {
  let s = '';
  for (let i of str) {
    if (i == '.') break;
    s += i;
  };

  return +[...s].filter(x => isNaN(x) == false).join('');
};
// Reset
function del() {
  cartBoxB.innerHTML = `<p class="txt">Your Cart is empty</p>`;
  cart_Items.innerHTML = 0;
  counter.innerHTML = 0;
};
// Done





// Copyied Gallery
let index = 0;
function check(x) {
  if (x.matches) {
    big_Imgs.forEach(img => {
      img.onclick= () => {
        let ob = gallery.cloneNode(true);
        document.body.append(ob);
        ob.classList.add('show');
      
        let big = ob.querySelector('.big-img img');
        let list = ob.querySelector('ul');
        slide(big, list)
        
        
        overlay.style.display= 'block';
        gallery.style.pointerEvents= 'none';
      
        for(let i of ob.querySelectorAll('.icon')) {
          i.style.display = 'inline-block';
        }
    
        upDown(ob, big, list);
    
        let close = ob.querySelector('.close');
        close.onclick = () => {
          ob.remove();
          overlay.style.display= 'none';
          gallery.style.pointerEvents= 'initial';
        }  
      }
    })
  }
};

// Gallery
function slide(img, list) {
  list.addEventListener('click', (e) => {
    if (e.target.nodeName == 'IMG') {
      removeActiveC(list);
      let ele = e.target;
      ele.classList.add('active');  

      sortThem(img, ele.dataset.sort);
    }
  })
};


function removeActiveC(list) {
  for (let i of list.children) {
    i.querySelector('img').classList.remove('active');
  }
};


function sortThem(child, num, bits) {
  let parent = child.parentElement;
  for (let i of parent.querySelectorAll('img')) {
    i.style.zIndex = -1;
  }

  parent.children[parseInt(num)].style.zIndex = 0;
  
  if(bits) {
    removeActiveC(bits);
    bits.children[parseInt(num)].querySelector('img').classList.add('active');
  }
};


function upDown(parent, big, list) {
  let next = parent.querySelector('.next');
  let previous = parent.querySelector('.previous');
  previous.onclick = () => {
    sortThem(big, index, list);
    index--;

    if (index == -1) index =3;
  }

  next.onclick = () => {
    sortThem(big, index, list);
    index++;

    if (index == 4) index =0;
  }
};






































// aside
menu.onclick = () => {
  aside.style.height= window.innerHeight + 'px';
  aside.style.display= 'block';
  overlay.style.display= 'block';

  close.onclick = () => {
    aside.style.display="none";
    overlay.style.display= 'none'; 
  }
};


// Cart
let c = true;
cart.onclick = () => {
  if (c == true) {
    cartBox.style.display = 'block';
    c = false;
  }else {
    cartBox.style.display = 'none';
    c = true;
  }
  cartBoxB.innerHTML = `<p class="txt">Your Cart is empty</p>`;

  if (cart_Items.innerHTML >= 1) {
    let productName = document.querySelector('h2').innerHTML;
    let price = generateNum(document.querySelector('.value').innerHTML);
    let items = parseInt(cart_Items.innerHTML);
    
    cartView(productName, price, items);
  }
};


// Items
plus.onclick = () => {
  counter.innerHTML = Number(counter.innerHTML) + 1;
  updateCart(counter.innerHTML);
};
minus.onclick = () => {
  if (counter.innerHTML > 0) {
    counter.innerHTML = Number(counter.innerHTML) - 1;
  }
  updateCart(counter.innerHTML);
};
addToCart.addEventListener('click', () => {
  counter.innerHTML = Number(counter.innerHTML) + 1;
  updateCart(counter.innerHTML);
});



// gallery
slide(big_Img, img_List);
upDown(gallery, big_Img, img_List);