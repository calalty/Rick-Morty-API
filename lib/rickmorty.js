const fetch = require('node-fetch')

const rickURL = 'https://rickandmortyapi.com/api/character/?name=rick%20sanchez&status=alive'

const mortyURL = 'https://rickandmortyapi.com/api/character/?name=morty%20smith&status=alive'

const squanchyURL = 'https://rickandmortyapi.com/api/character/?name=squanchy'

const birdpersonURL = 'https://rickandmortyapi.com/api/character/?name=birdperson'

const mrpoopybuttholeURL = 'https://rickandmortyapi.com/api/character/?name=mr.%20poopybutthole'


const getRick = async() => {
    let data = await fetch(rickURL)

    let JSObject = await data.json()

    return JSObject
}

const getMorty = async() => {
    let data = await fetch(mortyURL)

    let JSObject = await data.json()

    return JSObject
}

const getSquanchy = async() => {
    let data = await fetch(squanchyURL)

    let JSObject = await data.json()

    return JSObject
}

const getBirdperson = async() => {
    let data = await fetch(birdpersonURL)

    let JSObject = await data.json()

    return JSObject
}

const getMrPoopyButthole = async() => {
    let data = await fetch(mrpoopybuttholeURL)

    let JSObject = await data.json()

    return JSObject
}

module.exports = {
    getRick,
    getMorty,
    getSquanchy,
    getBirdperson,
    getMrPoopyButthole
}