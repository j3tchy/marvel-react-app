var React = require('react');

class Search extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      query: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <div className="search">
        <form className="search-form">
          <input
            placeholder="Search for Marvel Character"
            className="search-input"
            id="search"
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button
            className="search-btn"
            type="submit">
            Search
          </button>
        </form>
      </div>
    )
  }
}

module.exports = Search;
