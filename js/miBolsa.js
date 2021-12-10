let jsonChanguito = localStorage.getItem("changuito").split(",");
let jsonProducto= localStorage.getItem("productos");
let productosDeserializados = JSON.parse(jsonProducto);
let contenedor = document.getElementById("contenedorProductosChango");

for (let index = 0; index < jsonChanguito.length; index++) {
    const producto = jsonChanguito[index];
    
    productosDeserializados.forEach(element => {
 
        if(producto == element.codigo)
        {
            let divProducto = document.createElement("div");
            divProducto.setAttribute("class","row productos__Fila p-3 col-6");
        
            let html ="";
            html +=`<div class='col-12 productos__Contenido text-center bg-secondary p-3'>`
            html +=     `<div><img src='${element.imagen}' width="150"/> </div>`;
            html +=     `<form>`;
            html +=         `<p>${element.nombre}</p>`;
            html +=         `</br>`;
            html +=         `<p>CODIGO: ${element.codigo}</p>`;
            html +=         `</br>`;
            // html +=         `<input class='btn btn-success btnAgregarChanguito' value='Agregar al changuito' data-codigo='${element.codigo}' data-pepe='${element.nombre}'/>`;
            html +=     `</form>`;
            html +=`</div>`
            
            divProducto.innerHTML = html;
        
            contenedor.appendChild(divProducto);
        }
        
    });
}

$(() => {
    console.log("El DOM esta cargado")
})