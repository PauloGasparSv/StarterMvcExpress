'use strict';
window.onload = () => 
{
    document.querySelector('button').addEventListener('click',() => 
    {
        let data = {
            a: 'a',
            b: 1
        };

        post('/backend/simplePost', data)
        .then((response) => 
        {
            if(response.status == true)
            {
                console.log('okay ' + response.message);
            }
            else
            {
                console.log('Watafak ' + response.status);
            }
        })
        .catch((error) => 
        {
            console.log(error);
        });
    });
}