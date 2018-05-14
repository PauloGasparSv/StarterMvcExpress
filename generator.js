const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2);

if(args.length != 1)
{
    console.log('error');
    return;
}

const service = `const Connection = require('../utils/connection');
const DefaultResponse = require('../utils/default_response');

module.exports = 
{

}`;

const controller = `const DefaultResponse = require('../utils/default_response');
const MyService = require('../services/` + args[0] + '_service.js' + `');

module.exports = (App) => 
{
    App.get('/` + args[0] + `/get', (req, res) =>
    {
        res.send('Hello');
    });

    App.post('/` + args[0] + `/post', (req, res) => 
    {
        res.json({ status: true, message: 'This is the post response' });
    });
}';`;

fs.writeFile(path.join('services', args[0] + '_service.js') ,service, function(error) 
{
    if(error)
    {
        console.log('Could not create any file! ' + error);
        return;
    }

    fs.writeFile(path.join('controllers', args[0] + '_controller.js'), controller, function(err)
    {
        if(err)
        {
            console.log('Could not create controller! ' + err);
            return;
        }

        fs.readFile(path.join('utils','routes.js'), 'utf8',  function(e, data)
        {
            if(e || !data)
            {
                console.log('Could not update the routes file!');
                return;
            }
            
            data = 'const '.concat(args[0].charAt(0).toUpperCase() + args[0].slice(1)).concat( 
                ` = require('../controllers/` + args[0] + `_controller');\n`).concat(data);
            
            data = data.substr(0, data.length - 1).concat('\t'.concat(args[0].charAt(0).toUpperCase() + args[0].slice(1)).concat('(App);\n}'));
            
            fs.writeFile(path.join('utils','routes.js'), data, function(writeErr)
            {
                if(writeErr)
                {
                    console.log('Could not update the routes file!');
                    return;
                }
                console.log('success');
            });
        })
    });
});