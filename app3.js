function mostrarDireccion(direccion) {
  try {
    const { ciudad, pais } = direccion;

    if (ciudad, pais) {
      throw new Error("La información de la dirección no es válida");
    }

    console.log(`Ubicación: ${ciudad}, ${pais}.`);

  } catch (error) {

    console.error("Hubo un error:", error.message);
  }
}
