var React = require('react');

var CharacterComicsList = require('./CharacterComicsList');
var CharacterSeriesList = require('./CharacterSeriesList');

var Loading = require('./Loading');

function CharacterDetailsComics(props){
  return (
    <div className="character-comics-details">
      <div className="character-comics">
        Comics List
        {!props.character
          ? <Loading />
          : <CharacterComicsList comics={props.character.comics} />}
      </div>
      <div className="character-series">
        Series List
        {!props.character
          ? <Loading />
          : <CharacterSeriesList series={props.character.series} />}
        </div>
    </div>
  )
}

module.exports = CharacterDetailsComics;
