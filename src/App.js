import React from "react";
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import Results from './Results'
import Details from './Details'


class App extends React.Component {
  render() {
    return (
      <div>
         <h1>
          <Link to="/">
            Adopt Me!
          </Link>
        </h1>
        <Router>
          <Results path="/" /> 
          <Details path="/details/:id" />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));