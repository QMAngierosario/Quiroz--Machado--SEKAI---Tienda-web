// Cursor personalizado
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');

    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top  = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.background = "url('../img/jujutsu_cursor.png') no-repeat center/contain";
        cursor.style.transform = "translate(-50%, -50%) scale(0.95)";
    });

    document.addEventListener('mouseup', () => {
        cursor.style.background = "url('../img/jujutsu_cursor.png') no-repeat center/contain";
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
});


function getPersonajeFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("personaje");
}

const personajeInicial = getPersonajeFromURL();

/* DATA DEL MUNDO JJK*/
const slidesData = [
  {
    characters: [
      { id: "gojo", name: "Satoru Gojo", color: "#b87affff", img: "../img/gojo.png" },
      { id: "megumi", name: "Megumi Fushiguro", color: "#545fffff", img: "../img/megumi.png" },
      { id: "yuji", name: "Yuji Itadori", color: "#ffacd3ff", img: "../img/yuji.png" },
      { id: "nobara", name: "Nobara Kugisaki", color: "#f1bc7fff", img: "../img/nobara.png" },
      { id: "sukuna", name: "Ryomen Sukuna", color: "#8b1515ff", img: "../img/sukuna.png" }
    ]
  }
];

/*PRODUCTOS POR PERSONAJE*/
const productsByChar = {
  gojo: [
    { id: "p1", name: "Gatoru Gojo Mochila", price: 25, img: "ProductosGojo/Gatoru-mochila.png" },
    { id: "p2", name: "Gatoru Gojo Peluche", price: 35, img: "ProductosGojo/Gatoru-peluche.png" },
    { id: "p3", name: "Funko llavero de Gojo", price: 30, img: "ProductosGojo/Gojo-Funko.png" },
    { id: "p4", name: "Lentes de Gojo", price: 8, img: "ProductosGojo/Gojo-Lentes.png" },
    { id: "p5", name: "Llavero de Gojo", price: 3, img: "ProductosGojo/Gojo-Llavero.png" },
    { id: "p6", name: "Monedero de Gojo", price: 10, img: "ProductosGojo/Gojo-Monedero.png" },
    { id: "p7", name: "Peluca de Gojo", price: 14.5, img: "ProductosGojo/Gojo-Peluca.png" },
    { id: "p8", name: "Peluche Gojo", price: 38, img: "ProductosGojo/Gojo-Peluche.png" },
    { id: "p9", name: "Polera Gojo", price: 15.5, img: "ProductosGojo/Gojo-poleran.png" },
    { id: "p10", name: "Uniforme de Gojo completo", price: 60, img: "ProductosGojo/Gojo-Ropa.png" }
  ],
  megumi: [
    { id: "p11", name: "Funko llavero de Megumi", price: 30, img: "ProductosMegumi/Megumi- Funko.png" },
    { id: "p12", name: "Acrílico de Megumi", price: 10, img: "ProductosMegumi/Megumi-Acrilico.png" },
    { id: "p13", name: "Figura de Megumi", price: 50, img: "ProductosMegumi/Megumi-Figura.png" },
    { id: "p14", name: "Figura chibi de Megumi", price: 45, img: "ProductosMegumi/Megumi-Figurachibi.png" },
    { id: "p15", name: "Llavero de Megumi", price: 3, img: "ProductosMegumi/Megumi-Llavero.png" },
    { id: "p16", name: "Peluca de Megumi", price: 14.5, img: "ProductosMegumi/Megumi-Peluca.png" },
    { id: "p17", name: "Peluche de Megumi", price: 38, img: "ProductosMegumi/Megumi-Peluche.png" },
    { id: "p18", name: "Polera de Megumi", price: 15.5, img: "ProductosMegumi/Megumi-Polera.png" },
    { id: "p19", name: "Set de posters de Megumi", price: 10, img: "ProductosMegumi/Megumi-Poster.png" },
    { id: "p20", name: "Uniforme de Megumi completo", price: 60, img: "ProductosMegumi/Megumi-Ropa.png" }
  ],
  yuji: [
    { id: "p21", name: "Acrílico de Yuji", price: 10, img: "ProductosYuji/Yuji-Acrilico.png" },
    { id: "p22", name: "Figura de Yuji", price: 50, img: "ProductosYuji/Yuji-Figura.png" },
    { id: "p23", name: "Figura chibi de Yuji", price: 45, img: "ProductosYuji/Yuji-Figurachibi.png" },
    { id: "p24", name: "Funko llavero de Yuji", price: 30, img: "ProductosYuji/Yuji-Funko.png" },
    { id: "p25", name: "Llavero de Yuji", price: 3, img: "ProductosYuji/Yuji-llavero.png" },
    { id: "p26", name: "Peluca de Yuji", price: 14.5, img: "ProductosYuji/Yuji-Peluca.png" },
    { id: "p27", name: "Peluche de Yuji", price: 38, img: "ProductosYuji/Yuji-Peluche.png" },
    { id: "p28", name: "Polera de Yuji", price: 38, img: "ProductosYuji/Yuji-Polera.png" },
    { id: "p29", name: "Set de posters de Yuji", price: 10, img: "ProductosYuji/Yuji-Poster.png" },
    { id: "p30", name: "Uniforme de Yuji", price: 40, img: "ProductosYuji/Yuji-Ropa.png" }
  ],
  nobara: [
    { id: "p31", name: "Acrílico de Nobara", price: 10, img: "ProductosNobara/Nobara-Acrilico.png" },
    { id: "p32", name: "Billetera de Nobara", price: 12, img: "ProductosNobara/Nobara-Billetera.png" },
    { id: "p33", name: "Uniforme de Nobara completo", price: 60, img: "ProductosNobara/Nobara-cosplay.png" },
    { id: "p34", name: "Figura de Nobara", price: 50, img: "ProductosNobara/Nobara-Figura.png" },
    { id: "p35", name: "Figura chibi de Nobara", price: 45, img: "ProductosNobara/Nobara-Figurachibi.png" },
    { id: "p36", name: "Funko llavero de Nobara", price: 30, img: "ProductosNobara/Nobara-Funko.png" },
    { id: "p37", name: "Llavero de Nobara", price: 3, img: "ProductosNobara/Nobara-llavero.png" },
    { id: "p38", name: "Peluca de Nobara", price: 14.5, img: "ProductosNobara/Nobara-peluca.png" },
    { id: "p39", name: "Peluche de Nobara", price: 38, img: "ProductosNobara/Nobara-Peluche.png" },
    { id: "p40", name: "Polera de Nobara", price: 15.5, img: "ProductosNobara/Nobara-Polera.png" }
  ],
  sukuna: [
    { id: "41", name: "Acrílico de Sukuna", price: 10, img: "ProductosSukuna/Sukuna-acrilico.png"  },
    { id: "42", name: "Peluche de Sukuna", price: 45, img: "ProductosSukuna/Sukuna-Chibi.png"  },
    { id: "43", name: "Figura de Sukuna", price: 50, img: "ProductosSukuna/Sukuna-Figura.png"  },
    { id: "44", name: "Figura chibi de Sukuna", price: 45, img: "ProductosSukuna/Sukuna-Figurachibi.png"  },
    { id: "45", name: "Llavero acrílico de Sukuna", price: 3, img: "ProductosSukuna/Sukuna-llavero.png"  },
    { id: "46", name: "Dedo de Sukuna llavero", price: 7, img: "ProductosSukuna/Sukuna-llaverodedo.png"  },
    { id: "47", name: "Peluca de Sukuna", price: 14.5, img: "ProductosSukuna/Sukuna-Peluca.png"  },
    { id: "48", name: "Polera de Sukuna", price: 50, img: "ProductosSukuna/Sukuna-polera.png"  },
    { id: "49", name: "Set de posters de Sukuna", price: 50, img: "ProductosSukuna/Sukuna-Poster.png"  },
    { id: "50", name: "Cosplay de Sukuna", price: 60, img: "ProductosSukuna/Sukuna-Ropa.png"  }
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
  })
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
          <div style="padding:6px 10px;border-radius:8px;border:1px solid #000000ff">${qty}</div>
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