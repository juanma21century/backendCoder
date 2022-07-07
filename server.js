const express = require('express')
const app = express()
const { Router } = require('express')

const routerProductos = Router()

app.use('/api/productos', routerProductos)

routerProductos.use(express.json())
routerProductos.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

const productos = []

routerProductos.get('/', (req,res)=> {
    res.send(productos)
})

routerProductos.get('/:id', (req,res)=>{
    const {id} = req.params
    let producto = productos.find(prod=>prod.id == id)
    res.json(producto)
})

routerProductos.post('/', (req,res)=> {
    productos.push(req.body)
    res.json(req.body)
})

routerProductos.delete('/:id', (req,res)=> {
    let {id} = req.params
    let borrado = productos.filter(prod => prod.id != id)
    res.json(borrado)
})

/* -------------------------------- SERVIDOR -------------------------------- */

const PORT = 8080
const server = app.listen(PORT, ()=> {
    console.log(`Corriendo servidor en puerto ${PORT}`)
})