module.exports = (app) => 
{
    app.get('/', (req, res) =>
    {
        res.send('<b>Hello</b>');
    });

    app.get('/getTime', (req,res) => 
    {
        res.json({
            status: true,
            message: 'Hello'
        });
    });
}