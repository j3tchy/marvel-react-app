var React = require('react');

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

var Switch = ReactRouter.Switch;

var Home = require('./Home');

var CharacterList = require('./CharacterList');
var CharacterDetails = require('./CharacterDetails');

var ComicDetails = require('./ComicDetails');

var About = require('./About');
var Footer = require('./Footer');
var Nav = require('./Nav');

var Characters = function(){
  return (
    <div>
      <Switch>
        <Route exact path='/characters' component={CharacterList} />
        <Route path='/characters/:number' component={CharacterDetails} />
      </Switch>
    </div>

  )
}

var Comics = function() {
  return (
    <Switch>
      <Route exact path='/comics/:id' component={ComicDetails} />
    </Switch>
  )
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/characters' component={Characters} />
            <Route path='/comics/:id' component={Comics} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>

      </Router>
    )
  }
}

module.exports = App;
