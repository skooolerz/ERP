const common = require('../config/server_config.json')

//Get All Data for Slider
exports.slider_image = async (connection, data) => {
    let res = await connection.collection('slider').find({
        account_id: 123456
    }, {
        fields: {
            image: 1,
            _id: 0,
            altText : 1,
            caption :1,
            header : 1,
            key : 1
        }
    }).toArray()
    let image_path = res[0].image.map((e) => {
        return ({
            src: `${common.node_url}:${common.node_port}${common.slider_image_path}/${e.name}`,
            key: e.key,
            altText : e.altText,
            caption : e.caption,
            header : e.header
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
            _id: 0,
            video : 1,
            title : 1,
            subtitle : 1
        }
    }).toArray()
    let image_path = res[0].image.map((e) => {
        return ({
            url: `${common.node_url}:${common.node_port}${common.gallery_image_path}/${e.name}`,
            position: e.position,
            title : e.title,
            subTitle : e.subtitle,
            type : e.type,
            redirectString : e.redirectString
        })
    })
    let video_path = res[0].video.map((e) => {
        return ({
            url: `${e.name}`,
            position: e.position,
            title : e.title,
            // subtitle : e.subtitle,
            type : e.type
        })
    })
    let result= {
        image : image_path,
        video : video_path
    }
    return result
}

//Get All Data for Header
exports.header_array = async (connection, data) => {
    let res = await connection.collection('header').find({
        account_id: 123456
    }).toArray()
    let image_path = res[0].image
    image_path.url = `${common.node_url}:${common.node_port}${common.header_image_path}/${image_path.name}`
    image_path.title =  image_path.title;
    return image_path
}

//address
exports.contact_array = async (connection, data) => {
    let res = await connection.collection('contact_us').find({
        account_id: 123456
    }).toArray()
    let result = {
        address : res[0].address,
        social : res[0].socialMedia
    }
    return result
}