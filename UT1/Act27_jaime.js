"use strict"

/**
En un vector de números, indicar:
a. El número de elementos del vector.
b. Cuántos son pares y cuántos impares y cuáles son.
c. La suma de todos los números negativos.
d. El producto de todos los números positivos.
e. Cuántos son primos y cuáles son.
f. Los números que ocupan las posiciones pares del vector.
g. El número mayor.
h. El número menor.
i. La media de todos los números, los números que están por encima 
    y los que están por debajo.
j. El vector ordenado de mayor a menos y viceversa.
k. Buscar un valor introducido por el usuario e indicar si existe o no
*/

let vector = [1, 2, 3, 4, 5, 6, 7, 8, 9]
{
    //APARTADO A
    console.log(`El vector tiene ${vector.length} elementos.`)
}

{
    //APARTADO B
    let numPares = `Los números pares son: `
    let numImpares = `Los números impares son: `
    vector.forEach(num => {
        if (num % 2 == 0) {
            numPares += `${num.toString()} `
        } else {
            numImpares += `${num.toString()} `
        }
    });
    console.log(numPares)
    console.log(numImpares)
}

{
    //APARTADO C
    let sumaNegativos = 0
    vector.forEach(num => {
        if (num < 0) {
            sumaNegativos += num
        }
    });
    console.log(`La suma de los negativos es igual a ${sumaNegativos}`)
}

{
    //APARTADO D
    let productosPositivos = 1
    vector.forEach(num => {
        if (num > 0) {
            productosPositivos *= num
        }
    });
    console.log(`El producto de los positivos es igual a ${productosPositivos}`)
}

{
    //APARTADO E
    let numerosPrimos = "Los números primos son: "
    let numerosNoPrimos = "Los números no primos son: "
    vector.forEach(num => {
        for (let i = 2; i < num; i++) {
            if (num % i !== 0) {
                return numerosPrimos += `${num.toString()} `
            } else {
                return numerosNoPrimos += `${num.toString()} `
            }
        }
    });
    console.log(numerosPrimos)
    console.log(numerosNoPrimos)
}

{
    //APARTADO F
    let posicionesPar = `Las posiciones pares contienen los números: `
    for (let i = 0; i < vector.length; i++) {
        if (i % 2 == 0) {
            posicionesPar += `${vector[i]} `
        }
    }
    console.log(posicionesPar)
}
{
    //APARTADO G

}