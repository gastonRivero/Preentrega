class Producto 
{
    constructor(codigo,nombre, imagen)
    {
        this.codigo = codigo;
        this.nombre = nombre;
        this.imagen = imagen;
    }
}

//genero lista de productos
let listaProductos = [
    new Producto("1","Camionero","../Imagenes/Camionero.png"),
    new Producto("2","Torpedo","../Imagenes/Torpedo1.jpg"),
    new Producto("3","Imperial","../Imagenes/Imperial1.jpg"),
    new Producto("4","Yerba Mate deBrasil","../Imagenes/YerbaMateBrasil.jpg"),
];

//cargar articulos en el localStorage
localStorage.setItem("productos",JSON.stringify(listaProductos));
//iniciamo changuito en 0
localStorage.setItem("changuito",new Array());

$(() => {
    console.log("El DOM esta cargado")
})


