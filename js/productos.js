$(() => {
    console.log("El DOM esta cargado")
})

document.addEventListener("DOMContentLoaded",()=>{
    // fetchData()
    //Si el carrito posee elementos los almacena 
    if(localStorage.getItem("carrito")){
        carrito=JSON.parse(localStorage.getItem("carrito"))
        MostrarCarrito()
    }
})


// const fetchData=async()=>{
//     try{
//         const res=await fetch("productos.json")
//         const data= await res.json()
//         pintarCards(data)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

const cards=document.getElementById("cards")
const templateProducto=document.getElementById("template-productos").content
const fragment=document.createDocumentFragment()
const templateFooter=document.getElementById("template-footer").content
const templateCarrito=document.getElementById("template-carrito").content
const items=document.getElementById("items")
const Esfooter=document.getElementById("Esfooter")
let carrito={}


const pintarCards= data =>{
   // console.log(data)
    data.forEach(element => {
        templateProducto.querySelector("h5").textContent=element.nombre
        templateProducto.querySelector("p").textContent=element.precio
        templateProducto.querySelector("img").setAttribute("src",element.thumbnailUrl)
        templateProducto.querySelector(".btn-dark").dataset.id=element.id
        const clone=templateProducto.cloneNode(true)
        fragment.appendChild(clone)
    });
       cards.appendChild(fragment)
}
 
const añadirCarrito = e =>{
    //console.log(e.target)
    //console.log(e.target.classList.contains("btn-dark"))
    if(e.target.classList.contains("btn-dark")){

     setCarrito(e.target.parentElement)

    }
    e.stopPropagation()
}


cards.addEventListener("click",e =>{
  añadirCarrito(e)
})

items.addEventListener("click",e=>{
    btnAccion(e)

})

const setCarrito= objeto=>{
    //console.log(objeto)
    const producto={
        id:objeto.querySelector(".btn-dark").dataset.id,
        nombre:objeto.querySelector("h5").textContent,
        precio:objeto.querySelector("p").textContent,
        cantidad:1
        
    }

    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad=carrito[producto.id].cantidad+1
    }
    carrito[producto.id]={...producto}
    
    MostrarCarrito()
    
}
const MostrarCarrito= () =>{
    items.innerHTML=""
    Object.values(carrito).forEach(producto=> {

        templateCarrito.querySelector("th").textContent=producto.id
        templateCarrito.querySelectorAll("td")[0].textContent=producto.nombre
        templateCarrito.querySelectorAll("td")[1].textContent=producto.cantidad
        templateCarrito.querySelector(".btn-info").dataset.id=producto.id
        templateCarrito.querySelector(".btn-danger").dataset.id=producto.id
        templateCarrito.querySelector("span").textContent=producto.cantidad*producto.precio

        const clone=templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    MostrarFooter()

    localStorage.setItem("carrito",JSON.stringify(carrito))
}

const MostrarFooter =()=> {
 Esfooter.innerHTML=''

 if(Object.keys(carrito).length === 0){
  Esfooter.innerHTML= `<th colspan="5">Carrito vacío!</th>`
  return
 }
const esCantidad=Object.values(carrito).reduce((acc,{cantidad})=>acc+cantidad,0)
const esTotal=Object.values(carrito).reduce((acc,{cantidad,precio})=>acc+cantidad*precio,0)

templateFooter.querySelectorAll("td")[0].textContent=esCantidad
templateFooter.querySelector("span").textContent=esTotal

const clone=templateFooter.cloneNode(true)
fragment.appendChild(clone)
Esfooter.appendChild(fragment)
console.log(esCantidad)

//Botón para vaciar productos
const btnVaciar=document.getElementById("vaciar-carrito")
btnVaciar.addEventListener("click",()=>{
    carrito={}
    MostrarCarrito()
}

)
}


const btnAccion=e =>{
    
    //Aumenta cantidad de producto
    if(e.target.classList.contains("btn-info")){
        console.log(carrito[e.target.dataset.id])
        const subeProducto =carrito[e.target.dataset.id]
        subeProducto.cantidad=carrito[e.target.dataset.id].cantidad+1
        carrito[e.target.dataset.id]={...subeProducto}

        MostrarCarrito()
    }

    //Disminuye Cantidad

    if(e.target.classList.contains("btn-danger")){
        const bajaProducto =carrito[e.target.dataset.id]
        bajaProducto.cantidad--

        if(bajaProducto.cantidad===0){
            delete carrito[e.target.dataset.id]
        }

       MostrarCarrito()
    }

    e.stopPropagation()
}

/* Agrego evento con jQuery con animación */
$(document).ready(function(){
    $('#caja').hide();
    $('#verMas').click(function(){
        $('#caja').fadeToggle(2000, function(){
            $('#verMas').text('Ver Menos')
        });
    })
});
/*Agrego información util sobre el covid mediante ajax */
const miUrl = "https://covid-api.mmediagroup.fr/v1/cases?country=Argentina"

$.get(miUrl,function(resultado,estado){

    if(estado==="success"){
        $("#covid").append(
            `<div>Casos confirmados:  ${resultado.All.confirmed}</div>
            <div>Población total :  ${resultado.All.population}</div>
            <div>Muertes :  ${resultado.All.deaths}</div>`
            
        )
    }
})