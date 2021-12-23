  const cantidadEmp = parseInt(prompt('ingrese cantidad de Empleados'))
  let cobranMucho = 0;
  let cobranPoco = 0;
  let total = 0;
  let i = 1;

  while (i <= cantidadEmp) {
    const sueldo = parseInt(prompt('ingrese el sueldo'))
    if ( sueldo >= 100 && sueldo <= 300) {
      cobranPoco++;
    } else {
      cobranMucho++
    }
    total = total + sueldo
    i++
  }

  alert(`cobran mucho ${cobranMucho} ycobran poco: ${cobranPoco} total: ${total}`)