module.exports = (status, message, data) => 
{
    return {
        status: status ? status : false,
        message: message ? message : '',
        data: data ? data : {}
    }
}