function pokemon(){
  
  var content = "";
  
  for(var i = 0; i < pokemones.length; i++){
    content += "<div class='pokemonItem'>";
    content += "<img id='pok' src= 'img/photos/" + pokemones[i].photo + "'>";
    content += "<h2>" + pokemones[i].name + "</h2>";
    content += "<h1>" + pokemones[i].id + "</h1>";
    content += "<img class= 'rounded float-right 'id='tipos'src= 'img/types/" + pokemones[i].type + "'>";
    content += "</div>"
  }
  document.getElementById("result").innerHTML = content;
  }


  function buscarpokemones() {
    var content = "";
    var search = document.getElementById("search").value;  
    var filtered = pokemones.filter(pokemon => (pokemon.name.toLowerCase().includes(search))|| (pokemon.id.includes(search)) || (pokemon.type.includes(search)) )
    console.log(filtered)

    for (var i=0; i<filtered.length; i++){
    content += "<div class='pokemonItem'>";
    content += "<img id='pok' src= 'img/photos/" + filtered[i].photo + "'>";
    content += "<h2>" + filtered[i].name + "</h2>";
    content += "<h1>" + filtered[i].id + "</h1>";
    content += "<img class= 'rounded float-right 'id='tipos'src= 'img/types/" + filtered[i].type + "'>";
    content += "</div>"
  }
  document.getElementById("result").innerHTML = content;
  }
  
  



  
  


 