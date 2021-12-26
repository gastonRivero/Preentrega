const APIURL = "https://pokeapi.co/api/v2/pokemon/";
const pokeId = $('#pokemonId')

const renderData = (pokemon) => {
    const pokedex = $('#pokedex')
    pokedex.prepend(`
                    <div id="display">
                        <div class=" card " style="width: 18rem;">
                        <img src="${pokemon.sprites.front_default}" class="card-img-top">
                            <div class="card-body">
                            <h5 class="card-title">"${pokemon.species.name}"</h5>
                            <p class="card-text">"${pokemon.species.name} mide ${pokemon.height} metros en relación a otro Pokemon."</p>
                            </div>
                        </div>
                    </div>`
  )};

const getData = (valorPokemon) => {
    $.ajax({
        method: "GET",
        url: APIURL + `${valorPokemon}`,
        success: (respuesta) => {
            console.log(respuesta);
         renderData(respuesta);    
        },
        error: () => {
            alert("Recordá buscar tus Pokemon con números del 1 al 898")
        }
    })
}


$('#renderPokemon').click(()=>{
    let valorPokemon = Number(pokeId[0].value);
    console.log(valorPokemon);
    if(Number.isInteger(valorPokemon) && valorPokemon > 0 && valorPokemon < 899){
        getData(valorPokemon);
    }
    else{
        alert("Recordá buscar tus Pokemon con números del 1 al 898");
    }
});