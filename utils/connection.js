const mysql = require('mysql');
const sqlite3 = require('sqlite3').verbose();

let mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password'
});

module.exports = 
{
    query: (query) => 
    {
        let promise = new Promise((resolve, reject) => 
        {
            if(!query)
            {
                reject({status:false, message: ''});
                return;
            }
            mysqlConnection.connect((conError) => 
            {
                if(conError)
                {
                    reject({status:false, message: 'Could not connect to database'});
                    return;
                }
                
                mysqlConnection.query(query, (queryError, queryResponse) => 
                {
                    if(queryError || !queryResponse)
                    {
                        reject({status: false, message:'Query error'});
                        return;
                    }
                    resolve({status: true, response: queryResponse});
                });
            });
        });
        return promise;
    }
}
