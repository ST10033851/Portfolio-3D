const cursor = document.querySelector('.cursor');
const hover = document.querySelectorAll('.Box img');
const back = document.querySelector('.back');
const Row = document.querySelector('.Row');
const menu = document.querySelector('.menu-btn');
const Gallery = document.querySelector('.Gallery h3');

//mouse mapping and cursor growth on click
document.addEventListener('mousemove', (e) =>{
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    if(e.target.tagName === 'IMG')
    {
        cursor.classList.add('grow');
    }
    else{
        cursor.classList.remove('grow');
    }
})

back.addEventListener('mouseover', function() {
  cursor.classList.add('shrink2');
});

back.addEventListener('mouseout', function() {
  cursor.classList.remove('shrink2');
});

//back button + displaying the grid by section 
back.addEventListener('click', () =>{

    Row.style.display = 'flex';
    menu.style.display = 'flex';
    document.getElementById("portraits").style.display = "none";
    document.getElementById("Environment").style.display = "none";
    document.getElementById("Geometry").style.display = "none";
    
    // Show the grid element
    document.getElementById("grid").style.display = "block";
    
    setTimeout(() =>{
        document.getElementById("portraits").style.display = "block";
      }, 300);

      setTimeout(() =>{
        document.getElementById("Environment").style.display = "block";
      }, 400);

      setTimeout(() =>{
        document.getElementById("Geometry").style.display = "block";
      }, 500);

      //navigate to the home page 
    setTimeout(() =>{
        const url = '/index.html';
        window.location.href =url;   
    }, 600)
})

Gallery.style.fontSize = "60px";

const hoverText = document.querySelector('.Bubble');
const letters = hoverText.textContent.split('');

hoverText.innerHTML = '';
letters.forEach(letter => {
  const span = document.createElement('span');
  span.textContent = letter;
  hoverText.appendChild(span);
});




