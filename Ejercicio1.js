function inicializar(){
    let arraynombres = [];
    for (let i = 0; i < 5; i++) {
        let nombre = prompt("Introduce un nombre");
        while(arraynombres.indexOf(nombre)!=-1){
            alert("El nombre ya existe");
            nombre = prompt("Introduce un nombre");
        }
        arraynombres.push(nombre);
    }
    arraynombres.sort();
    for (let j = 0; j < arraynombres.length; j++) {
        console.log(arraynombres[j].toUpperCase().substring(0,1));
    }
}