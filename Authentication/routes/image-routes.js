const express = require('express')
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')
const uploadMiddleware = require('../middleware/upload-middleware')
const {uploadImageController} = require('../controllers/image-controller')
const router  = express.Router()

// upload the image 

router.post('/upload',authMiddleware,
        adminMiddleware,
        (req, res, next) => {
            console.log('Reached Multer middleware');
            next();
          },
        uploadMiddleware.single('image'),
        uploadImageController);

// to get the image 

module.exports = router;
