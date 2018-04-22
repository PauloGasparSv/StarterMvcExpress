const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./utils/routes');
const app = express();

//MiddleWare
app.use(bodyParser.json());

//Routing
routes(app);

//Server
app.listen(80, () => 
{
    console.log('Server started');
});