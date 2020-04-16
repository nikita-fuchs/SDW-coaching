const pokemon = require('pokemon');

var allePokemon = pokemon.all();

var longest = 0;
var longestName;
var positionInDerListe;

allePokemon.forEach(function(einPokemon, zaehler){

    if(einPokemon.length > longest){
        longest = einPokemon.length;
        longestName = einPokemon;
        positionInDerListe = zaehler;

    }
})

console.log("Längste länge: ", longest)
console.log("Name: ", longestName)
console.log("Position in der liste: ", positionInDerListe)