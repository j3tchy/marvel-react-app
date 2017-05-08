var React = require('react');
var Link = require('react-router-dom').Link;

function CharacterComicsList(props) {
  return (
    <div>
      {!props.comics.length
      ? <p>No data available</p>
      : <ul className="character-comics-list">
        {props.comics.map(function(comic, index){
          return (
            <Link key={comic.id} to={"/comics/" + comic.id}>
              <li className="character-comics-list-item" key={comic.id}>{comic.title}</li>
            </Link>
          )
        })}
      </ul>}
    </div>
  )
}

module.exports = CharacterComicsList;
