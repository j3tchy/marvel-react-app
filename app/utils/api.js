var axios = require('axios');

var apiKey = 'ad7455c7ae3a614c64fec3e8711168a4';

function getCharacters(){
  return axios.get('https://gateway.marvel.com/v1/public/characters?apikey=' + apiKey)
    .then(function(obj){
      return obj.data.data.results
    })
}

function getCharacterProfile(userId) {
  return axios.get('https://gateway.marvel.com/v1/public/characters/' + userId + '?apikey=' + apiKey)
    .then(function(obj) {
      return obj.data.data.results[0];
    })
}

function getCharacterComics(userId) {
  return axios.get('https://gateway.marvel.com/v1/public/characters/' + userId + '/comics?apikey=' + apiKey)
    .then(function(obj) {
      return obj.data.data.results
    })
}

function getComicDetails(comicId) {
  return axios.get('https://gateway.marvel.com/v1/public/comics/' + comicId + '?apikey=' + apiKey)
    .then(function(obj) {
      return obj.data.data.results
    })
}

function getCharacterDetails(userId) {
  return axios.all([
    getCharacterProfile(userId),
    getCharacterComics(userId)
  ]).then(function(data) {
    var profile = data[0];
    var comics = data[1];

    return {
      profile: profile,
      comics: comics
    }
  })
}

module.exports = {
  fetchCharacters: function(){
    return getCharacters();
  },
  fetchCharacterDetails: function(userId) {
    return getCharacterDetails(userId);
  },
  fetchComicDetails: function(comicId) {
    return getComicDetails(comicId);
  }
}
