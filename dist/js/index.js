function desplegarMenu() {
  var menu= document.getElementById('menuDesplegable');
  if (menu.style.display==='none') {
    menu.style.display='block';
    var giroBurguer= document.getElementById('burguer');
    giroBurguer.classList.remove('hamburguesaAnimada');
    var fondoOscuro= document.getElementById('fondoOscuro');
    fondoOscuro.classList.add('fondoOscuro');
  }
  else {
    menu.style.display='none';
  }
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

function OcultarFlecha() {
  document.getElementById('flecha').style.display='none';
}
window.onscroll = OcultarFlecha;
