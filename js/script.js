const usuario = document.getElementById("usuario");
const contra = document.getElementById("contra");

const form1 = document.querySelector(".btn1");
const form2 = document.querySelector(".btn2");
const boton = document.getElementsByClassName("guardar");
const sumas = document.querySelector("#sumas")

let usuarioBD = "1044610050"
let contraBD = "4500164401"
let extraerU = usuarioBD.slice(0, 1)
let extraerC = contraBD.slice(0, 1)
sumas.textContent = (`${extraerU}+${extraerC}`);

form1.addEventListener("click", function (e) {
    e.preventDefault();

    if (usuario.value !== usuarioBD && contra.value !== contraBD) {
        alert("Usuario o Contraseña incorrecta")
        return
    }
    // alert('Por favor realice el captcha para poder ingresar.')
})
// o suma o sumas, cuando lo cambio, desaparece el div de sumas mas raro, y tambien pense que era contenedor porque uno siempre senala a la parte donde se encuentra TransformStreamDefaultController, como a veces con formularios
form2.addEventListener("click", function (e) {
    e.preventDefault();
    const suma = document.getElementById("suma").value;
    const resultado = Number(extraerU) + Number(extraerC)
    if (suma != resultado) {
        alert("respuesta incorrecta")
        return
    }
    console.log('BIENVENIDO')
})