var React = require('react');
var PropTypes = require('prop-types');

var Loading = require('./Loading');

var DetailsBanner = require('./DetailsBanner');
var CharacterDetailsComics = require('./CharacterDetailsComics');

var api = require('../utils/api');

class CharacterDetails extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      character: null,
      comics: null
    }
  }

  componentDidMount(){
    var userId = this.props.match.params.number;
    api.fetchCharacterDetails(userId)
      .then(function(obj) {
        this.setState(function() {
          return {
            character: obj.profile,
            comics: obj.comics
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
          : <DetailsBanner data={this.state.character}/>
        }
        <CharacterDetailsComics comics={this.state.comics} />
      </div>
    )
  }
}

// DetailsBanner.propTypes = {
//   data: PropTypes.object.isRequired
// }

module.exports = CharacterDetails;
