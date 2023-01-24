function changeToReturnButton(){
    loadMoreButton.id = 'returnButton'
    loadMoreButton.innerHTML = `<label>Return</label>`
}
function returnHome(closingFilter = false){
    document.getElementById("pokemonSearch").value=""
    search = false

    loadMoreButton.id = 'loadMoreButton'
    loadMoreButton.innerHTML = `<label>Load More</label>`

    listPokemon.innerHTML = `<ol class="pokemons" id="pokemonList"></ol>`
    reloadPokemonItens()
    
    cleanTypeArr()
    if(closingFilter){
        desactiveFilter()
        closeFilter()
    } 
}
loadMoreButton.addEventListener('click', () => {
    if(loadMoreButton.id === 'returnButton'){
        returnHome(true)
    }
})