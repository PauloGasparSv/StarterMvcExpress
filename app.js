const express = require('express');
const routes = require('./utils/routes');
const app = express();

//Settings
app.set('view engine', 'ejs');

//MiddleWare
app.use(express.json());

//Routing
routes(app);

//Server
app.listen(80, () => 
{
    console.log('Server started');
});