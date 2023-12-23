
// Variables

const nombre = document.querySelector("#nombre");
const password = document.querySelector("#password");
const email = document.querySelector("#email");


// Event Listeners ( Eventos )

nombre.addEventListener("blur", validarTexto);


//Funciones

//inicioFunciones();
function validarTexto(e) {
    const mensaje = document.createElement("P"); // Declarar 'mensaje' fuera de los bloques if-else
    const contenedor = document.getElementsByClassName('form-container');

    if (e.target.value.trim() === "") {
        mensaje.textContent = "El campo nombre no puede ir vacío.";
    } else if (/^\d+$/.test(e.target.value)) {
        mensaje.textContent = "No es posible ingresar números.";
    } 

    // Añadir mensaje al contenedor si existe
    if (contenedor.length > 0) {
        contenedor[0].appendChild(mensaje);
    }
}

// REMOVER LOS MENSAJES QUE SE GENERAN





//COLOCAR LOS MENSAJES DEBAJO DE EL INPUT CORRESPONDIENTE