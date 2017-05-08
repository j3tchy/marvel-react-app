var React = require('react');

function DetailsBanner(props){

  var data = props.data;

  // if(!Array.isArray(props.data)) {
  //   data = props.data
  // } else {
  //   data = props.data[0]
  // }

  var avatar = data.thumbnail.path + '.' + data.thumbnail.extension;

  return (
    <div className='details-banner'>
      <div className='details-image-wrapper'>
        <img
          src={avatar}
          className="img-responsive"
          />
      </div>
      <div className="details-copy">
        <h1>{data.name}</h1>
        {!data.description
        ? <p>No data available</p>
        : <p dangerouslySetInnerHTML={{ __html: data.description}}></p>}
      </div>
    </div>
  )
}

module.exports = DetailsBanner;
