var React = require('react');
var ReactDOM = require('react-dom');

require('./sass/style.scss');

var App = require('./components/App');

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
