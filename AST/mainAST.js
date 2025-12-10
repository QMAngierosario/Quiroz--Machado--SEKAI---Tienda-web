function getPersonajeFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("personaje");
}

const personajeInicial = getPersonajeFromURL();

/*DATA DEL MUNDO ALIEN STAGE*/
const slidesData = [
  {
    characters: [
      { id: "mizzi", name: "Mizzi", color: "#f0c1eeff", img: "../img/mizi.png" },
      { id: "sua", name: "Sua", color: "#c7f7ffff", img: "../img/sua.png" },
      { id: "ivan", name: "Ivan", color: "#fd8c8cff", img: "../img/ivan.png" },
      { id: "till", name: "Till", color: "#87ffefff", img: "../img/till.png" },
      { id: "hyuna", name: "Hyuna", color: "#faad6fff", img: "../img/hyuna.png" },
      { id: "luka", name: "Luka", color: "#f9ffa6ff", img: "../img/luka.png"}
    ]
  }
];

/*PRODUCTOS POR PERSONAJE*/
const productsByChar = {
  mizzi: [
    { id: "p1", name: "Acrílico de Mizzi", price: 10, img: "ProductosMizzi/Mizzi-Acrilico1.png" },
    { id: "p2", name: "Acrílico chibi de  Mizzi", price: 10, img: "ProductosMizzi/Mizzi-Acrilico2.png" },
    { id: "p3", name: "Figura de Mizzi", price: 45, img: "ProductosMizzi/Mizzi-figura.png" },
    { id: "p4", name: "Figura bebe de Mizzi", price: 35, img: "ProductosMizzi/Mizzi-figurabebe.png" },
    { id: "p5", name: "Figura chibi de Mizzi", price: 35, img: "ProductosMizzi/Mizzi-figurachibi.png" },
    { id: "p6", name: "Llavero Love Hate de Mizzi", price: 10, img: "ProductosMizzi/Mizzi-llaveroataud.png" },
    { id: "p7", name: "Peluca de Mizzi", price: 14.5, img: "ProductosMizzi/Mizzi-Peluca.png" },
    { id: "p8", name: "Peluche de Mizzi", price: 38, img: "ProductosMizzi/Mizzi-peluche.png" },
    { id: "p9", name: "Cosplay -RONDA 1- Mizzi", price: 60, img: "ProductosMizzi/Mizzi-Roparonda1.png" },
    { id: "p10", name: "Cosplay - RONDA 5- Mizzi", price: 80, img: "ProductosMizzi/Mizzi-Roparonda5.png" },
  ],

  sua: [
    { id: "p11", name: "Acrílico chibi de Sua", price: 10, img: "ProductosSua/Sua-acrilico1.png" },
    { id: "p12", name: "Acrílico de Sua", price: 10, img: "ProductosSua/Sua-acrilico2.png" },
    { id: "p13", name: "Acrilico Anakt Garden de Sua", price: 10, img: "ProductosSua/Sua-acrilico3.png" },
    { id: "p14", name: "Figura de Sua", price: 45, img: "ProductosSua/Sua-figura.png" },
    { id: "p15", name: "Figura bebe de Sua", price: 35, img: "ProductosSua/Sua-figurabebe.png" },
    { id: "p16", name: "Figura chibi de Sua", price: 35, img: "ProductosSua/Sua-figurachibi.png" },
    { id: "p17", name: "Llavero acrílico de Sua", price: 3, img: "ProductosSua/Sua-llavero.png" },
    { id: "p18", name: "Peluca de Sua", price: 14.5, img: "ProductosSua/Sua-Peluca.png" },
    { id: "p19", name: "Peluche de Sua", price: 38, img: "ProductosSua/Sua-peluche.png" },
    { id: "p20", name: "Cosplay -RONDA 1- Sua", price: 60, img: "ProductosSua/Sua-Ropa.png" }
  ],

  ivan: [
    { id: "p21", name: "Acrílico de Ivan", price: 10, img: "ProductosIvan/Ivan-acrilico.png" },
    { id: "p22", name: "Acrílico chibi de Ivan", price: 10, img: "ProductosIvan/Ivan-acrilicochibi.png" },
    { id: "p23", name: "Figura de Ivan", price: 45, img: "ProductosIvan/Ivan-Figura.png" },
    { id: "p24", name: "Figura bebe de Ivan", price: 35, img: "ProductosIvan/Ivan-figurabebe.png" },
    { id: "p25", name: "Figura chibi de Ivan", price: 35, img: "ProductosIvan/Ivan-figuralazo.png" },
    { id: "p26", name: "Peluca de Ivan", price: 14.5, img: "ProductosIvan/Ivan-Peluca.png" },
    { id: "p27", name: "Peluche University AU de Ivan", price: 38, img: "ProductosIvan/Ivan-pelucheAU.png" },
    { id: "p28", name: "Peluche -RONDA 6- de Ivan", price: 42, img: "ProductosIvan/Ivan-pelucheronda6.png" },
    { id: "p29", name: "Cosplay -RONDA 3- Ivan", price: 60, img: "ProductosIvan/Ivan-Roparonda2.png" },
    { id: "p30", name: "Cosplay -RONDA 6- Ivan", price: 60, img: "ProductosIvan/Ivan-Roparonda6.png" }
  ],

  till: [
    { id: "p31", name: "Acrílico de Till", price: 10, img: "ProductosTill/Till-Acrilico1.png" },
    { id: "p32", name: "Acrílico chibi de Till", price: 10, img: "ProductosTill/Till-Acrilico2.png" },
    { id: "p33", name: "Figura de Till", price: 45, img: "ProductosTill/Till-Figura.png" },
    { id: "p34", name: "Figura bebe de Till", price: 35, img: "ProductosTill/Till-Figurabebe.png" },
    { id: "p35", name: "Figura chibi de Till", price: 35, img: "ProductosTill/Till-Figurachibi.png" },
    { id: "p36", name: "Peluche University AU de Till", price: 38, img: "ProductosTill/Till-pelucheAU.png" },
    { id: "p37", name: "Peluche -RONDA 6- de Till", price: 42, img: "ProductosTill/Till-Pelucheronda6.png" },
    { id: "p38", name: "Cosplay -RONDA 2- Till", price: 60, img: "ProductosTill/Till-Roparonda2.png" },
    { id: "p39", name: "Cosplay -RONDA 6- Till", price: 60, img: "ProductosTill/Till-Roparonda6.png" },
    { id: "p40", name: "Cosplay -RONDA FINAL- Till", price: 60, img: "ProductosTill/Till-Roparonda7.png" },
  ],

  hyuna: [
    { id: "p41", name: "Acrílico chibi de Hyuna", price: 10, img: "Productoshyuna/Hyu-Acrilico1.png" },
    { id: "p42", name: "Acrílico  Anakt Garden de Hyuna", price: 10, img: "Productoshyuna/Hyu-Acrilico2.png" },
    { id: "p43", name: "Figura de Hyuna", price: 45, img: "Productoshyuna/Hyu-Figura.png" },
    { id: "p44", name: "Figura bebe de Hyuna", price: 35, img: "Productoshyuna/Hyu-Figurabebe.png" },
    { id: "p45", name: "Figura chibi de Hyuna", price: 35, img: "Productoshyuna/Hyu-Figurachibi.png" },
    { id: "p46", name: "Keychain de Hyuna", price: 8, img: "Productoshyuna/Hyu-Keychain.png" },
    { id: "p47", name: "Peluche de Hyuna", price: 38, img: "Productoshyuna/Hyu-peluche.png" },
    { id: "p48", name: "Peluche University AU de Hyuna", price: 38, img: "Productoshyuna/Hyu-PelucheAU.png" },
    { id: "p49", name: "Acrílico de Hyuna", price: 10, img: "Productoshyuna/Hyu-Acrilico3.png" },
    { id: "p50", name: "Cosplay Hyuna", price: 60, img: "Productoshyuna/Hyu-Ropa.png" }
  ],

  luka: [
    { id: "p51", name: "Acrílico Maid AU Luka", price: 10, img: "Productosluka/Luka-Acrilico1.png" },
    { id: "p52", name: "Acrílico  Anakt Garden de Luka", price: 10, img: "Productosluka/Luka-Acrilico2.png" },
    { id: "p53", name: "Figura de Luka", price: 45, img: "Productosluka/Luka-figura.png" },
    { id: "p54", name: "Figura bebe de Luka", price: 35, img: "Productosluka/Luka-figurabebe.png" },
    { id: "p55", name: "Peluca de Luka", price: 14.5, img: "Productosluka/Luka-peluca.png" },
    { id: "p56", name: "Peluche de Luka", price: 38, img: "Productosluka/Luka-peluche1.png" },
    { id: "p57", name: "Peluche Maid AU Luka", price: 40, img: "Productosluka/Luka-PelucheAu1.png" },
    { id: "p58", name: "Peluche Future AU Luka", price: 45, img: "Productosluka/Luka-PelucheAu2.png" },
    { id: "p59", name: "Cosplay - RONDA 5- Luka", price: 75, img: "Productosluka/Luka-Roparonda5.png" },
    { id: "p60", name: "Cosplay -RONDA FINAL- Luka", price: 70, img: "Productosluka/Luka-Roparonda7.png" }
  ]
};

let selectedCharacter = { id: personajeInicial, index: 0 };
let cart = {};  


const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);


function renderCharacters() {
  const chars = slidesData[0].characters;
  const row = $('#charactersRow');
  row.innerHTML = "";

  chars.forEach((c, i) => {
    const div = document.createElement("div");
    div.className = "character";

    div.innerHTML = `
      <img src="${c.img}" alt="${c.name}">
      <div class="name">${c.name}</div>
    `;

    if (c.id === selectedCharacter.id) {
      div.classList.add("selected");
      div.style.opacity = 1;
      div.style.pointerEvents = "auto";
      selectedCharacter.index = i;
    } else {
      div.style.opacity = 0.3;
      div.style.pointerEvents = "none";
    }

    row.appendChild(div);
  });
}


function renderProducts() {
  const grid = $("#productsGrid");
  grid.innerHTML = "";

  const list = productsByChar[selectedCharacter.id] || [];

  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h5>${p.name}</h5>
      <div class="price">$${p.price}</div>
      <button class="addCartBtn">Agregar al Carrito</button>
    `;

    grid.appendChild(card);

    card.querySelector(".addCartBtn").onclick = () => {
      addToCart(p.id + "_" + selectedCharacter.id);
    };
  });
}

function renderAllProducts() {
  const grid = $("#productsGrid");
  grid.innerHTML = "";

  let allProducts = [];

  Object.keys(productsByChar).forEach(charId => {
    productsByChar[charId].forEach(p => {
      allProducts.push({
        ...p,
        realId: p.id + "_" + charId
      });
    });
  });

  allProducts.forEach(p => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h5>${p.name}</h5>
      <div class="price">$${p.price}</div>
      <button class="addCartBtn">Agregar al Carrito</button>
    `;

    grid.appendChild(card);

    card.querySelector(".addCartBtn").onclick = () => {
      addToCart(p.realId);
    };
  });
}

document.getElementById("btnVerTodos").addEventListener("click", () => {
  
  selectedCharacter.id = null;

  const chars = $$(".character");
  chars.forEach(c => {
    c.classList.remove("selected");
    c.style.opacity = 1;
    c.style.pointerEvents = "auto";

    c.classList.add("animate-all");

    setTimeout(() => {
      c.classList.remove("animate-all");
    }, 350);
  });

  renderAllProducts();
});

function addToCart(uid) {
  cart[uid] = (cart[uid] || 0) + 1;
  updateCartCount();
}

function updateCartCount() {
  const total = Object.values(cart).reduce((a, b) => a + b, 0);
  const el = $("#cartCount");
  if (el) el.textContent = total;
}

$("#cartIcon")?.addEventListener("click", () => {
  $("#cartPage")?.classList.add("open");
  renderCartItems();
});

function renderCartItems() {
  const container = $("#cartItems");
  container.innerHTML = "";

  const entries = Object.entries(cart);
  if (!entries.length) {
    container.innerHTML = "<p>Tu carrito está vacío.</p>";
    $("#cartTotal").textContent = "$0.00";
    return;
  }

  entries.forEach(([uid, qty]) => {
    const baseId = uid.split("_")[0];

    let base = null;
    for (let char in productsByChar) {
      const found = productsByChar[char].find(p => p.id === baseId);
      if (found) { base = found; break; }
    }

    if (!base) return;

    const row = document.createElement("div");
    row.className = "cart-row";

    row.innerHTML = `
      <img src="${base.img}">
      <div style="flex:1">
        <div style="font-weight:700">${base.name}</div>
        <div style="color:rgba(0,0,0,0.55)">$${base.price}.00 c/u</div>
      </div>

      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
        <div class="qty-controls">
          <button class="dec">-</button>
          <div style="padding:6px 10px;border-radius:8px;border:1px solid #eee">${qty}</div>
          <button class="inc">+</button>
        </div>
        <button class="del" style="background:none;border:none;color:#b33;cursor:pointer">Eliminar</button>
      </div>
    `;

    container.appendChild(row);

    row.querySelector(".inc").onclick = () => {
      cart[uid]++;
      renderCartItems();
      updateCartCount();
    };

    row.querySelector(".dec").onclick = () => {
      cart[uid]--;
      if (cart[uid] <= 0) delete cart[uid];
      renderCartItems();
      updateCartCount();
    };

    row.querySelector(".del").onclick = () => {
      delete cart[uid];
      renderCartItems();
      updateCartCount();
    };
  });

  const total = entries.reduce((sum, [uid, qty]) => {
    const baseId = uid.split("_")[0];

    let base = null;
    for (let char in productsByChar) {
      const found = productsByChar[char].find(p => p.id === baseId);
      if (found) base = found;
    }

    return base ? sum + base.price * qty : sum;
  }, 0);

  $("#cartTotal").textContent = "$" + total.toFixed(2);
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") $("#cartPage")?.classList.remove("open");
});


$("#checkoutBtn")?.addEventListener("click", () => {
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  if (!totalItems) return alert("Tu carrito está vacío");

  const subtotal = Object.entries(cart).reduce((sum, [uid, qty]) => {
    const baseId = uid.split("_")[0];

    let base = null;
    for (let c in productsByChar) {
      const found = productsByChar[c].find(p => p.id === baseId);
      if (found) base = found;
    }

    return base ? sum + base.price * qty : sum;
  }, 0);

  const shippingDays = 2 + Math.floor(totalItems / 3);

  $("#successOverlay").style.display = "flex";
  $("#successText").textContent =
    `Compra por $${subtotal.toFixed(2)} exitosa. Tiempo estimado de envío: ${shippingDays} día(s) hábiles.`;

  cart = {};
  updateCartCount();
  renderCartItems();
});

window.closeSuccess = function () {
  $("#successOverlay").style.display = "none";
  $("#cartPage")?.classList.remove("open");
};

function startPage() {
  const chars = slidesData[0].characters;

  const index = chars.findIndex(c => c.id === personajeInicial);

  selectedCharacter.index = index >= 0 ? index : 0;
  selectedCharacter.id = chars[selectedCharacter.index].id;

  renderCharacters();
  renderProducts();
}

startPage();

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.custom-cursor');

  if (!cursor) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.addEventListener('mousedown', () => {
    cursor.style.background = "url('../img/alienstage_cursor2.png') no-repeat center/contain";
    cursor.style.transform = 'translate(-50%, -50%) scale(0.9)';
  });

  document.addEventListener('mouseup', () => {
    cursor.style.background = "url('../img/alienstage_cursor1.png') no-repeat center/contain";
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});

function irATienda(personaje) {

  window.location.href = "../AST/indexAST.html?personaje=" + encodeURIComponent(personaje);
}