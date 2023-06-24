const express = require('express');


// Rotas
const routerManager = require('./routes/exporter')

// Fonte da verdade
const { routes } = require('./SSOT/exporter')
// ...

const app = express();

// não remova ou mova esse endpoint
app.get(routes.ROOT, routerManager.ROOT);

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
