const  image = require('../models/image')
const  {uploadToCloudinary}= require('../helper/cloudinary_helper')
const uploadImageController = async(req, res )=>{
    try{
        //  check if file is mising in req object
        console.log('REQ.FILE:', req.file); 
        console.log('REQ.BODY:', req.body);
        
        if(!req.file){
            return res.status(400).json({
                success : false,
                message : 'File is required. Please upload it'
            }) 
        }
        // upload to cloudinary
        const  {url,publicId}= await uploadToCloudinary(req.file.path)

        // store the image url and the public id along with the uplad user id
        const newlyUploadedImage = new Image({
            url,
            publicId,
            uploadedBy : req.userInfo.userId
        })
        await newlyUploadedImage.save();
        res.status(200).json({
            success : true,
            message : 'Image uploaded successfully',
            image : newlyUploadedImage
        });
    }catch(error){
        console.log(error);
        res.status(404).json({
            success : false, 
            Message : 'Error uploading image'
        })
    }
}
module.exports = {
    uploadImageController
};
