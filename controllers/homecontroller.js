module.exports = (app) => 
{
    app.get('/', (req, res) =>
    {
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