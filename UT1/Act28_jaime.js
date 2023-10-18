"use strict"

/**
En un vector de cadenas, indicar:
a. La cadena más corta.
b. La cadena más larga.
c. La cadena con más letras ‘a’.
d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son.
*/

const vectorCadenas = ["diamante", "esternocleidomastoideo", "bola", "ola", "pasamontañas", "salto", "bollicao"]

//A) La cadena más corta.
{
    let cadenaCorta = vectorCadenas[0]
    vectorCadenas.forEach(cadena => {
        if (cadena.length < cadenaCorta.length) {
            cadenaCorta = cadena
        }
    });
    console.log(`La cadena más corta es ${cadenaCorta}`)
}

//B) La cadena más larga.
{
    let cadenaLarga = vectorCadenas[0]
    vectorCadenas.forEach(cadena => {
        if (cadena.length > cadenaLarga.length) {
            cadenaLarga = cadena
        }
    });
    console.log(`La cadena más larga es ${cadenaLarga}`)
}

//C) La cadena con más letras 'a'.
{
    let contarLetrasA = vectorCadenas => {
        let cadenaMasA = vectorCadenas[0]

        vectorCadenas.forEach(cadena => {
            if ((cadena.split('a').length - 1) > cadenaMasA.split('a').length - 1) {
                cadenaMasA = cadena
            }
        });

        return cadenaMasA
    }
    console.log(`La cadena con más 'a' es ${contarLetrasA(vectorCadenas)} con ${contarLetrasA(vectorCadenas).split('a').length - 1} a.`)
}

//D) Cuántas cadenas hay que tengan la 'b' y cuáles son.
{
    let contieneLetraB = vectorCadenas => {
        let cadenasConB = []
        vectorCadenas.forEach(cadena => {
            if (cadena.includes("b")) {
                cadenasConB.push(cadena)
            }
        })
        return cadenasConB
    }
    console.log(`Hay ${contieneLetraB(vectorCadenas).length < 2 ? contieneLetraB(vectorCadenas).length + ' cadena:' : contieneLetraB(vectorCadenas).length + ' cadenas:'} 
    ${contieneLetraB(vectorCadenas)}`)
}