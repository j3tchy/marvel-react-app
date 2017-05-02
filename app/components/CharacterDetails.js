var React = require('react');
var PropTypes = require('prop-types');

var Loading = require('./Loading');

var CharacterDetailsBanner = require('./CharacterDetailsBanner');
var CharacterDetailsComics = require('./CharacterDetailsComics');

var api = require('../utils/api');

class CharacterDetails extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      character: null
    }
  }

  componentDidMount(){
    var userId = this.props.match.params.number;
      api.fetchCharactersDetails(userId)
        .then(function(obj){
          this.setState(function() {
            return {
              character: obj
            }
          })
        }.bind(this))
  }


  render() {
    var characterDetails = this.state.character;
    return (
      <div>
        {!characterDetails
          ? <Loading />
          : <CharacterDetailsBanner character={this.state.character}/>
        }
        <CharacterDetailsComics character={this.state.character} />
      </div>
    )
  }
}

CharacterDetailsBanner.propTypes = {
  character: PropTypes.object.isRequired
}

module.exports = CharacterDetails;
