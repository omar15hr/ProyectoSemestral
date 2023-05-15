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
document.getElementById("error_codPromo_reg").style.display="none";
document.getElementById("error_metodopago_vacio").style.display="none";




function validarFormulario(){
    let nombre = document.getElementById('nombre').value;
    let pApellido = document.getElementById('pApellido').value;
    let sApellido = document.getElementById('sApellido').value;
    let telefonoFormulario = document.getElementById('telefonoFormulario').value;
    let emailFormulario = document.getElementById('emailFormulario').value;
    let rut = document.getElementById('rut').value;
    let comentarioFormulario = document.getElementById('comentarioFormulario').value;
    let tipoServicio = document.getElementById("tipoServicio").value;
    let codPromo = document.getElementById("codPromo").value;
    let metodoPago = document.getElementsByName("metodoPago");
    let emailVerif = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let rutVerif = /^[1-9]\d*\-(\d|k|K)$/;
    let telVerif = /^\d{9}$/;
    let codVerif = /\b[0-9]{3}[A-Za-z]{3}\b/;
    let opcionPago = 0;
    

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
    if (!telVerif.test(telefonoFormulario)){
        document.getElementById("error_tel_reg").style.display="inline";
        document.getElementById("telefonoFormulario").classList.add("is-invalid");
    }else{
        document.getElementById("error_tel_reg").style.display="none";
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
    if (rut.length ==0){
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

    //servicio
    
    if(tipoServicio == null){
        document.getElementById("error_servicio").style.display="inline";
        document.getElementById("tipoServicio").classList.add("is-invalid");
    }else{
        document.getElementById("error_servicio").style.display="none";
        document.getElementById("tipoServicio").classList.remove("is-invalid");
        document.getElementById("tipoServicio").classList.add("is-valid");
    }
    
    //cod

    if(!codVerif.test(codPromo)){
        document.getElementById("error_codPromo_reg").style.display="inline";
        document.getElementById("codPromo").classList.add("is-invalid");
    }else{
        document.getElementById("error_codPromo_reg").style.display="none";
        document.getElementById("codPromo").classList.remove("is-invalid");
        document.getElementById("codPromo").classList.add("is-valid");
    }

    //pago

    for(let i=0; i < metodoPago.length; i++){
        if(metodoPago[i].checked){
            opcionPago++;
        }
    }
    if(opcionPago == 0){
        document.getElementById("error_metodopago_vacio").style.display = "inline";
        document.getElementById("metodoPago").classList.add("is-invalid");
    }
    else{
        document.getElementById("error_metodopago_vacio").style.display = "none";
        document.getElementById("metodoPago").classList.remove("is-invalid");
        document.getElementById("metodoPago").classList.add("is-valid");
    }

    //com
    if (comentarioFormulario.length==0){
        document.getElementById("error_comentario").style.display="inline";
        document.getElementById("comentarioFormulario").classList.add("is-invalid");
    }else{
        document.getElementById("error_comentario").style.display="none";
        document.getElementById("comentarioFormulario").classList.remove("is-invalid");
        document.getElementById("comentarioFormulario").classList.add("is-valid");
    }

}




