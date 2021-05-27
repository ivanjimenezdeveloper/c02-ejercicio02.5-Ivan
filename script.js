let nombreItaliano = "Araraqui";
let nombreNoItaliano = "Jimenez";

pintarNombre(nombreItaliano);
pintarNombre(nombreNoItaliano);
n;

function esItaliano(palabra) {
  if (palabra.endsWith("i")) {
    return true;
  } else {
    return false;
  }
}

function pintarNombre(nombre) {
  if (esItaliano(nombre)) {
    console.log(
      `${nombre}:  Este apellido tiene muchas probabilidades de ser italiano`
    );
  } else {
    console.log(`${nombre}:  Este apellido podría ser de cualquier país`);
  }
}
