 fetch("pokemon.json")
 .then(function(response){
    return response.json();

})
.then(function (pokemon){
    let placeholder=document.querySelector("#data");
    let out="";
    
    for(let pokemons of pokemon){
        

        out+=`
        <tr>
           <td>${pokemons.id}</td>
           <td>${pokemons.name}</td>
           <td>${pokemons.height}</td>
           <td>${pokemons.weight}</td>
           <td>${pokemons.type}</td>
        
        
        `;
    }
    placeholder.innerHTML=out;

    


})



