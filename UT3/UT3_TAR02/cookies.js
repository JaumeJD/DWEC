"use strict"

//Función por defecto para crear cookies.
let setCookie = (cname, cvalue, exdays) => {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    let expires = "expires=" + d.toUTCString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

//Función por defecto para consultar cookies.
let getCookie = (cname) => {
    let name = cname + "="
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == " ") {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

//Función por defecto para eliminar cookies.
let deleteCookie = (cname) => {
    document.cookie = cname + "=; expires=Thu, 01 JAN 1970 00:00:01 GMT;path=/"
}

//Función para comprobar si existe una cookie, si no, la establece.
let checkCookie = () => {
    let user = getCookie("username")
    if (user != "") {
        alert(`Welcome again ${user}`)
    } else {
        user = prompt("Please enter your name:", "")
        if (user !== "" && user !== null) {
            setCookie("username", user, 365)
        }
    }
}