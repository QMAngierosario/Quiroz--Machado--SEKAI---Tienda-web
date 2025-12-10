
let items = document.querySelectorAll('.item');
let container = document.querySelector('.container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function updateActiveItem() {
  items.forEach(i => i.classList.remove('active'));
  
  if (items[1]) {
    items[1].classList.add('active');
  } else if (items[0]) {
    
    items[0].classList.add('active');
  }
}

function updateBackground() {
 
  const active = document.querySelector('.item.active') || items[1] || items[0];
  if (!active) return;

  let bg = active.getAttribute("data-bg");
  let color = active.getAttribute("data-color");
  let btn = active.getAttribute("data-btn");

  
  if (bg) container.style.backgroundImage = `url(img/${bg})`;
  else container.style.backgroundImage = '';

  
  if (color) document.documentElement.style.setProperty("--color-contenedor", color);
  if (btn) document.documentElement.style.setProperty("--color-boton", btn);
}


updateActiveItem();
updateBackground();

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    const slide = document.querySelector('.slide');
    slide.appendChild(slide.firstElementChild);
    items = document.querySelectorAll('.item');
    updateActiveItem();
    updateBackground();
  });
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    const slide = document.querySelector('.slide');
    slide.prepend(slide.lastElementChild);
    items = document.querySelectorAll('.item');
    updateActiveItem();
    updateBackground();
  });
}

function irATienda(personaje) {
  
  window.location.href = "../JHT/indexJHT.html?personaje=" + encodeURIComponent(personaje);
}