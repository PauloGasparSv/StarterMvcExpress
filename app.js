//Express setup
const express = require('express');
const app = express();

//My lib
const routes = require('./utils/routes');

//Settings
app.set('view engine', 'ejs');
app.use(express.static('assets'));

//MiddleWare
app.use(express.json());

//Routing
routes(app);

//Server
app.listen(8000, () => 
{
    console.log('Server started');
});
