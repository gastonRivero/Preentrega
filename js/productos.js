
//me traigo los productos del localstorage
let jsonProducto= localStorage.getItem("productos");
let productosDeserializados = JSON.parse(jsonProducto);

//me traigo el elemento del dom al que se agregaran los productos
let contenedor = document.getElementById("contenedorProductos");

//agrego elemento dom dinamico con los producto en base a localstorage
productosDeserializados.forEach(element => {
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
    html +=         `<input class='btn btn-success btnAgregarChanguito' value='Agregar al changuito' data-codigo='${element.codigo}' data-nombre='${element.nombre}'/>`;
    html +=     `</form>`;
    html +=`</div>`
    
    divProducto.innerHTML = html;

    contenedor.appendChild(divProducto);
});

let btns = document.getElementsByClassName("btnAgregarChanguito");

for (let index = 0; index < btns.length; index++) {
    //le agrego evento a los btn 
    btns[index].addEventListener('click',(event)=>
    {
        //agregamos codigo producto a la lista existente y lo volvemos a guardar
        let changuito = new Array();
        changuito.push(localStorage.getItem("changuito"));
        changuito.push(event.target.dataset.codigo);
        localStorage.setItem("changuito",changuito);
    });  
}