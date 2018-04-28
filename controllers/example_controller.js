//Simple controller with an http page request
//and two simple GET and POST methods
const DefaultResponse = require('../utils/default_response');
const ExampleService = require('../services/example_service');

module.exports = (App) => 
{
    //  WEB PAGES
    App.get('/', (req, res) =>
    {
        ExampleService.showDatabases()
        .then( (response) => 
        {
            console.log('Response: ' + JSON.stringify(response.data));            
        })
        .catch( (error) => 
        {
            console.log('Error: ' + error.message);
        });

        res.render('home');
    });

    //  API
    App.get('/backend/simpleGet', (req, res) => 
    {
        res.json({
            status: true,
            message: 'This is the get response'
        });
    });

    App.post('/backend/simplePost', (req, res) => 
    {
        res.json({
            status: true,
            message: 'This is the post response'
        });
    });
}