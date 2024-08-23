//Haz tú validación en javascript acá
// pattern="[A-Za-z\s]"
const btn = document.getElementById("formbtn");
var inputs = document.getElementsByClassName("formcontacto__input");
const errores = {
    name:{
        tamanho:"El nombre debe ser de al menos 10 caracteres",
        caracteres:"El nombre solo debe tener letras"
    },
    email:{
        tamanho:"El correo debe ser de al menos 4 caracteres despues del @",
    }
}
btn.addEventListener("click", function() {
    let nombre = inputs.nombre.value;
    let email = inputs.email.value.split("@");
    inputs.nombre.setCustomValidity("");
    inputs.nombre.reportValidity();
    inputs.email.setCustomValidity("");
    inputs.email.reportValidity();
    console.log(inputs.nombre.checkValidity())

    if(!validar(nombre,"tamanho",10)){
        inputs.nombre.setCustomValidity(errores.name.tamanho);
        inputs.nombre.reportValidity();
    }
    if(validar(nombre,"caracteres",/[1-9]/)){
        inputs.nombre.setCustomValidity(errores.name.caracteres);
        inputs.nombre.reportValidity();
    }
    if(!validar(email[1],"tamanho",4)){
        inputs.email.setCustomValidity(errores.email.tamanho);
        inputs.email.reportValidity();
    }
    console.log(inputs.asunto.value)
    console.log(document.getElementById("mensagem").value)
    window.open(`mailto:anca.mister@gmail.com?subject=${inputs.asunto.value}&body=${'Mucho gusto, soy/somos: ' + nombre + '%0D%0A%0D%0A' + document.getElementById("mensagem").value}`);
});

function validar (elemento, tipo, validacion){
    if(tipo == "tamanho"){
        return elemento.length >= validacion;
    }else if(tipo == "caracteres"){
        return validacion.test(elemento);
    }
}