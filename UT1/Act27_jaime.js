"use strict"

//En un vector de números, indicar:

const vector = [0, -1, -2, 3, 4, -5, 6, -7, 8, 9]

{
    //A) El número de elementos del vector.
    console.log(`El vector tiene ${vector.length} elementos.`)
}

{
    //B) Cuántos son pares y cuántos impares y cuáles son.
    let numPares = vector.filter(num => num % 2 == 0)
    let numImpares = vector.filter(num => num % 2 != 0)
    console.log(`Los números pares son ${numPares}`)
    console.log(`Los números impares son ${numImpares}`)
}

{
    //C) La suma de todos los números negativos.
    let sumaNegativos = vector.filter(num => num < 0).reduce((acc, valor) => acc + valor)
    console.log(`La suma de los negativos es igual a ${sumaNegativos}`)
}

{
    //D) El producto de todos los números positivos.
    let productoPositivos = vector.filter(num => num > 0).reduce((acc, valor) => acc * valor)
    console.log(`El producto de los positivos es igual a ${productoPositivos}`)
}

{
    //E) Cuántos son primos y cuáles son.
    let sonPrimos = vector => {
        let vectorNoPrimos = vector.filter(num => num <= 1)
        vector.forEach(item => {
            if (item > 2) {
                for (let i = 2; i < item; i++) {
                    if (item % i == 0) {
                        vectorNoPrimos.push(item)
                    }
                }
            }
        });
        return vector.filter(numero => !vectorNoPrimos.includes(numero))
    }
    /*GRANDE MI PANA JOAQUI*/
    console.log(`En mi array hay ${sonPrimos(vector).length < 2 ? sonPrimos(vector).length + " número primo. " : sonPrimos(vector).length + " números primos."}=> ${sonPrimos(vector)}`)
}

{
    //F) Los números que ocupan las posiciones pares del vector.
    let posicionesPar = ""
    for (let i = 0; i < vector.length; i++) {
        if (i % 2 == 0) {
            posicionesPar += `${vector[i]} `
        }
    }
    console.log(`Las posiciones pares contienen los números: ${posicionesPar}`)
}

{
    //G) El número mayor.
    let numMayor = vector.sort((a, b) => a - b).slice(-1)
    console.log(`El número mayor es ${numMayor}`)
}
//USAR shift() O pop() ELIMINA EL ELEMENTO DEL ARRAY
{
    //H) El número menor.
    let numMenor = vector.sort((a, b) => a - b).slice(0, 1)
    console.log(`El número menor es ${numMenor}`)
}

{
    //I) La media de todos los números, los números que están por encima y los que están por debajo.
    let media = vector.reduce((acc, valor) => acc + valor) / vector.length
    console.log(`La media del array es ${media}`)

    let porEncima = vector.filter(num => num > media)
    console.log(`Por encima de la media están: ${porEncima}`)

    let porDebajo = vector.filter(num => num < media)
    console.log(`Por debajo de la media están: ${porDebajo}`)
}

{
    //J) El vector ordenado de mayor a menos y viceversa.
    console.log(`De mayor a menor => ${vector.sort((a, b) => a - b)}`)
    console.log(`De menor a mayor => ${vector.sort((a, b) => b - a)}`)
}

{
    //K) Buscar un valor introducido por el usuario e indicar si existe o no
    let busqueda = prompt("Introduce un valor: ")
    console.log(`${vector.some(item => item == busqueda) ? 'El valor introducido existe.' : 'El valor introducido no existe.'}`)

}