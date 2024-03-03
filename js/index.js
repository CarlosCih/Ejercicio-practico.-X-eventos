let clickCount = 0;

function scrollDown(){
  var height = document.body.scrollHeight;
  window.scroll(0,height);
}

function scrollUp(){
  var height = document.body.scrollHeight;
  window.scroll(height,0);
}

document.getElementById('clickButton').addEventListener('click', function() {
    clickCount++;
    if (clickCount % 2 === 0) {
      this.innerHTML = 'Click';
    } else {
      this.innerHTML = 'Haz hecho click';
    }
  });

// Evento de doble clic para ajustar el tamaño del botón
const clickButton = document.getElementById("doubleClickButton");
clickButton.addEventListener("dblclick", () => {
  if (clickButton.style.fontSize === "24px") {
    clickButton.style.fontSize = "15px"; // Tamaño de fuente aumentado
  } else{
    clickButton.style.fontSize = "24px"; // Restablecer el tamaño de fuente inicial
  }
});

document.getElementById('rightClick').addEventListener('contextmenu', function(event) {
  event.preventDefault(); // Evita que aparezca el menú contextual predeterminado
  alert('Has hecho clic derecho en el botón.'); // Puedes hacer cualquier acción aquí
});

// Función encapsulada para manejar el mouseover
function handleMouseOver() {
  const mouseOverButton = document.getElementById("mouseOverButton");
  mouseOverButton.addEventListener("mouseover", function() {
      this.innerHTML = "¡Ratón encima!";
  });
  mouseOverButton.addEventListener("mouseout", function() {
      this.innerHTML = "Mouse Over";
  });
}

// Llamada a la función para que se ejecute cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
  handleMouseOver();
});

// Función encapsulada para manejar el mouseout
function handleMouseOut() {
  const mouseOutButton = document.getElementById("mouseOutButton");
  mouseOutButton.addEventListener("mouseout", function() {
      alert("¡Has quitado el ratón del botón!");
  });
}

// Llamada a la función para que se ejecute cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
  handleMouseOut();
});

// Evento de mouseup
document.getElementById('mouseUpButton').addEventListener('mouseup', function(event) {
  alert('Botón del mouse soltado');
});

// Evento de mouseenter
document.getElementById('mouseEnterButton').addEventListener('mouseenter', function(event) {
  alert('El mouse entró en el área del botón');
});

// Evento de mouseleave
document.getElementById('mouseLeaveButton').addEventListener('mouseleave', function(event) {
  alert('El mouse salió del área del botón');
});



