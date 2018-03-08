require('ignore-styles');

const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const serialize = require('serialize-javascript');
const Loadable = require('react-loadable');
const app = express();
const server = http.createServer(app);

require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app', 'react'],
  plugins: [
    "react-loadable/babel",
    "dynamic-import-node",
    "syntax-dynamic-import",
    "transform-decorators-legacy"
    // ["import-inspector", {
    //   "serverSideRequirePath": true
    // }]
  ]
});

const App = require('../src/server/render');

const staticFiles = [
  '/static/*',
  '/asset-manifest.json',
  '/manifest.json',
  '/service-worker.js',
  '/favicon.ico',
  '/assets/*',
];

staticFiles.forEach(file => {
  app.get(file, (req, res) => {
    const filePath = path.join(__dirname, '../build', req.url);
    res.sendFile(filePath);
  });
});

app.get('*', async (req, res) => {
  const template = path.join(__dirname, '../build/index.html');
  const htmlData = fs.readFileSync(template).toString();
  const rendered = App.default(req.url);
  const { html, helmet, state } = await rendered;
  const renderedHtml = htmlData
    .replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div><script>window.__PRELOADED_STATE__=${serialize(state)}</script>`
    )
    .replace(
      '<meta helmet>',
      `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}`
    );
  res.status(200).send(renderedHtml);
});

Loadable.preloadAll().then(() => {
  server.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
  });
});