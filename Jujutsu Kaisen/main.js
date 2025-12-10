function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

const characters = [
    {
        name: "Satoru Gojō",
        bgName: "GOJO",
        img: "Images/gojo.png",
        rounds: "78",
        time: "38:24",
        rate: "100%",
        bio: "El hechicero más fuerte de la era moderna. Poseedor de los Seis Ojos y del Infinito, domina el espacio con absoluta precisión y una confianza inquebrantable."
    },
    {
        name: "Megumi Fushiguro",
        bgName: "MEGUMI",
        img: "Images/megumi.png",
        rounds: "50",
        time: "22:10",
        rate: "95%",
        bio: "Un joven hechicero con un enorme potencial. Utiliza el estilo de sombras tenebrosas para invocar shikigamis y moldear la oscuridad a su favor."
    },
    {
        name: "Yūji Itadori",
        bgName: "YUJI",
        img: "Images/yuji.png",
        rounds: "90",
        time: "45:00",
        rate: "88%",
        bio: "Un chico con fuerza sobrehumana y la extraordinaria capacidad de albergar a Sukuna. Su empatía y determinación lo convierten en un luchador incansable."
    },
    {
        name: "Nobara Kugisaki",
        bgName: "NOBARA",
        img: "Images/nobara.png",
        rounds: "120",
        time: "15:30",
        rate: "92%",
        bio: "Una hechicera feroz y elegante. Su técnica de muñecos vudú combina precisión, sangre fría y un estilo explosivo que deja marca en cualquiera."
    },
    {
        name: "Ryōmen Sukuna",
        bgName: "SUKUNA",
        img: "Images/sukuna.png",
        rounds: "60",
        time: "30:00",
        rate: "98%",
        bio: "El Rey de las Maldiciones. Cruel, inteligente y despiadado, posee un vasto dominio de técnicas prohibidas capaces de aniquilar ciudades enteras."
    }
];


// IDs cortos tienda
const characterIDs = ["gojo", "megumi", "yuji", "nobara", "sukuna"];


// Referencias DOM Carrusel
const bgName = document.getElementById('bgName');
const heroImage = document.getElementById('heroImage');
const heroName = document.getElementById('heroName');
const statRounds = document.getElementById('statRounds');
const statTime = document.getElementById('statTime');
const statRate = document.getElementById('statRate');
const heroBio = document.getElementById('heroBio');
const wheelItems = document.querySelectorAll('.wheel-item');
const shopBtn = document.getElementById('shopBtn'); 


function selectCharacter(index) {


    wheelItems.forEach(item => item.classList.remove('active'));
    wheelItems[index].classList.add('active');

    const data = characters[index];

    heroImage.style.opacity = 0;
    heroName.style.opacity = 0;
    heroBio.style.opacity = 0;

    setTimeout(() => {
        bgName.innerText = data.bgName;
        heroImage.src = data.img;
        heroName.innerText = data.name;
        statRounds.innerText = data.rounds;
        statTime.innerText = data.time;
        statRate.innerText = data.rate;
        heroBio.innerText = data.bio;

        heroImage.style.opacity = 1;
        heroName.style.opacity = 1;
        heroBio.style.opacity = 1;

        heroName.classList.remove('fade-in');
        void heroName.offsetWidth;
        heroName.classList.add('fade-in');
    }, 200);

    shopBtn.onclick = function () {
        irATienda(characterIDs[index]);
    };
}

function irATienda(personaje) {
    window.location.href = "../JJK/indexJJKT.html?personaje=" + encodeURIComponent(personaje);
}

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');

    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top  = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.background = "url('Images/jujutsu_cursor.png') no-repeat center/contain";
        cursor.style.transform = "translate(-50%, -50%) scale(0.95)";
    });

    document.addEventListener('mouseup', () => {
        cursor.style.background = "url('Images/jujutsu_cursor.png') no-repeat center/contain";
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
});

/*MÚSICA DE FONDO*/

   document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');

    if (music) {
        let musicStarted = false;

        function unmuteAndPlayMusic() {
            if (musicStarted) return; 

            music.muted = false;
            music.volume = 1.0; 

            music.play()
                .then(() => {
                    console.log("Música iniciada y activada por interacción del usuario.");
                    musicStarted = true;
                })
                .catch(error => {
                    console.error("No se pudo iniciar la reproducción del audio:", error);
                });

            document.removeEventListener('click', unmuteAndPlayMusic);
            document.removeEventListener('keydown', unmuteAndPlayMusic);
        }

        document.addEventListener('click', unmuteAndPlayMusic);
        document.addEventListener('keydown', unmuteAndPlayMusic);
    }
});