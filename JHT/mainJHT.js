/*OBTENER PERSONAJE DESDE URL*/
function getPersonajeFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("personaje");
}

const personajeInicial = getPersonajeFromURL();

/*DATA DEL MUNDO HANAKO */
const slidesData = [
  {
    characters: [
      { id: "nene", name: "Yashiro Nene", color: "#c1f0e7", img: "../img/nene.png" },
      { id: "hanako", name: "Hanako", color: "#ffd6ef", img: "../img/hanako.png" },
      { id: "kou", name: "Minamoto Kou", color: "#fbf5c7", img: "../img/kou.png" },
      { id: "mitsuba", name: "Mitsuba Sousuke", color: "#ffc6d6", img: "../img/mitsuba.png" },
      { id: "akane", name: "Akane Aoi", color: "#d6e2ff", img: "../img/aoi.png" },
      { id: "aoi", name: "Aoi", color: "#ffc6d6", img: "../img/akane.jpg" }
    ]
  }
];

/*PRODUCTOS POR PERSONAJE*/
const productsByChar = {
  nene: [
    { id: "p1", name: "Acrílico de Nene", price: 20, img: "ProductosNene/Nene-Acrilico.png" },
    { id: "p2", name: "Figura de Nene", price: 50, img: "ProductosNene/Nene-figura.png" },
    { id: "p3", name: "Figura chibi de Nene", price: 45, img: "ProductosNene/Nene-figurachibi.png" },
    { id: "p4", name: "Llavero acrílico de Nene", price: 3, img: "ProductosNene/Nene-llavero.png" },
    { id: "p5", name: "Peluca de Nene", price: 14.5, img: "ProductosNene/Nene-peluca.png" },
    { id: "p6", name: "Peluche de Nene", price: 38, img: "ProductosNene/Nene-peluche.png" },
    { id: "p7", name: "Pines de Nene", price: 10, img: "ProductosNene/nene-pines.png" },
    { id: "p8", name: "Set de posters de Nene", price: 10, img: "ProductosNene/Nene-poster.png" },
    { id: "p9", name: "Polera de Nene", price: 15.5, img: "ProductosNene/Nene-Polera.png" },
    { id: "p10", name: "Uniforme de Nene completo", price: 60, img: "ProductosNene/Nene-Ropa.png" }
  ],

  hanako: [
    { id: "p11", name: "Acrílico de Hanako", price: 20, img: "ProductosHanako/Hanako-Acrilico.png" },
    { id: "p12", name: "Figura de Hanako", price: 50, img: "ProductosHanako/Hanako-Figura.png" },
    { id: "p13", name: "Figura chibi de Hanako", price: 45, img: "ProductosHanako/Hanako-Figurachibi.png" },
    { id: "p14", name: "Photocards de Hanako", price: 16, img: "ProductosHanako/Hanako-Fotocards.png" },
    { id: "p15", name: "Llavero acrílico de Hanako", price: 3, img: "ProductosHanako/Hanako-Llavero.png" },
    { id: "p16", name: "Peluca de Hanako", price: 14.5, img: "ProductosHanako/Hanako-Peluca.png" },
    { id: "p17", name: "Peluche de Hanako", price: 38, img: "ProductosHanako/Hanako-Peluche.png" },
    { id: "p18", name: "Polera de Hanako", price: 15.5, img: "ProductosHanako/Hanako-Polera.png" },
    { id: "p19", name: "Set de posters de Hanako", price: 10, img: "ProductosHanako/Hanako-poster.png" },
    { id: "p20", name: "Uniforme de Hanako", price: 60, img: "ProductosHanako/Hanako-Ropa.png" }
  ],

  kou: [
    { id: "p21", name: "Acrílico de Kou", price: 20, img: "ProductosKou/Kou-Acrilico.png" },
    { id: "p22", name: "Arete de Kou", price: 5, img:  "ProductosKou/Kou-Arete.png" },
    { id: "p23", name: "Figura de Kou", price: 50, img:  "ProductosKou/Kou-Figura.png" },
    { id: "p24", name: "Figura chibi de Kou", price: 45, img:  "ProductosKou/Kou-Figurachibi.png" },
    { id: "p25", name: "Llavero acrílico de Kou", price: 3, img:  "ProductosKou/Kou-Llavero.png" },
    { id: "p26", name: "Mousepad de Kou", price: 8, img:  "ProductosKou/Kou-Mousepad.png" },
    { id: "p27", name: "Peluche de Kou", price: 38, img:  "ProductosKou/Kou-Peluche.png" },
    { id: "p28", name: "Set de pines de Kou", price: 10, img:  "ProductosKou/Kou-Pin.png" },
    { id: "p29", name: "Polera de Kou", price: 15.5, img:  "ProductosKou/Kou-Polera.png" },
    { id: "p30", name: "Uniforme de Kou", price: 60, img:  "ProductosKou/Kou-Ropa.png" }
  ],

  mitsuba: [
    { id: "p31", name: "Acrílico de Mitsuba", price: 20, img: "ProductosMitsuba/Mit-acrilico.png" },
    { id: "p32", name: "Figura de Mitsuba", price: 50, img: "ProductosMitsuba/Mit-figura.png" },
    { id: "p33", name: "Peluca de Mitsuba", price: 14.5, img: "ProductosMitsuba/Mit-Peluca.png" },
    { id: "p34", name: "Figura chibi de Mitsuba", price: 45, img: "ProductosMitsuba/Mit-Figurachibi.png" },
    { id: "p35", name: "Llavero acrílico de Mitsuba", price: 3, img: "ProductosMitsuba/Mit-llavero.png" },
    { id: "p36", name: "Museo de photocards de Mitsuba", price: 18, img: "ProductosMitsuba/Mit-Museo.png" },
    { id: "p37", name: "Peluche de Mitsuba", price: 38, img: "ProductosMitsuba/Mit-peluche.png" },
    { id: "p38", name: "Polera de Mitsuba", price: 15.5, img: "ProductosMitsuba/Mit-Polera.png" },
    { id: "p39", name: "Set de posters de Mitsuba", price: 10, img: "ProductosMitsuba/Mit-Poster.png" },
    { id: "p40", name: "Uniforme de Mitsuba", price: 60, img: "ProductosMitsuba/Mit-Ropa.png" }
  ],

    akane: [
    { id: "p41", name: "Acrílico de Aoi", price: 20, img: "ProductosAoi/Aoi-Acrilico.png" },
    { id: "p42", name: "Kimono de Aoi", price: 65, img: "ProductosAoi/Aoi-Kimono.png" },
    { id: "p43", name: "Llavero acrílico de Aoi", price: 3, img: "ProductosAoi/Aoi-Llavero.png" },
    { id: "p44", name: "Mousepad de Aoi", price: 8, img: "ProductosAoi/Aoi-mousepad.png" },
    { id: "p45", name: "Peluca de Aoi", price: 14.5, img: "ProductosAoi/Aoi-Peluca.png" },
    { id: "p46", name: "Peluche de Aoi", price: 38, img: "ProductosAoi/Aoi-Peluche.png" },
    { id: "p47", name: "Set de pines de Aoi", price: 10, img: "ProductosAoi/Aoi-Pin.png" },
    { id: "p48", name: "Polera de Aoi", price: 15.5, img: "ProductosAoi/Aoi-polera.png" },
    { id: "p49", name: "Set de posters de Aoi", price: 10, img: "ProductosAoi/Aoi-Poster.png" },
    { id: "p50", name: "Uniforme de Aoi", price: 60, img: "ProductosAoi/Aoi-Ropa.png" }

  ],
  aoi: [
    { id: "p51", name: "Acrílico de Akane", price: 20, img: "ProductosAkane/Akane-acrilico.png" },
    { id: "p52", name: "Amuleto de Akane", price: 5, img: "ProductosAkane/Akane-amuleto.png" },
    { id: "p53", name: "Keychain de Akane", price: 8, img: "ProductosAkane/Akane-keychain.png" },
    { id: "p54", name: "Llavero acrílico de Akane", price: 3, img: "ProductosAkane/Akane-llavero.png" },
    { id: "p55", name: "Peluca de Akane", price: 14.5, img: "ProductosAkane/Akane-peluca.png" },
    { id: "p56", name: "Peluche de de Akane", price: 38, img: "ProductosAkane/Akane-peluche.png" },
    { id: "p57", name: "Set de posters de Akane", price: 10, img: "ProductosAkane/Akane-poster.png" },
    { id: "p58", name: "Reloj de Akane", price: 100, img: "ProductosAkane/Akane-reloj.png" },
    { id: "p59", name: "Uniforme de Akane", price: 60, img: "ProductosAkane/Akane-Ropa.png" },
    { id: "p60", name: "Uniforme primer misterio de Akane", price: 75, img: "ProductosAkane/Akane-Ropamisterio.png" },

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
    cursor.style.top  = e.clientY + 'px';
  });

  document.addEventListener('mousedown', () => {
    cursor.style.background = "url('../img/hanako_cursor2.png') no-repeat center/contain";
    cursor.style.transform = "translate(-50%, -50%) scale(0.95)";
  });

  document.addEventListener('mouseup', () => {
    cursor.style.background = "url('../img/hanako_cursor1.png') no-repeat center/contain";
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});
