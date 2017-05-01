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
      <p>Name: {character.name}</p>
      {!character.description
      ? <p>No data available</p>
      : <p>About: {character.description}</p>}
    </div>
  )
}

module.exports = CharacterDetailsBanner;
