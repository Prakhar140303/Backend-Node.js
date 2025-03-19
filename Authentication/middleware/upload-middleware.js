const multer = require('multer');
const path = require('path');


// set our multer storage 
const storage = multer.diskStorage({
    destination :function(req,file,cb){
        cb(null,"uploads/");
    },
    filename : function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        );
    }
});
//  filter to check weather it is image or not
const checkFileFilter = (req,file,cb)=>{
    console.log("upload middleware ",file.mimetype)
    if(file.mimetype.startsWith('image')){
        cb(null, true)
    }else{
        console.log('Not and image ! please upload only images')
        cb(new Error('Not and image ! please upload only images'))
    }
}
// multer middleware

module.exports = multer({
    storage: storage,
    fileFilter : checkFileFilter,
    limits : {
        fileSize : 5*1024*1024 // 5 MB
    }
})
