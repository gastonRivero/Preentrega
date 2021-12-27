class Producto {
    constructor(codigo, nombre, imagen) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.imagen = imagen;
    }
}

//genero lista de productos
let listaProductos = [
    new Producto("1", "Camionero", "../Imagenes/Camionero.png"),
    new Producto("2", "Torpedo", "../Imagenes/Torpedo1.jpg"),
    new Producto("3", "Imperial", "../Imagenes/Imperial1.jpg"),
    new Producto("4", "Yerba Mate deBrasil", "../Imagenes/YerbaMateBrasil.jpg"),
];

//cargar articulos en el localStorage
localStorage.setItem("productos", JSON.stringify(listaProductos));
//iniciamo changuito en 0
localStorage.setItem("changuito", new Array());

// $(() => {
//     console.log("El DOM esta cargado")
// })

//Primera entrega del proyecto final.
let iteracion="si"

/*FUNCIONES*/
//ciclo
while(iteracion.toLocaleLowerCase() == "si"){
//Cobrar el importe total
const cobrar = (importe) => {
    let pago = 0;

    while (importe > 0 && pago != importe) {
        pago = Number(prompt(`Ingrese $${importe}`));
    }
    alert('Muchas gracias por su compra!');
    iteracion= prompt ("¿Querés realizar otra compra? (si/no)")
}

//Mostramos al usuario, el costo total de su producto
function entregarPedido(mensaje, precio) {
    alert(`Muchas gracias por elegirnos, 
    ${mensaje} el total es  $${precio}`);
    cobrar(precio);
}

//Multiplicación para calcular el costo de sus productos
const multiplicar = (a, b) => {
    return a * b;
}

//Dependiendo del pedido del cliente, calculamos el costo y creamos un mensaje diferente
function prepararPedido(com, cantidad) {
    function Mates(nombre, marca, tamaño, peso) {
        this.nombre = nombre;
        this.marca = marca;
        this.tamaño = tamaño;
        this.peso = peso;
        this.activo = true;
    
        this.mostrarDatos = function () {
            alert(`Los ${this.nombre} marca ${this.marca} tienen un tamaño de ${this.tamaño} y un peso de ${this.peso}.`);
        }
    }
    
    let mate1 = new Mates("Camionero", "Brave Mate", "15cm", "500g");
    let mate2 = new Mates("Torpedo", "Brave Mate", "10cm", "400g");
    let mate3 = new Mates("Imperial", "Brave Mate", "15cm", "100g");
    let mate4 = new Mates("Yerba Mate", "Ytacuá", "30cm", "1kg");

   
    let mensaje = '';
    let precio = 0;

    switch (com) {
        case 1:
            mensaje = 'Aquí está su Mate Camionero';
            precio = 1500;
            precio = multiplicar(precio, cantidad);
            console.log(mate1);
            mate1.mostrarDatos();
            break;
        case 2:
            mensaje = 'Aquí está su Mate Torpedo';
            precio = 1800;
            precio = multiplicar(precio, cantidad);
            console.log(mate2);
            mate2.mostrarDatos();
            break;
        case 3:
            mensaje = 'Aquí está su Mate Imperial';
            precio = 2000;
            precio = multiplicar(precio, cantidad);
            console.log(mate3);
            mate3.mostrarDatos();
            break;
        case 4:
            mensaje = 'Aquí está su Yerba Brasilera';
            precio = 500;
            precio = multiplicar(precio, cantidad);
            console.log(mate4);
            mate4.mostrarDatos();
            break;
        default:
            mensaje = 'Lo sentimos, no está en nuestro catálogo';
            break;
    }
    
    entregarPedido(mensaje, precio);
}

//Le pedimos al usuario que ingrese el producto y cantidad deseada
const tomarPedido = () => {
    const producto = Number(prompt(`Bienvenido/a a Brave Mate!
    Qué desea llevar?

    1- Mate Camionero, $1500
    2- Mate Torpedo, $1800
    3- Mate Imperial, $2000
    4- Yerba Brasilera, $500`));
    const cantidad = Number(prompt('ingrese la cantidad de unidades'));

    prepararPedido(producto, cantidad);
}

//Inicio de la ejecución
tomarPedido();}
