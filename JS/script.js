const menuBtn = document.querySelector('.menu-btn');
const cursor = document.querySelector('.cursor');
const sideBar = document.querySelector('.side-bar');
const btn = document.querySelector('.button-top');
const grid = document.querySelector('#grid');
const overlay = document.querySelector('#overlay');
const overlayE = document.querySelector('#overlayE');
const overlayP = document.querySelector('#overlayP');
const overlayW = document.querySelector('#overlayW');
const overlayG = document.querySelector('#overlayG');
const overlayWP = document.querySelector('#overlayWP');
const Environ = document.querySelector('.small:nth-of-type(1)'); 
const Portait = document.querySelector('.small:nth-of-type(2)'); 
const Wierd = document.querySelector('.grid:nth-of-type(3)'); 
const Geometry = document.querySelector('.grid:nth-of-type(2)'); 
const Weapon = document.querySelector('.small:nth-of-type(3)'); 
const Gallery = document.querySelector('.Gallery'); 

let menuOpen = false;
let cursorShrink = false;

//menu button to open sidebar
menuBtn.addEventListener('click', () =>{
    if(!menuOpen)
    {
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
    
}),

//cursor mapping
 document.addEventListener('mousemove', (e) => {
     cursor.style.left = e.clientX +'px';
     cursor.style.top = e.clientY +'px';
 })

 //sidebar text animation
const menuItems = [...document.querySelectorAll('.menu-item')];

menuItems.forEach(item => {
  let word = item.children[0].innerText.split('');
  item.children[0].innerHTML = '';
  word.forEach((letter, idx) => {
    item.children[0].innerHTML += `<span style="--index: ${idx}; padding:3px; font-family:'MyCustomFont'">${letter}</span>`;
  })
  let cloneDiv = item.children[0].cloneNode(true);
  cloneDiv.style.position = 'absolute';
  cloneDiv.style.left= '0';
  cloneDiv.style.top= '0';
  item.appendChild(cloneDiv);
})

menuBtn.addEventListener('click', function() {
  sideBar.classList.toggle('active');
}),

//scroll to top of page button
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
}),

//cursor shink when clicked 
menuBtn.addEventListener('click', function() {

  cursor.classList.toggle('shrink');
}),

menuBtn.addEventListener('mouseover', function() {
  cursor.classList.add('shrink2');
});

menuBtn.addEventListener('mouseout', function() {
  cursor.classList.remove('shrink2');
});


grid.addEventListener('click', () => {
  overlay.style.width = '100%';
  overlay.style.height = '100%';

    setTimeout(() => {
    const url ='/pages/Architecture.html';
    window.location.href =url;
    }, 2000);
  
}),

Environ.addEventListener('click', () => {
  overlayE.style.width = '100%';
  overlayE.style.height = '100%';

    setTimeout(() => {
    const url ='/pages/Environment.html';
    window.location.href =url;
    }, 500);
  
}),

Portait.addEventListener('click', () => {
  overlayP.style.width = '100%';
  overlayP.style.height = '100%';

    setTimeout(() => {
    const url ='/pages/Portraits.html';
    window.location.href =url;
    }, 500);
  
}),

Geometry.addEventListener('click', () => {
  overlayG.style.width = '100%';
  overlayG.style.height = '100%';

    setTimeout(() => {
    const url ='/pages/GeometryN.html';
    window.location.href =url;
    }, 500);
  
}),

Weapon.addEventListener('click', () => {
  overlayWP.style.width = '100%';
  overlayWP.style.height = '100%';

    setTimeout(() => {
    const url ='/pages/Weapons.html';
    window.location.href =url;
    }, 500);
  
}),

Wierd.addEventListener('click', () => {
  overlayW.style.width = '100%';
  overlayW.style.height = '100%';

    setTimeout(() => {
    const url ='/pages/Wierd Stuff.html';
    window.location.href =url;
    }, 500);
  
})
