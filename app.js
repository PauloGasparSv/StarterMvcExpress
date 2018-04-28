//Express setup
const Express = require('express');
const App = Express();

//My lib
const Routes = require('./utils/routes');

//Settings
App.set('view engine', 'ejs');
App.use(Express.static('assets'));

//MiddleWare
App.use(Express.json());

//Routing
Routes(App);

//Server
App.listen(8000, () => 
{
    console.log('Server started');
});
