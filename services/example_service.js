const Connection = require('../utils/connection');
const DefaultResponse = require('../utils/default_response');

module.exports = 
{
    showDatabases: () => 
    {
        return new Promise((resolve, reject) =>
        {
            try
            {
                Connection.query('SHOW DATABASES', [])
                .then((response) => 
                {
                    resolve(DefaultResponse(true, 'Success', response));
                })
                .catch((error) =>
                {
                    reject(DefaultResponse(false, 'Could not show databases'));
                });
            }
            catch(e)
            {
                reject(DefaultResponse(false, 'Could not show databases'));
            }
        });
    }
}