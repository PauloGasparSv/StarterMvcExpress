const request = new XMLHttpRequest();
const get = (url) =>
{
    return new Promise( (resolve, reject) =>
    {
        try
        {
            request.open('GET', url);
            request.onload = () => 
            {
                if(request.status == 200)
                {
                    resolve(JSON.parse(request.responseText));
                    return;
                }
                reject('Status Error');
            };
            request.onerror = () => reject(request.statusText);
            request.send();
        }
        catch(e)
        {
            reject('Catch error ' + JSON.stringify(e));
        }
    });
}

const post = (url, data) => 
{
    return new Promise( (resolve, reject) => 
    {
        try
        {
            request.open('POST', url);
            request.setRequestHeader('Content-Type', 'application/json');
            request.onload = () => 
            {
                if(request.status == 200)
                {
                    resolve(JSON.parse(request.responseText));
                    return;
                }
                reject('Status Error');
            };
            request.onerror = () => reject(request.statusText);
            request.send(JSON.stringify(data));
        }
        catch(e)
        {
            reject('Catch error ' + JSON.stringify(e));
        }
    });
}