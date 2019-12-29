const sms = require('../config/sms')

exports.sms = async function (connnection, data) {
    data = {
        account_id: 123456,
        sender: 'TXTLCL',
        message: 'Hello',
        number: "918220675811"
    }
    data.apiKey = "kqHs91tdv60-CkYAdX9wLObTjZtSeNFwo3OreeDYce";
    let result = await sms.send_sms(data)
    console.log(result)
}

//Get feedBack 
exports.GetFeedback = async function (connection, data) {
    let resp = await connection.collection('feedback').updateOne({
        account_id: 123456
    }, {
        $push: {
            feedBack: data
        }
    })
    return 200
}