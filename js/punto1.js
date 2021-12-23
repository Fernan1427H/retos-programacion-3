let i = 1;
  let cantMayor = 0;
  let cantMenor = 0;

  while (i <= 10) {

  const nota = parseInt(prompt('Ingrese una nota'))
  if (nota >= 7) {
    cantMayor++;
  } else {
    cantMenor++;
  }
  i++;
}
alert(`La cantidad mayor: ${cantMayor} y la cantidad menor es ${cantMenor}`); 