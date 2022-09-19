function insertar(){
    let numero=prompt("Numero de empleado");
    let dni=prompt("DNI del empleado");
    let nombre=prompt("Nombre del empleado");
    let apellidos=prompt("Apellidos del empleado");

    let tabla=document.getElementById("tabla");
    
    let columna1=document.createElement("td");
    let columna2=document.createElement("td");
    let columna3=document.createElement("td");
    let columna4=document.createElement("td");

    columna1.appendChild(document.createTextNode(numero));
    columna2.appendChild(document.createTextNode(dni));
    columna3.appendChild(document.createTextNode(nombre));
    columna4.appendChild(document.createTextNode(apellidos));

    let fila=document.createElement("tr");
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    fila.appendChild(columna3);
    fila.appendChild(columna4);

    tabla.appendChild(fila);

    let numEmpleado=document.getElementById("totalnum");
    numEmpleado.textContent=parseInt(numEmpleado.textContent)+1;
}

function eliminar(){

}

function modificar(){

}