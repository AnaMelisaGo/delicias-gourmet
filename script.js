// ===============================================
//              NAVBAR/HAMBURGUESA
// ===============================================
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');


window.addEventListener('load', ()=> {
    closeMenu();
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnBurger = burger.contains(event.target);

    if (!isClickInsideMenu && !isClickOnBurger) {
        closeMenu();
    }
});


burger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    burger.classList.toggle('activo');
});


function closeMenu() {
    menu.classList.add('hidden');
    burger.classList.remove('activo');
}

// ===============================================
//              MOSTRAR SECCIÓN
// ===============================================

function showSection(section, element) {
    let sections = document.querySelectorAll('.section');
    const menuItems = document.querySelectorAll('.menu-items');
    sections.forEach(sec => {
        if (sec.id === section) {
            sec.style.display = 'block';
        } else {
            sec.style.display = 'none';
        }
        closeMenu();
    });

    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');
}

// ===============================================
//              CAROUSEL
// ===============================================
let indiceFoto = 0;
function moverCarousel(direccion) {
    const carousel = document.getElementById('miCarousel');
    const fotos = document.querySelectorAll('#miCarousel img');
    const totalFotos = fotos.length;

    indiceFoto += direccion;

    if (indiceFoto >= totalFotos) indiceFoto = 0;
    if (indiceFoto < 0 ) indiceFoto = totalFotos - 1;

    fotos.forEach(foto => foto.classList.remove('active'));
    fotos[indiceFoto].classList.add('active');

}

// ===============================================
//              GALERÍA
// ===============================================
function mostrarImagen(src) {
    const imagenGrande = document.querySelector('.imagen-grande img');
    imagenGrande.src = src;

    const miniaturas = document.querySelectorAll('.imagen-miniaturas img');
    miniaturas.forEach(img => {
        img.classList.remove('active');
        if (img.src === src) {
            img.classList.add('active');
        }
    });
}

// ===============================================
//              VALIDACIÓN DE FORMULARIO
// ===============================================
const form = document.getElementById('contactForm');
const resetBtn = document.getElementById('resetBtn');

// Contenedores del formulario y mensaje
const contenedorFormulario = document.getElementById('formContainer');
const contenedorMensaje = document.getElementById('contenedorMensaje');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío del formulario

    // Valores de los inputs
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const fecha = document.getElementById('fecha').value;

    // Contenedores de mensajes error
    const errorNombre = document.getElementById('errorNombre');
    const errorEmail = document.getElementById('errorEmail');
    const errorFecha = document.getElementById('errorFecha');

    // email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Borrar los mensajes de error anteriores
    errorNombre.textContent = '';
    errorEmail.textContent = '';
    errorFecha.textContent = '';

    let esValido = true;

    if (nombre === '' || nombre.split(' ').length < 2) {
        errorNombre.textContent = 'Por favor, introduzca su nombre completo.';
        esValido = false;
    }

    if (email === '' || !emailRegex.test(email)) {
        errorEmail.textContent = 'Por favor introduzca su correo electrónico válido.';
        esValido = false;
    }

    if (fecha === '') {
        errorFecha.textContent = 'Por favor, ponga ó seleccione la fecha que desea.';
        esValido = false;
    }

    if (esValido) {
        contenedorFormulario.classList.add('hide');
        contenedorMensaje.style.display = 'block';
    }
});

resetBtn.addEventListener('click', () => {
    contenedorFormulario.classList.remove('hide');
    contenedorMensaje.style.display = 'none';
    form.reset();
})