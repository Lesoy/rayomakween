// Validaciones del formulario login
function validar() {
  var nombre, correo, passw1, passw2, expresa;
  nombre = document.getElementById("name").value;
  correo = document.getElementById("correovalid").value;
  passw1 = document.getElementById("contrasena").value;
  passw2 = document.getElementById("repcontrasena").value;
  expresa = /\w+@\w+\.+[a-z]/;

  if (nombre == "" || nombre == null || passw1 == "" || passw1 == null || passw2 == "" || passw2 == null || correo == "" || correo == null) {
    Swal.fire({
      icon: 'warning',
      title: 'Advertencia',
      text: 'Todos los campos son obligatorios',

    })
    return false;
  }
  else if (nombre.length > 50) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Nombre muy largo',

    })
    return false;
  }
  else if (nombre.length < 3) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Nombre muy corto',

    })
    return false;
  }
  else if (correo.length > 50) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Correo muy largo',
    })
    return false;
  }
  else if (correo.length < 8) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Correo muy corto',
    })
    return false;
  }
  else if (passw1.length > 20 || passw2.length > 20) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Contraseña muy larga',
    })
    return false;
  }
  else if (passw1.length < 5 || passw2.length < 5) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Contraseña muy corta',
    })
    return false;
  }
  else if (passw1 != passw2) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las contraseñas deben ser iguales',

    })
    return false;
  }
  else if (/[0-9]/.test(nombre)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El nombre tiene números',
    })
    return false;
  }
  else if (!expresa.test(correo)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Correo no valido',
    })
    return false;
  }
  else if (nombre.trim().length==0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El nombre tiene solamente espacios en blancos',
    })
    return false;
  }
  else if (passw1.trim().length==0 || passw2.trim().length==0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las contraseñas tienen solamente espacios en blancos',
    })
    return false;
  }

  else {

    return true;
  }

}

// Validaciones del formulario login
function validar2() {

  var coremail, contrapas, caldo;
  coremail = document.getElementById("correid").value;
  contrapas = document.getElementById("contraid").value;
  caldo = /\w+@\w+\.+[a-z]/;


  if (contrapas == "" || contrapas == null || coremail == "" || coremail == null) {
    Swal.fire({
      icon: 'warning',
      title: 'Advertencia',
      text: 'Todos los campos son obligatorios',

    })
    return false;
  }
  else if (!caldo.test(coremail)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Correo no valido',
    })
    return false;
  }
  else if (contrapas.trim().length == 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La contraseña tienen solamente espacios en blancos',
    })
    return false;
  }
  else if (contrapas.length > 20) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Contraseña muy larga',
    })
    return false;
  }
  else if (contrapas.length < 5) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Contraseña muy corta',
    })
    return false;
  }
  else if (coremail.length > 50) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Correo muy largo',
    })
    return false;
  }
  else if (coremail.length < 8) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Correo muy corto',
    })
    return false;
  }

  else {

    return true;
  }


}
// Validaciones del formulario subir trabajos
function validar3() {
  var fechaini, fechater, fechaAct, monto, animod, modelo, marca, color, categoria, diagnostico, material, fotos;
  fechaini = document.getElementById("fecha_ini").value;
  fechater = document.getElementById("fecha_ter").value;
  fechaAct = new Date();
  monto = document.getElementById("montopeso").value;
  animod = document.getElementById("anniomod").value;
  modelo = document.getElementById("modeloauto").value;
  marca = document.getElementById("marcaauto").value;
  color = document.getElementById("colors").value;
  categoria = document.getElementById("seleccion").selectedIndex;
  diagnostico = document.getElementById("diag").value;
  material = document.getElementById("material").value
  fotos = document.getElementById("foto").value

  var anio1 = fechaini.slice(0, 4);
  var mes1 = fechaini.slice(5, 7);
  var dia1 = fechaini.slice(8, 10);

  var anio2 = fechater.slice(0, 4);
  var mes2 = fechater.slice(5, 7);
  var dia2 = fechater.slice(8, 10);

  var fechaNueva1 = new Date(anio1, (mes1 - 1), dia1);
  var fechaNueva2 = new Date(anio2, (mes2 - 1), dia2);
  
  if(modelo == "" || modelo == null || marca == "" || marca == null || color == "" || color == null 
     || animod == "" || animod == null || diagnostico == "" || diagnostico == null || fechaini == ""
     || fechaini == null || fechater == "" || fechater == null || material == "" || material == null
     || monto == "" || monto == null){ 
     
      Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: 'Todos los campos son obligatorios',
      })
      return false;
  }
  else if(modelo.length > 50){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Nombre del modelo muy largo',
    })
    return false;
  }
  else if(modelo.length<3){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Nombre del modelo muy corto',
    })
    return false;
  }
  else if(marca.length > 50){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Nombre de la marca es muy largo',
    })
    return false;
  }
  else if(marca.length<3){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Nombre de la marca es muy corto',
    })
    return false;
  }
  else if(color.length > 50){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Nombre del color es muy largo',
    })
    return false;
  }
  else if(color.length<3){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Nombre del color es muy corto',
    })
    return false;
  }
  else if(diagnostico.length > 850){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El diagnostico sobrepasa los 850 caracteres',
    })
    return false;
  }
  else if(diagnostico.length<5){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El diagnostico no pasa de los 5 caracteres minimos',
    })
    return false;
  }
  else if (animod < 1000 || animod > 10000){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Año inconsistente',
    })
    return false;
  }
  else if(material.length > 850){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El campo material sobrepasa los 850 caracteres',
    })
    return false;
  }
  else if(material.length<5){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El campo material no pasa de los 5 caracteres minimos',
    })
    return false;
  }
  else if (fechaNueva1 > fechaAct) {
    Swal.fire({
      icon: 'error',
      title: 'Fecha de llegada no valida',
      text: 'fecha incorrecta'
    });
    return false;
  } 
  else if (fechaNueva2 > fechaAct) {
    Swal.fire({
      icon: 'error',
      title: 'Fecha de retiro no valida',
      text: 'fecha incorrecta'
    });
    return false;
  } 
  else if (fechaNueva1 > fechaNueva2) {
    Swal.fire({
      icon: 'error',
      title: 'Fecha de llegada no valida',
      text: 'fecha inconsistente'
    });
    return false;

  } 
  else if (animod < 0) {
    Swal.fire({
      icon: 'error',
      title: 'Año no valido',
      text: 'El año tiene que ser mayor que 0'
    });
    return false;
  } 
  else if (monto < 0) {
    Swal.fire({
      icon: 'error',
      title: 'Monto no valido',
      text: 'El monto tiene que ser mayor que 0'
    });
    return false;
  } else if (categoria == null || categoria == 0){
    Swal.fire({
      icon: 'error',
      title: 'Seleccione una opcion de categoria',
    });
    return false;
  }
  else if (marca.trim().length == 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La marca tienen solamente espacios en blancos',
    })
    return false;
  }
  else if (modelo.trim().length == 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El modelo tienen solamente espacios en blancos',
    })
    return false;
  }
  else if (color.trim().length == 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El color tienen solamente espacios en blancos',
    })
    return false;
  }
  else if (diagnostico.trim().length == 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El diagnóstico tienen solamente espacios en blancos',
    })
    return false;
  }
  else if (material.trim().length == 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El espacio material tienen solamente espacios en blancos',
    })
    return false;
  }
  else {
    return true;
  }
}

//Validaciones de contacto
function validar4() {
  var  nombre2, correo2, motivo, comentar,expresa2;
 
  nombre2 = document.getElementById("name2").value;
  correo2 = document.getElementById("correid2").value;
  motivo = document.getElementById("seleccion2").selectedIndex;
  comentar = document.getElementById("mot").value;
  expresa2 = /\w+@\w+\.+[a-z]/;

  if (nombre2 == "" || nombre2 == null || correo2 == "" || correo2 == null || motivo == "" || motivo == null || comentar== "" || comentar == null) {
    Swal.fire({
      icon: 'warning',
      title: 'Advertencia',
      text: 'Todos los campos son obligatorios',

    })
    return false;
  }
  else if (nombre2.length > 50) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Nombre muy largo',

    })
    return false;
  }
  else if (nombre2.length < 3) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Nombre muy corto',

    })
    return false;
  }
  else if (correo2.length > 50) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Correo muy largo',
    })
    return false;
  }
  else if (correo2.length < 8) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Correo muy corto',
    })
    return false;
  }
  else if(comentar.length > 850){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El campo comentar sobrepasa los 850 caracteres',
    })
    return false;
  }
  else if(comentar.length<5){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El campo comentar no pasa de los 5 caracteres minimos',
    })
    return false;
  }
  else if (motivo == null || motivo == 0){
    Swal.fire({
      icon: 'error',
      title: 'Seleccione un motivo',
    });
    return false;
  }
  else if (/[0-9]/.test(nombre2)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El nombre tiene números',
    })
    return false;
  }
  else if (!expresa2.test(correo2)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Correo no valido',
    })
    return false;
  }
  else if (nombre2.trim().length == 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El nombre tienen solamente espacios en blancos',
    })
    return false;
  }
  else if (correo2.trim().length == 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El correo tienen solamente espacios en blancos',
    })
    return false;
  }
  else if (comentar.trim().length == 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El comentario tienen solamente espacios en blancos',
    })
    return false;
  }
  else{
    return true;
  }
 
}






/*
function mensaje() {
  Swal.fire({
    title: "Exito",
    text: 'Usuario registrado exitosamente, por favor presione el botón de continuar',
    icon: 'success',
    confirmButtonText: 'Continuar',
    width: '55%',
    padding: '2rem',
    backdrop: 'true',
    allowEnterKey: true,

  });
  return false();
}




/* toast se puede ocupar para alertas
  position se puede ocupar para la posicion: top arriba, top-end abajo, center centro
  allowEnterKey: el usuario puede presionar enter para continuar*/