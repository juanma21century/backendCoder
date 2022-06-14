class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido

        this.libros = []
        this.mascotas = []
    }
    
    getFullName(){
        console.log(`Usuario :  ${this.nombre} ${this.apellido}`)
    }

    addMascota(nombre){
        this.mascotas.push(nombre)
    }

    countMascotas(){
        let total = this.mascotas.length
        console.log(`Cantidad de mascotas: ${total}`)
    }

    addBook(nombreLibro, nombreAutor){
        let libro = {nombre : nombreLibro, autor: nombreAutor}
        this.libros.push(libro)
    }

    getBookNames(){
        this.libros.forEach(libro=>
            { console.log(`Nombre libro: ${libro.nombre}`) }    
        )
    }
}

const libro1 = {nombre: "Harry Potter", autor : "Lexi"}
const libro2 = {nombre: "El monje", autor : "Ruther"}

const mascota1 = "Perro"
const mascota2 = "Gato"
const mascota3 = "Pingüino"

const usuario1 = new Usuario("Julian", "Assange")

usuario1.getFullName()
usuario1.addMascota(mascota1)
usuario1.addMascota(mascota2)
usuario1.countMascotas()
usuario1.addBook(libro1.nombre, libro1.autor)
usuario1.addBook(libro2.nombre, libro2.autor)
usuario1.getBookNames()

const usuario2 = new Usuario("John", "Wick")

usuario2.getFullName()
usuario2.addMascota(mascota3)
usuario2.countMascotas()
usuario2.addBook(libro1.nombre,libro1.autor)
usuario2.getBookNames()