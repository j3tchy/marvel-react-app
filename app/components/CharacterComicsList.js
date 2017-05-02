var React = require('react');

function CharacterComicsList(props) {
  return (
    <div>
      <ul className="character-comics-list">
        {props.comics.items.map(function(comic, index){
          return (
            <li className="character-comics-list-item" key={index}>{comic.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

module.exports = CharacterComicsList;
