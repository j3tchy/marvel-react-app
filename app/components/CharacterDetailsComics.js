var React = require('react');

var CharacterComicsList = require('./CharacterComicsList');
var CharacterSeriesList = require('./CharacterSeriesList');

var Loading = require('./Loading');

function CharacterDetailsComics(props){
  return (
    <div className="character-comics-details"> 
      <div className="character-comics">
        <h3>Comics List</h3>
        {!props.comics
          ? <Loading />
          : <CharacterComicsList comics={props.comics} />}
      </div>
    </div>
  )
}

module.exports = CharacterDetailsComics;
