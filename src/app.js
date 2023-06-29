const express = require('express');

// Rotas
const routerManager = require('./routes/exporter');

// Fonte da verdade
const { routes } = require('./SSOT/exporter');

// App e configuração
const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get(routes.ROOT, routerManager.root);

// Roteamento
app.use(routes.LOGIN, routerManager.login);

app.use(routes.USER, routerManager.user);

app.use(routes.CATEGORY, routerManager.category);

app.use(routes.POST, routerManager.post);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
