//Simple controller with http page request and simple JSON GET and POST returning methods
const connection = require('../utils/connection');

module.exports = (app) => 
{
    app.get('/', (req, res) =>
    {
        connection.query('SHOW DATABASES')
        .then((response) => 
        {
            console.log('Response: ' + JSON.stringify(response));
        })
        .catch((error) =>
        {
            console.log('Error: ' + error);
        });
        res.render('home');
    });

    app.get('/backend/simpleGet', (req, res) => 
    {
        res.json({
            status: true,
            message: 'Hello'
        });
    });

    app.post('/backend/simplePost', (req, res) => 
    {
        console.log('Body: ' + JSON.stringify(req.body));

        res.json({
            status: true,
            message: 'Wat'
        });
    });
}