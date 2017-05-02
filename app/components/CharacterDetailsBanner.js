var React = require('react');

function CharacterDetailsBanner(props){

  var character = props.character;
  var avatar = character.thumbnail.path + '.' + character.thumbnail.extension;

  return (
    <div className='character-details-banner'>
      <div className='character-details-image-wrapper'>
        <img
          src={avatar}
          className="img-responsive"
          />
      </div>
      <div className="character-details-copy">
        <h1>{character.name}</h1>
        {!character.description
        ? <p>No data available</p>
        : <p>About: {character.description}</p>}
      </div>

    </div>
  )
}

module.exports = CharacterDetailsBanner;
