const Request = new XMLHttpRequest();
const Get = (url) =>
{
    return new Promise( (resolve, reject) =>
    {
        try
        {
            Request.open('GET', url);
            Request.onload = () => 
            {
                if(Request.status == 200)
                {
                    resolve(JSON.parse(Request.responseText));
                    return;
                }
                reject('Status Error');
            };
            Request.onerror = () => reject(Request.statusText);
            Request.send();
        }
        catch(e)
        {
            reject('Catch error ' + JSON.stringify(e));
        }
    });
}

const Post = (url, data) => 
{
    return new Promise( (resolve, reject) => 
    {
        try
        {
            Request.open('POST', url);
            Request.setRequestHeader('Content-Type', 'application/json');
            Request.onload = () => 
            {
                if(Request.status == 200)
                {
                    resolve(JSON.parse(Request.responseText));
                    return;
                }
                reject('Status Error');
            };
            Request.onerror = () => reject(Request.statusText);
            Request.send(JSON.stringify(data));
        }
        catch(e)
        {
            reject('Catch error ' + JSON.stringify(e));
        }
    });
}