import {barcelona , roma , paris , londres} from "./ciudades.js"
//obtener los elementos del DOM

let enlaces = document.querySelectorAll("a")

let tituloElemento = document.getElementById("titulo")
let subTituloElemento = document.getElementById("subtitulo")
let parrafoElemento = document.getElementById("parrafo")
let precioElemento = document.getElementById("precio")

//AGREGAR UN EVENTO A CADA ENLACE
enlaces.forEach(function(enlace){
    enlace.addEventListener('click' , function(){
        //REMOVER EL ACTIVO DE TODOS LOS ENLACES
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });

        //AGREGAR ACTIVE AL  QUE CORRESPONDA
        this.classList.add('active')

        //OBTENER EL CONTENIDO CORRESPONDIENTE  SEGUN ENLACE
        let contenido = obtenerContenido(this.textContent)

       //MOSTRAR CONTENIDO EN EL DOM
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    })
       
}
)

//FUNCION PARA TRAER  LA INFORMACION CORRECTA  DESDE CIUDADES.JS
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres':londres
    };

    return contenido [enlace] ;
}