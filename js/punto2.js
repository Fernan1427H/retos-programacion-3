  const cantidadAlturas = parseInt(prompt('ingrese cantidad de alturas'))
  let alturaPromedio = 0;
  let i = 1;

  while (i <= cantidadAlturas) {
    const altura = parseInt(prompt('Ingrese la altura'))
    alturaPromedio = alturaPromedio + altura;
    i++;
  }

  alert(`La altura Promedio es: ${alturaPromedio / cantidadAlturas}`);