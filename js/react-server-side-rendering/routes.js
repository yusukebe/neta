import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/app';
import Top from './components/top';
import About from './components/about';

export default () => {
  return (
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <IndexRoute component={Top} />
    </Route>
  )
};
