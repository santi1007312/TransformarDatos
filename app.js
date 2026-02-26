function registrarUsuarios(ususarioPrincipal, usuarioAdicional) {
    const {nombre, edad} = ususarioPrincipal;
    
    console.log("usuario principal:  ${nombre}, edad: ${edad} años")

    const cantidadAdicionales = usuarioAdicional.length;

    console.log("se han regis")
}


function registrarUsuarios(usuarioPrincipal, ...usuariosAdicionales) {

  const { nombre, edad } = usuarioPrincipal;

  console.log(`Usuario principal: ${nombre}, Edad: ${edad} años.`);
  const cantidadAdicionales = usuariosAdicionales.length;
  
  console.log(`Se han registrado ${cantidadAdicionales} usuarios adicionales.`);
}


