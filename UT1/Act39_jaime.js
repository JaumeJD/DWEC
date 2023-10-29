"use strict"

/**
 * Programa una función que dado un array de elementos, elimine los duplicados
 * pe.e miFuncion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true]
*/

let vector = ["x", 10, "x", 2, "10", 10, true, true]

let eliminarDuplicados = vector => {

    //El metodo filter devuelve un nuevo array que, en este caso, solo incluye los elementos
    //cuyos indices coinciden con sus valores indefOf(devuelve la primera posicion donde se encuentra el texto).
    //  Elem      i    indexOf
    //  "x"   -   0  -   0
    //  10    -   1  -   1
    //  "x"   -   2  -   0
    //  2     -   3  -   3
    //  "10"  -   4  -   4
    //  10    -   5  -   1
    //  true  -   6  -   6
    //  true  -   7  -   6

    let vectorUnico = vector.filter((elemento, index) => vector.indexOf(elemento) == index)
    return vectorUnico
}

console.log(eliminarDuplicados(vector))