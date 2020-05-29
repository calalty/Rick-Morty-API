const express = require('express')
// npm i express espress handle-bars
const hbs = require('express-handlebars')
const path = require('path')
const app = express()

const getRick = require('./lib/rickmorty')
const getMorty = require('./lib/rickmorty')
const getSquanchy = require('./lib/rickmorty')
const getBirdPerson = require('./lib/rickmorty')
const getMrPoopyButthole = require('./lib/rickmorty')


app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static('images'))

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}))

app.set('view engine', '.hbs')

app.get('/', async(req, res) => {
    res.render('index')
})

app.get('/rick', async(req, res) => {
    let data = await getRick.getRick()
    console.log(data)
    let name = data.results[0].name
    let status = data.results[0].status
    let species = data.results[0].species
    let gender = data.results[0].gender
    let location = data.results[0].location.name
    res.render('rick', {name, status, species, gender, location})
})

app.get('/morty', async(req, res) => {
    let data = await getMorty.getMorty()
    console.log(data)
    let name = data.results[0].name
    let status = data.results[0].status
    let species = data.results[0].species
    let gender = data.results[0].gender
    let location = data.results[0].location.name
    res.render('morty', {name, status, species, gender, location})
})

app.get('/squanchy', async(req, res) => {
    let data = await getSquanchy.getSquanchy()
    console.log(data)
    let name = data.results[0].name
    let status = data.results[0].status
    let species = data.results[0].species
    let gender = data.results[0].gender
    let location = data.results[0].location.name
    res.render('squanchy', {name, status, species, gender, location})
})

app.get('/birdperson', async(req, res) => {
    let data = await getBirdPerson.getBirdperson()
    console.log(data)
    let name = data.results[0].name
    let status = data.results[0].status
    let species = data.results[0].species
    let gender = data.results[0].gender
    let location = data.results[0].location.name
    let image = data.results[0].image
    res.render('birdperson', {name, status, species, gender, location, image})
}) 

app.get('/mrpoopybutthole', async(req, res) => {
    let data = await getMrPoopyButthole.getMrPoopyButthole()
    console.log(data)
    let name = data.results[0].name
    let status = data.results[0].status
    let species = data.results[0].species
    let gender = data.results[0].gender
    let location = data.results[0].location.name
    res.render('mrpoopy', {name, status, species, gender, location})
})

app.listen(3005,  () => {
    console.log('Server is running')
})

