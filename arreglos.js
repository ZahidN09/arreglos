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
        +"</td><td><button class='btn-eliminar' onclick='eliminarIzquierdo("+i
        +")'>Eliminar</button></td><td><button class='btn-mover' onclick='moverHaciaDerecha("+i
        +");'>➜</button></td></tr>";
    }
    cmpTabla.innerHTML = contenido;
}

function eliminarIzquierdo(indice){
    arregloIzquierdo.splice(indice,1);
    pintarArregloIzquierda();
}

function pintarArregloDerecha(){
    let cmpTabla = document.getElementById("tablaDerecha");
    let contenido = "";

    for(let i = 0;i<arregloDerecho.length;i++){  
        contenido += "<tr><td><button class='btn-mover' onclick='moverHaciaIzquierda("+i
        +");'>⬅</button></td><td>"+arregloDerecho[i]
        +"</td><td><button class='btn-eliminar' onclick='eliminarDerecho("+i
        +")'>Eliminar</button></td></tr>";
    }
    cmpTabla.innerHTML = contenido;
}

function eliminarDerecho(indice){
    arregloDerecho.splice(indice,1);
    pintarArregloDerecha();
}
function moverHaciaDerecha(indice){
    let num = arregloIzquierdo[indice];
    arregloDerecho.push(num);
    arregloIzquierdo.splice(indice,1);
    pintarArregloDerecha();
    pintarArregloIzquierda();
}

function moverHaciaIzquierda(indice){
    let num = arregloDerecho[indice];
    arregloIzquierdo.push(num);
    arregloDerecho.splice(indice,1);
    pintarArregloDerecha();
    pintarArregloIzquierda();
}