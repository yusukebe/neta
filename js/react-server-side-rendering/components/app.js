import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <header>
          <h1><Link to="/">Hello World!</Link></h1>
          <Link to="/about">About</Link>
          <hr />
        </header>
        {this.props.children}
      </div>
    )
  }
};
