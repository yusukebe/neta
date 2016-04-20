import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/app';

const app = express();
app.get('/', (req, res) => {
  res.send(ReactDOMServer.renderToString(<App/>));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Accepting connections at http://0:${port}/`);
});
