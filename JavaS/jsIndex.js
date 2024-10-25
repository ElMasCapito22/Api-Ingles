// Añade eventos de clic a los botones
/*/document.getElementById('englishButton').addEventListener('click', function() {
});

document.getElementById('spanishButton').addEventListener('click', function() {
});*/
function mostrarOpciones(id) {
    document.getElementById(id).style.display = "block";
}

function ocultarOpciones(id) {
    document.getElementById(id).style.display = "none";
}
function mostrarOpciones(id) {
    document.getElementById(id).style.display = "block";
}

function ocultarOpciones(id) {
    document.getElementById(id).style.display = "none";
}

// Función para mantener el menú visible
function mantenerOpciones(id) {
    document.getElementById(id).style.display = "block";
}
function mostrarOpciones(id) {
    document.getElementById(id).style.display = "block";
}

function ocultarOpciones(id) {
    document.getElementById(id).style.display = "none";
}
function mostrarOpciones(id) {
    document.getElementById(id).style.display = "block";
}

function ocultarOpciones(id) {
    // No utilizamos esta función para ocultar las subopciones.
}

function mostrarOpciones(id) {
    // Ocultar todos los submenús
    const submenus = ['foneticaOptions', 'lectoescrituraOptions'];
    submenus.forEach(submenu => {
        if (submenu !== id) {
            document.getElementById(submenu).style.display = "none";
            
        }
    });

    // Mostrar el submenú seleccionado
    const submenuElement = document.getElementById(id);
    submenuElement.style.display = submenuElement.style.display === "block" ? "none" : "block";
}

