const common = require('../config/server_config.json')

//Get All Data for Slider
exports.sliderImage = async (connection, data) => {
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
            // src: `${common.node_url}:${common.node_port}${common.sliderImagePath}/${e.name}`,
            src: `${common.node_url}${common.sliderImagePath}/${e.name}`,
            key: e.key,
            altText : e.altText,
            caption : e.caption,
            header : e.header
        })
    })
    return image_path
}

//Get All Data for Gallery
exports.galleryImage = async (connection, data) => {
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
            // url: `${common.node_url}:${common.node_port}${common.galleryImagePath}/${e.name}`,
            url: `${common.node_url}${common.galleryImagePath}/${e.name}`,
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
exports.headerArray = async (connection, data) => {
    let res = await connection.collection('header').find({
        account_id: 123456
    }).toArray()
    let image_path = res[0].image
    // image_path.url = `${common.node_url}:${common.node_port}${common.headerImagePath}/${image_path.name}`
    image_path.url = `${common.node_url}${common.headerImagePath}/${image_path.name}`
    image_path.title =  image_path.title;
    return image_path
}

exports.aboutUs = async (connection, data) => {
    let res = await connection.collection('about_us').find({}).toArray()
    let image_path = res[0].image.map((e) => {
    return ({
            // url: `${common.node_url}:${common.node_port}${common.aboutUsPath}/${e.name}`,
            url: `${common.node_url}${common.aboutUsPath}/${e.name}`,
            position: e.position,
            entityTitle : e.entityTitle,
            entitySubTitle : e.entitySubTitle,
            content : e.content
        })
    })

    let result={
        'title':res[0].title,
        'subTitle':res[0].subTitle,
        'headerImageUrl':`${common.node_url}${common.aboutUsHeaderPath}/${res[0].headerImageUrl}`,
        'data':image_path
    }
    
    return result
}

//address
exports.contactArray = async (connection, data) => {
    let res = await connection.collection('contact_us').find({
        account_id: 123456
    }).toArray()
    let result = {
        address : res[0].address,
        social : res[0].socialMedia,
        intro : res[0].intro
    }
    result.intro.image = `${common.node_url}${common.aboutUsPath}/${result.intro.image}`
    return result
}

//Slider Upload 
exports.upload_slider_photo = async(connection,data)=>{
    if(data.purpose=='edit'){
        let res = await connection.collection('slider').updateOne({account_id:123456,"image.key":parseInt(data.key)},{$set:{"image.$.name":data.name}})
    }else{
        let res = await connection.collection('slider').updateOne({account_id:123456},{$push:{image:data}})
    }
    return 200
}

//Slider Upload content
exports.upload_slider_content = async(connection,data)=>{
    let insert_data = {
        "image.$.altText" : data.altText,
        "image.$.caption" : data.caption,
        "image.$.header" : data.header
    }
    let res = await connection.collection('slider').updateOne({account_id:123456,"image.key":parseInt(data.key)},{$set:insert_data})
    return 200
}