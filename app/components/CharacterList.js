var React = require('react');
var PropTypes = require('prop-types');

var api = require('../utils/api');

var CharacterPreview = require('./CharacterPreview');
var Loading = require('./Loading');

var Link = require('react-router-dom').Link;

function CharacterGrid(props){
  return (
    <div>
      <ul className="character-list">
        {props.characters.map(function(character, index){

          var thumbnail = character.thumbnail.path + '.' + character.thumbnail.extension;

          return (
            <li
              key={index}
              onClick={props.onSelect.bind(null, character)}
              className='character'>
              <Link to={'/characters/' + character.id}>

                <CharacterPreview
                  name={character.name}
                  avatar={thumbnail}
                />

              </Link>

            </li>
          )
        })}
      </ul>
    </div>
  )
}

CharacterPreview.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

class CharacterList extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      characters: null,
      selectedCharacter: null
    }

    this.getCharacterDetails = this.getCharacterDetails.bind(this);
  }

  componentDidMount(){
    api.fetchCharacters()
      .then(function(char){
        this.setState(function() {
          return {
            characters: char
          }
        })
      }.bind(this))
  }

  getCharacterDetails(character) {
    this.setState(function(){
      return {
        selectedCharacter: character
      }
    })
  }

  render(){
    return (
      <div>
        {!this.state.characters
          ? <Loading />
          : <CharacterGrid
            onSelect={this.getCharacterDetails}
            characters={this.state.characters} />
        }
      </div>
    )
  }
}

CharacterGrid.propTypes = {
  characters: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

module.exports = CharacterList;
