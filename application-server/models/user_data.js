const common = require('../config/server_config.json')

//Get All Data for Slider
exports.slider_image = async (connection, data) => {
    let res = await connection.collection('slider').find({
        account_id: 123456
    }, {
        fields: {
            image: 1,
            _id: 0
        }
    }).toArray()
    let image_path = res[0].image.map((e) => {
        return ({
            path: `${common.node_url}:${common.node_port}${common.slider_image_path}/${e.name}`,
            position: e.position
        })
    })
    return image_path
}

//Get All Data for Gallery
exports.gallery_image = async (connection, data) => {
    let res = await connection.collection('gallery').find({
        account_id: 123456
    }, {
        fields: {
            image: 1,
            _id: 0
        }
    }).toArray()
    let image_path = res[0].image.map((e) => {
        return ({
            path: `${common.node_url}:${common.node_port}${common.gallery_image_path}/${e.name}`,
            position: e.position
        })
    })
    return image_path
}

//Get All Data for Header
exports.header_array = async (connection, data) => {
    let res = await connection.collection('header').find({
        account_id: 123456
    }, {
        fields: {
            image: 1,
            _id: 0
        }
    }).toArray()
    let image_path = res[0].image.map((e) => {
        return ({
            path: `${common.node_url}:${common.node_port}${common.header_image_path}/${e.name}`,
            position: e.position
        })
    })
    return image_path
}