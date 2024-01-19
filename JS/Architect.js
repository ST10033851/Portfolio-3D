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
back.addEventListener('click', () => {
  // Set initial opacity
  Row.style.opacity = 0;
  document.getElementById("portraits").style.opacity = 0;
  document.getElementById("Environment").style.opacity = 0;
  document.getElementById("Geometry").style.opacity = 0;

  // Trigger the transition by changing the opacity
  setTimeout(() => {
      Row.style.opacity = 1;
  }, 50); // Adjust the delay based on your design

  // Show the grid element
  setTimeout(() => {
    document.getElementById("grid").style.display = "block";
    document.getElementById("grid").style.opacity = 1;
  }, 300);

  // Geometry appears after 500ms
  setTimeout(() => {
    document.getElementById("Geometry").style.display = "block";
    document.getElementById("Geometry").style.opacity = 1;
}, 500);

  // Portraits appear after 300ms
  setTimeout(() => {
      document.getElementById("portraits").style.display = "block";
      document.getElementById("portraits").style.opacity = 1;
  }, 700);

  // Environment appears after 400ms
  setTimeout(() => {
      document.getElementById("Environment").style.display = "block";
      document.getElementById("Environment").style.opacity = 1;
  }, 900);

  setTimeout(() => {
      const url = '/index.html';
      window.location.href = url;
  }, 1100); 
});



Gallery.style.fontSize = "60px";








