const  Image = require('../models/image')
const  {uploadToCloudinary}= require('../helper/cloudinary_helper')
const fs = require('fs');
const cloudinary = require('../config/cloudinary');
const { findByIdAndDelete } = require('../models/User');
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
const fetchingImageController = async (req,res)=>{
    try{
        const image = await Image.find({
            publicId : req.params.publicId,
            // uploadedBy : req.userInfo.userId
        })
        if(image.length>0){
            res.status(200).json({
                success : true,
                data : image
            })
        }else{
            res.status(444).json({
                success : false,
                message : 'Image not found'
            })
        }
    }catch(error){
        console.log(error);
        res.status(404).json({
            success : false,
            message : 'Error fetching image'
        })
    }
} 
const deleteImageController = async (req,res) =>{
     try{
        const  getCurrentImageToBeDeleted = req.params.id; 
        const userId = req.userInfo.userId;

        const image = await Image.findById(getCurrentImageToBeDeleted);
        if(!image){
            return res.status(404).json({
                success: false,
                message: `Image with the id :${getCurrentImageToBeDeleted} not found`,
            })
        }
        // deleting the image first from the cloudinary storage
        await cloudinary.uploader.destroy(image.publicId);
        // then deleting the image from the database(mongodb)
        await Image.findByIdAndDelete(getCurrentImageToBeDeleted);

        res.status(200).json({
            success: true,
            message: 'Image deleted successfully'
        }); 


     }catch(error){
        console.log(error);
        res.status(404).json({
            success : false,
            message : 'Error deleting image'
        })
     }
}
module.exports = {
    uploadImageController,
    fetchingImageController,
    deleteImageController,
};
