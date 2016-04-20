import express from 'express';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import createRoutes from './routes';

const app = express();
const routes = createRoutes();

app.use((req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if(error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.status(200).send(renderToString(<RouterContext {...renderProps}/>))
    } else {
      res.status(404).send('Not Found');
    }
  })
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Accepting connections at http://0:${port}/`);
});
