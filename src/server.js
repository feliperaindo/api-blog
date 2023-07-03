// Fonte da verdade
const { constants } = require('./SSOT/exporter');

const app = require('./app');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || constants.API_PORT;

app.listen(port, () => console.log(constants.LISTENING_PORT, port));
