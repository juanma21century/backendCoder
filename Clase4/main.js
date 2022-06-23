 const fs = require('fs')
 
 class Contenedor{
    constructor(archivo){
        this.archivo = archivo
    }

    save(obj){
        const objs = this.getAll()
        let newId
        if (objs.length == 0) {
            newId = 1
        } else {
            newId = objs[objs.length - 1].id + 1
        }

        const newObj = { ...obj, id: newId}
        objs.push(newObj)

        fs.writeFile(this.ruta, JSON.stringify(objs), null, 2)
    }

    getById(idProducto) {
        fs.readFile(this.archivo, 'utf-8', (err, data) =>{
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

    async getAll() {
        try {
            const arrayProductos = await fs.readFile(this.archivo, `utf-8`)
            return JSON.parse(arrayProductos)
        }
        catch (err) {
            console.log(err)
            return []
        }
    }

    deleteAll() {
        fs.writeFile(this.ruta, JSON.stringify([]), null, 2)
    }
 }

const ejecucion = async()=> {
    try{
        const lectura = await fs.promises.readFile('./Entregables/clase4/productos.txt', 'utf-8')
        const obj = JSON.parse(lectura)
        const archivo = new Contenedor(obj)
        
        console.log(archivo)
    }
    catch(err){
        console.log("Error en la lectura " + err)
    }
}

ejecucion()