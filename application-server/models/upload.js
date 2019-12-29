const multer = require('multer')

let slider_storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/slider')
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + '-' +Date.now()+ '.' +extension)
    }
})
let slider_upload = multer({
    storage: slider_storage
}).single('image')

exports.slider_upload_api = function (req, res, next) {
    slider_upload(req,res,(err)=>{
        if(err instanceof multer.MulterError){
            console.log("Error while uploading",err)
            res.json({status:199})
        }else if(err){
            console.log(err)
            res.json({status:199})
        }else{
            next()
        }
    })
}