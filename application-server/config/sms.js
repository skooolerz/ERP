const request = require('request')

exports.send_sms = function(data){
    return new Promise(async(resolve,reject)=>{
        let url = `https://api.textlocal.in/send/?apikey=${data.apiKey}&numbers=${data.number}&message=${data.message}&sender=${data.sender}`
        options = {
            method: 'GET',
            url: url,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };
        console.log(options)
        request.get(options, function (error, response,body) {
            if (error) {console.log(error);}
            else {
                // console.log(response)
                resolve(response.body)
            }
        });  
    })
}