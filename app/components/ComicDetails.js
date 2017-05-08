var React = require('react');
var PropTypes = require('prop-types');

var Loading = require('./Loading');
var DetailsBanner = require('./DetailsBanner');

var api = require('../utils/api');

class ComicDetails extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      comic: null
    }
  }

  componentDidMount(){
    var comicId = this.props.match.params.id;

    return api.fetchComicDetails(comicId)
      .then(function(data) {
        this.setState(function() {
          return {
            comic: data
          }
        })
      }.bind(this))
  }

  render() {
    return (
      <div>
        {!this.state.comic
          ? <Loading />
          : <DetailsBanner data={this.state.comic[0]} />
        }
      </div>
    )
  }
}

DetailsBanner.propTypes = {
  data: PropTypes.object.isRequired
}


module.exports = ComicDetails;
