function ocultarMostrar(getElementById) {
    var x = document.getElementById(getElementById);
    if (x.style.display === "none") {
         x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function Mostrar(getElementById) {
    var x = document.getElementById(getElementById);
    if (x.style.display === "none") {
         x.style.display = "block";
    }
}

function Ocultar(getElementById) {
    var x = document.getElementById(getElementById);
    x.style.display = "none";
}