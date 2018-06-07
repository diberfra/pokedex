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
    var search = document.getElementById("quien").value;  
    var filtered = pokemones.filter(pokemones => (pokemones.name.toLowerCase().includes(search))|| (pokemones.id.includes(search)) || (pokemones.type.includes(search)) )
    console.log(filtered)

    for (var i=0; i<filtered.length; i++){
    content += "<div class='pokemonItem'>";
    content += "<img id='pok' src= 'img/photos/" + pokemones[i].photo + "'>";
    content += "<h2>" + pokemones[i].name + "</h2>";
    content += "<h1>" + pokemones[i].id + "</h1>";
    content += "<img class= 'rounded float-right 'id='tipos'src= 'img/types/" + pokemones[i].type + "'>";
    content += "</div>"
  }
  document.getElementById("result").innerHTML = content;
  }
  
  



// function mostrarpoke(quien){
//   var result = "";

//   if(quien==null){
//     for(var i=0; i<pokemones.length; i++){
//       result += pokemones[i].name;
      
//       // result += "<h1>" + pokemones[i].id + "</h1>";
//       console.log(result)
//     }
//     document.getElementById("result").innerHTML = result;
//   } else {
//     for(var i=0; i<pokemones.length; i++){
//       if(pokemones[i].name.toLowerCase().search(quien) >= 0){
//         result += pokemones[i].name;  
//       }
//     }
//     document.getElementById("result").innerHTML = result;
//   }
// }


//  function busca(pokemones){
//    var quien = document.getElementById("quien").value;

//    mostrarpoke();
//  }


 