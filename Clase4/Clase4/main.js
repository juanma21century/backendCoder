 const fs = require('fs')
 
 const productos =[
    {
        producto: "Monitor",
        precio: 10000,
        id : 1
    },
{
        producto: "Teclado",
        precio: 5800,
        id: 2
    },
{
        producto: "CPU",
        precio: 30000,
        id: 3
    }
 ];

 class Contenedor{
    constructor(archivo){
        this.archivo = archivo
    }

    save(obj){

        fs.writeFile('./productos.txt', JSON.stringify(obj,null,2), error => {
            if(error){
                throw new Error(`Error en escritura: ${error}`)
            }
            console.log('productos.txt: escritura exitosa')
        })
    }

    getById(idProducto) {
        fs.readFile('./productos.txt', 'utf-8', (err, data) =>{
           if (err) {
               console.log("error al leer el archivo" + err)
           } else {
               console.log("lectura exitosa" + data);
               let jsonData = JSON.parse(data)
               let seleccionado = jsonData.find((item) => item.id === idProducto)
               console.log(seleccionado)
           }
       })
    }

    getAll() {
        fs.readFile('./productos.txt', 'utf-8', (err, data) =>{
            if (err) {
                console.log("error al leer el archivo" + err)
            } else {
                console.log("lectura exitosa" + data);
            }
        })
    }

    deleteAll() {
        const vaciar = []
        fs.writeFile('./productos.txt', JSON.stringify((vaciar),null,2), error => {
            if(error){
                throw new Error(`Error en escritura: ${error}`)
            }
            console.log('productos.txt: Datos del archivo borrados')
        })
    }

    deleteById(id) {
        fs.readFile('./productos.txt', 'utf-8', (err, data) =>{
            if (err) {
                console.log("error al leer el archivo" + err)
            } else {
                console.log("lectura exitosa" + data);
                let jsonData = JSON.parse(data)
                let filtrados = jsonData.find(item => item.id != id)
                fs.writeFile('./productos.txt', JSON.stringify(filtrados,null,2), error => {
                    if(error){
                        throw new Error(`Error en escritura: ${error}`)
                    }
                    console.log('productos.txt: escritura exitosa')
                })
            }
        })
    }
 }

const archivo = new Contenedor({})

archivo.save(productos)
archivo.getById(2)

archivo.getAll()