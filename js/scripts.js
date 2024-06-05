// querySelector
const heading = document.querySelector('.header_texto h2') // 0 a 1 elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);


// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para enlace';
enlaces[1].classList.add('nueva-clase');
//enlaces[2].classList.remove('navegacion_enlace');



// generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

// Agregar href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace';

// Agregar la clase
nuevoEnlace.classList.add('navegacion_enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);

// Eventos
// console.log(1);

// window.addEventListener('load', function() { // load espera a que el js y los archivos que dependen del html esten listos
//     console.log(2);
// })

// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { // Solo espera por el html pero no espera al css o imagenes.
//     console.log(4);
// })

// console.log(5);

// window.onscroll = function() {
//     console.log('scrolling...')
// }


// // Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton-primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();

//     // Validar formulario

//     console.log('enviando formulario');
// });


// Eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validando formulario
    const { nombre, email, mensaje  } = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'error');

        return; // Corta la ejecucion del codigo
    }

    // Enviar el formulario
    mostrarAlerta('Mensaje enviado correctamente.')
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;

   // console.log(datos); 
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparece despues de 5 seg.
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}


