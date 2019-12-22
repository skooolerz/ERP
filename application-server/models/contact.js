const sms = require('../config/sms')

exports.sms = async function (connnection, data) {
    let resp = await connnection.collection('client').find({ client_id: data.account_id }).toArray()
    console.log(resp)
    data.apiKey = resp[0].text_local_key;
    let result = await sms.send_sms(data)
    console.log(result)
}

//Get feedBack 
exports.GetFeedback = async function(connection,data){
    let resp = await connection.collection('feedback').updateOne({account_id : 123456},{$push:{feedBack:data}})
    return 200
}