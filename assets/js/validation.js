document.getElementById("error_nombre_vacio").style.display="none";
document.getElementById("error_nombre_size").style.display="none";
document.getElementById("error_pApellido_vacio").style.display="none";
document.getElementById("error_pApellido_size").style.display="none";
document.getElementById("error_sApellido_vacio").style.display="none";
document.getElementById("error_sApellido_size").style.display="none";
document.getElementById("error_rut_vacio").style.display="none";
document.getElementById("error_rut_reg").style.display="none";
document.getElementById("error_tel_vacio").style.display="none";
document.getElementById("error_tel_isnan").style.display="none";
document.getElementById("error_tel_limit").style.display="none";
document.getElementById("error_mail_vacio").style.display="none";
document.getElementById("error_mail_reg").style.display="none";
document.getElementById("error_servicio").style.display="none";
document.getElementById("error_comentario").style.display="none";

function validarFormulario(){
    let nombre = document.getElementById('nombre').value;
    let pApellido = document.getElementById('pApellido').value;
    let sApellido = document.getElementById('sApellido').value;
    let telefonoFormulario = document.getElementById('telefonoFormulario').value;
    let emailFormulario = document.getElementById('emailFormulario').value;
    let rut = document.getElementById('numrut').value;
    let comentarioFormulario = document.getElementById('comentarioFormulario').value;
    let emailVerif = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let rutVerif = ^[1-9]\d*\-(\d|k|K)$;
    

    //nombre
    if(nombre.trim().length==0) {
        document.getElementById("error_nombre_vacio").style.display="inline";
        document.getElementById("error_nombre_size").style.display="none";
        document.getElementById("nombre").classList.add("is-invalid");
        
    }else if (nombre.trim().length < 3){
        document.getElementById("error_nombre_vacio").style.display="none";
        document.getElementById("error_nombre_vacio").style.display="inline";
        document.getElementById("nombre").classList.add("is-invalid");
    }else{
        document.getElementById("error_nombre_vacio").style.display="none";
        document.getElementById("error_nombre_size").style.display="none";
        document.getElementById("nombre").classList.remove("is-invalid");
        document.getElementById("nombre").classList.add("is-valid");
    }

    //papellido
    if(pApellido.trim().length==0) {
        document.getElementById("error_pApellido_vacio").style.display="inline";
        document.getElementById("error_pApellido_size").style.display="none";
        document.getElementById("pApellido").classList.add("is-invalid");
        
    }else if (pApellido.trim().length < 3){
        document.getElementById("error_pApellido_vacio").style.display="none";
        document.getElementById("error_pApellido_vacio").style.display="inline";
        document.getElementById("pApellido").classList.add("is-invalid");
    }else{
        document.getElementById("error_pApellido_vacio").style.display="none";
        document.getElementById("error_pApellido_size").style.display="none";
        document.getElementById("pApellido").classList.remove("is-invalid");
        document.getElementById("pApellido").classList.add("is-valid");
    }

    //sapellido

    if(sApellido.trim().length==0) {
        document.getElementById("error_sApellido_vacio").style.display="inline";
        document.getElementById("error_sApellido_size").style.display="none";
        document.getElementById("sApellido").classList.add("is-invalid");
        
    }else if (sApellido.trim().length < 3){
        document.getElementById("error_sApellido_vacio").style.display="none";
        document.getElementById("error_sApellido_vacio").style.display="inline";
        document.getElementById("sApellido").classList.add("is-invalid");
    }else{
        document.getElementById("error_sApellido_vacio").style.display="none";
        document.getElementById("error_sApellido_size").style.display="none";
        document.getElementById("sApellido").classList.remove("is-invalid");
        document.getElementById("sApellido").classList.add("is-valid");
    }

    //tel
    if(isNaN(telefonoFormulario)) {
        document.getElementById("error_tel_vacio").style.display="inline";
        document.getElementById("error_tel_isnan").style.display="inline";
        document.getElementById("error_tel_limit").style.display="none";
        document.getElementById("telefonoFormulario").classList.add("is-invalid");
    }else if(telefonoFormulario.length !=9){
        document.getElementById("error_tel_vacio").style.display="none";
        document.getElementById("error_tel_isnan").style.display="none";
        document.getElementById("error_tel_limit").style.display="inline";
        document.getElementById("telefonoFormulario").classList.remove("is-invalid");
        document.getElementById("telefonoFormulario").classList.add("is-valid");
    }else{
        document.getElementById("error_tel_vacio").style.display="none";
        document.getElementById("error_tel_isnan").style.display="none";
        document.getElementById("error_tel_limit").style.display="none";
        document.getElementById("telefonoFormulario").classList.remove("is-invalid");
        document.getElementById("telefonoFormulario").classList.add("is-valid");
    }

    //mail
    if (!emailVerif.test(emailFormulario)){
        document.getElementById("error_mail_reg").style.display="inline";
        document.getElementById("emailFormulario").classList.add("is-invalid");
    }else{
        document.getElementById("error_mail_reg").style.display="none";
        document.getElementById("emailFormulario").classList.remove("is-invalid");
        document.getElementById("emailFormulario").classList.add("is-valid");
    }

    //rut
    if (rut.lenght ==0){
        document.getElementById("error_rut_vacio").style.display="inline";
        document.getElementById("error_rut_reg").style.display="none";
        document.getElementById("rut").classList.add("is-invalid");
    }else if(!rutVerif.test(rut)){
        document.getElementById("error_rut_vacio").style.display="none";
        document.getElementById("error_rut_reg").style.display="inline";
        document.getElementById("rut").classList.add("is-invalid");
    }else{
        document.getElementById("error_rut_vacio").style.display="none";
        document.getElementById("error_rut_reg").style.display="none";
        document.getElementById("rut").classList.remove("is-invalid");
        document.getElementById("rut").classList.add("is-valid");
    }

        
    

    //com
    if (comentarioFormulario.lenght==0){
        document.getElementById("error_comentario").style.display="inline";
        document.getElementById("comentarioFormulario").classList.add("is-invalid");
    }else{
        document.getElementById("error_comentario").style.display="none";
        document.getElementById("comentarioFormulario").classList.remove("is-invalid");
        document.getElementById("comentarioFormulario").classList.add("is-valid");
    }

}