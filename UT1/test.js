"use strict"

const user1 = {
    nombre: "Federico", edad: 30
}

const user2 = { nombre: "Ramón", edad: 31 }

const user3 = { nombre: "Carlos", edad: 32 }

const users = [
    { nombre: "Juan", edad: 35 },
    { nombre: "Pepe", edad: 40 },
    { nombre: "Matilde", edad: 45 }
]

function f3(u1, ...u2) {

    let edadTotal = u1.edad;

    u2.forEach(user => {
        edadTotal += user.edad
    })

    edadTotal = u2.users.map((user) => user.edad)

    return edadTotal
}

console.log(f3(user1, user2, user3))