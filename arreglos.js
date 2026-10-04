let arregloDerecho = [20,25];
let arregloIzquierdo = [12,15];

function agregarEdad(){
    let edad = recuperarInt("edad");
    arregloIzquierdo.push(edad);
    pintarArregloIzquierda();
}

function pintarArregloIzquierda(){
    let cmpTabla = document.getElementById("tablaIzquierda");
    let contenido = "";

    for(let i = 0;i<arregloIzquierdo.length;i++){  
        contenido += "<tr><td>"+arregloIzquierdo[i]
        +"</td><td><button class'btn-eliminar' onclick='eliminarIzquierdo("+i+")'>Eliminar</button></td><td><button class='btn-mover'>➜</button></td></tr>";
    }
    cmpTabla.innerHTML = contenido;
}

function eliminarIzquierdo(indice){
    arregloIzquierdo.splice(indice,1);
    pintarArregloIzquierda();
}