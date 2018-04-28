//Simplest routing i could figure
const Example = require('../controllers/example_controller');

module.exports = (App) => 
{
    //Add the controllers here
    Example(App);
}