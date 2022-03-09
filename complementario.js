//Desafio complementario - Incorporar Array// //Quiroga, Lucas | Comision: 25420//

//Resumen: Aplique funciones para agilizar la incorporación de productos con sus propiedades y métodos al array y tambien interiorice para aplicarles el IVA en caso de ser necesario a cada precio de producto.//
//Pd: Cabe aclarar y resaltar que soy conciente que en la funcion del Iva (infoInsumos) hay fallas y hay un ejemplo a lo ultimo de todo en donde no pude encontrarle la vuelta para poder NO sumar el mismo a los productos en caso contrario y me gustaria obtener un feedback para seguir mejorando, agradezco el tiempo tomado, saludos cordiales//


//arrays//
const insumos = [];
const servicios = []

//objetos//
class Insumos{
        constructor(id,nombre, precio){
            this.id = id;
            this.producto = nombre;
            this.precio = precio;
            this.info = `El insumo es: ${this.producto}, y el valor es: ${precio}`
    }
    verInfo(){
        console.log(this.info)
    }
    cambiarPrecio(){
        this.precio = this.precio * 1.21;
    }
}

class Servicios {
    constructor(id, nombre,valor, detalle, duracion){
        this.id = id;
        this.servicio = nombre;
        this.precio = valor;
        this.detalle = detalle;
        this.duracion = duracion;
    }
}

//funciones que agregan objetos al array particular//
function agregueInsumos (id, nombre, precio){
    let objetoAgregar = new Insumos(id, nombre, precio);
    insumos.push(objetoAgregar);
    return `El objeto ha sido introducido al array satisfactoriamente`;
}

function agregueServicios (id, nombre, valor, detalle, duracion){
    let objetoAgregar = new Servicios(id, nombre, valor, detalle, duracion);
    servicios.push(objetoAgregar);
    return `El objeto ha sido introducido al array satisfactoriamente`;
}

//funcion que modifica los objetos en el array para aumentarles el iva//
function infoInsumos(){
    let preguntaCeo = prompt("Desea aplicarle el iva a sus productos?");
    if(preguntaCeo === "Si" || "si"){
        for (const prodInsumo of insumos)
            prodInsumo.cambiarPrecio();
            return console.table(insumos)
}
}

//agregar objetos de manera eficaz al array
agregueInsumos(1, "velas", 70);
agregueInsumos(2, "collares", 100);
agregueInsumos(3, "sahumerios", 170);
agregueServicios(1, "lectura de tarot", 1600);

//ejemplo para buscar un objeto en el array//
console.log(insumos[0]);
console.log(servicios[0]);

//para ver mejor los resultados podriamos usar console.table(insumos)

//tambien me gustaria obtener una respuesta profesional de porque el siguiente codigo efectuado no me da el resultado buscado, que sería aplicarle los cambios en caso de que si y en caso de que no, no aplicarlos//
//Tambien pensé en switch, pero por ser opciones mas simples opte por usar if else.//

function infoInsumos(){
    let preguntaCeo = prompt("Desea aplicarle el iva a sus productos?");
    if(preguntaCeo === "No" || "no"){
        console.log ("No pudimos aplicarles el iva a los productos");
    } else if (preguntaCeo === "Si" || "si"){
        for (const prodInsumo of insumos)
            prodInsumo.cambiarPrecio();
            return console.table(insumos)
}
}