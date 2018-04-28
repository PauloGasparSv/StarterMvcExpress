'use strict';
window.onload = () => 
{
    document.querySelector('button').addEventListener('click',() => 
    {
        Post('/backend/simplePost', {a: 'a', b: 1})
        .then((response) => 
        {
            if(response.status == true)
            {
                let newNode = document.createElement('p');
                newNode.innerHTML = 'This came from the server: <b>' + response.message + '</b>';
                document.querySelector('#serverResponse').appendChild(newNode);
            }
        }).catch((error) => {});
    });
}