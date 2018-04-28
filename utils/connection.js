const Mysql = require('Mysql');
const DefaultResponse = require('./default_response');
const Pool = Mysql.createPool({
    connectionLimit : 10,
    host: 'localhost',
    user: 'user',
    password: 'password'
});

module.exports = 
{
    query: (query, args) => 
    {
        return new Promise((resolve, reject) => 
        {
            if(!query)
            {
                reject(DefaultResponse());
                return;
            }
            Pool.getConnection((conError, connection) => 
            {
                if(conError)
                {
                    console.log(conError);
                    reject(DefaultResponse(false,'Could not connect to database'));
                    return;
                }
                connection.query(query, args, (queryError, queryResponse) => 
                {
                    if(queryError || !queryResponse)
                    {
                        console.log(queryError);
                        reject(DefaultResponse(false,'Query error'));
                        connection.release();
                        return;
                    }
                    
                    connection.release();
                    resolve(DefaultResponse(true, 'success', queryResponse));
                });
            });
        });
    }
}
