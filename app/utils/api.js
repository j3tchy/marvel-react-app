var axios = require('axios');

var apiKey = 'ad7455c7ae3a614c64fec3e8711168a4';

function getCharacters(){
  return axios.get('https://gateway.marvel.com/v1/public/characters?apikey=' + apiKey)
    .then(function(obj){
      return obj.data.data.results
    })
}

function getCharactersDetails(userId) {
  return axios.get('https://gateway.marvel.com/v1/public/characters/'+ userId + '?apikey=' + apiKey)
    .then(function(obj) {
      return obj.data.data.results[0];
    })
}

module.exports = {
  fetchCharacters: function(){
    return getCharacters();
  },
  fetchCharactersDetails: function(userId){
    return getCharactersDetails(userId);
  }
}
