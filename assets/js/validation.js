function validarFormulario(){
    let nombre = document.getElementById('nombre').value;
    let pApellido = document.getElementById('pApellido').value;
    let sApellido = document.getElementById('sApellido').value;
    let telefonoFormulario = document.getElementById('telefonoFormulario').value;
    let emailFormulario = document.getElementById('emailFormulario').value;
    let numrut = document.getElementById('numrut').value;
    let dvrut = document.getElementById('dvrut').value;
    let comentarioFormulario = document.getElementById('comentarioFormulario').value;
    let dVerif = 'K';
    let emailVerif = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(nombre.length==0 && nombre.length < 3) {
        alert("Nombre en formato no válido");
        return false;
    }

    if(pApellido.length==0 && pApellido.length < 3) {
        alert("Apellido paterno en formato no válido");
        return false;
    }

    if(sApellido.lenght==0 && sApellido.length < 3) {
        alert("Apellido materno en formato no válido");
        return false;
    }

    if(isNaN(telefonoFormulario) && telefonoFormulario.length !=9) {
        alert("Teléfono en formato no válido");
        return false;
    }

    if (!emailVerif.test(emailFormulario)){
        alert("Correo con formato incorrecto")
        return false;
    }else{
        if (emailFormulario.length===0){
            alert("Debe ingresar su correo electrónico")
            return false;
        }
    }

    if(isNaN(numrut) && numrut.lenght !=7 && numrut.lenght !=8) {
        alert("Número de rut en formato no válido");
        return false;
    }

    if (isNaN(dvrut) && dvrut.lenght > 1 && dvrut != dVerif){
        alert("Dígito verificador en formato inválido")
        return false;
    }

    if (comentarioFormulario.lenght==0){
        alert("Debe ingresar un comentario en el formulario")
        return false;
    }

}
