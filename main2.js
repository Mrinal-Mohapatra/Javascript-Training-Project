fetch("pokemon.json")
 .then(function(response){
    return response.json();

})
.then(function(data){
    for(var i=0;i<5;i++){
    
      document.getElementById("data").innerHTML+=
         
       data[i].id+"       "+data[i].name+"            "+data[i].height+"        "+data[i].weight+"            "+data[i].type;
    
    }
})
    .catch(function(err){
        console.log(err)
    });

    


