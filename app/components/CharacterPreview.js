var React = require('react');
var PropTypes = require('prop-types');

function CharacterPreview(props){
  return (
    <div>
      <div className="column">
        <div className="character-avatar-wrapper">
          <img
            className="character-avatar img-responsive"
             src={props.avatar}
             alt={'Avatar: ' + props.name}
          />
        </div>
        <h2 className="character-name">{props.name}</h2>
      </div>
    </div>
  )
}

module.exports = CharacterPreview;
