/*Menú*/
function desplegarMenu() {
  var menu= document.getElementById('menuDesplegable');
    menu.style.display='block';
    var giroBurguer= document.getElementById('burguer');
    giroBurguer.classList.remove('hamburguesaAnimada');
    var fondoOscuro= document.getElementById('fondoOscuro');
    fondoOscuro.classList.add('fondoOscuro');
}

function OcultarMenu() {
  var menu= document.getElementById('menuDesplegable');
  if (menu.style.display==='block') {
    menu.style.display='none';
    var giroBurguer= document.getElementById('burguer');
    giroBurguer.classList.add('hamburguesaAnimada');
    fondoOscuro.classList.remove('fondoOscuro');
  }
  else {
    menu.style.display='block';
  }
}
/*Home*/
function OcultarFlecha() {
  document.getElementById('flecha').style.display='none';
}
window.onscroll = OcultarFlecha;

/*Quién hay ahí*/
/*Víctor*/
function CambiarTexto1() {
  document.getElementById('botonPersona1').innerHTML='¡Buenas!';
}

function IgualarTexto1() {
  document.getElementById('botonPersona1').innerHTML='Ver más';
}
/*Pau*/
function CambiarTexto2() {
  document.getElementById('botonPersona2').innerHTML='Te cuento';
}

function IgualarTexto2() {
  document.getElementById('botonPersona2').innerHTML='Ver más';
}
/*Febrero*/
function CambiarTexto3() {
  document.getElementById('botonPersona3').innerHTML='¿Qué tal?';
}

function IgualarTexto3() {
  document.getElementById('botonPersona3').innerHTML='Ver más';
}
/*Adri*/
function CambiarTexto4() {
  document.getElementById('botonPersona4').innerHTML='¿Hablamos?';
}

function IgualarTexto4() {
  document.getElementById('botonPersona4').innerHTML='Ver más';
}
/*Aleix*/
function CambiarTexto5() {
  document.getElementById('botonPersona5').innerHTML='Saludos';
}

function IgualarTexto5() {
  document.getElementById('botonPersona5').innerHTML='Ver más';
}
/*Santi*/
function CambiarTexto6() {
  document.getElementById('botonPersona6').innerHTML='¿Qué hay?';
}

function IgualarTexto6() {
  document.getElementById('botonPersona6').innerHTML='Ver más';
}
