"use strict"

//Indica si un NIF es válido o no.
let dni = "54179163H"

//Para saber la letra válida, obtener el resto de la parte numérica entre 23, este caso Z.
let dniValido = "12345678Z"
let dniNoValido = "12345678H"

//Expresión regular para comprobar dni.
const exp = /^[0-9]{8}[A-Z]$/i

const validarDni = (dni, exp) => {

    if (exp.test(dni)) {

        let letra = dni.substring(8)
        let numerosDni = dni.substring(0, 8)
        let modulo = numerosDni % 23

        //Relacion resto del modulo y letra correspondiente.
        if (modulo == 0 && letra == "T" || modulo == 1 && letra == "R" || modulo == 2 && letra == "W" ||
            modulo == 3 && letra == "A" || modulo == 4 && letra == "G" || modulo == 5 && letra == "M" ||
            modulo == 6 && letra == "Y" || modulo == 7 && letra == "F" || modulo == 8 && letra == "P" ||
            modulo == 9 && letra == "D" || modulo == 10 && letra == "X" || modulo == 11 && letra == "B" ||
            modulo == 12 && letra == "N" || modulo == 13 && letra == "J" || modulo == 14 && letra == "Z" ||
            modulo == 15 && letra == "S" || modulo == 16 && letra == "Q" || modulo == 17 && letra == "V" ||
            modulo == 18 && letra == "H" || modulo == 19 && letra == "L" || modulo == 20 && letra == "C" ||
            modulo == 21 && letra == "K" || modulo == 22 && letra == "E") {
            return true
        }
        console.log(1)
        return false
    }
    console.log(2)
    return false
}

console.log(`El dni ${dni} ${(validarDni(dni, exp)) ? "es válido." : "no es válido."}`);
console.log(`El dni ${dniValido} ${(validarDni(dniValido, exp)) ? "es válido." : "no es válido."}`);
console.log(`El dni ${dniNoValido} ${(validarDni(dniNoValido, exp)) ? "es válido." : "no es válido."}`);
