var React = require('react');

function CharacterSeriesList(props){
  return (
    <div>
      <ul className="character-comics-list">
        {props.series.items.map(function(issue, index){
          console.log(issue);
          // return (
          //   <li key={index}>{issue}</li>
          // )
        })}
      </ul>
    </div>
  )
}

module.exports = CharacterSeriesList;
