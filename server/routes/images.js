const express = require('express')
const router = express.Router()
const { upload, 
        deleteImage, 
        listImages, 
        checkImage
} = require('../controllers/images')

// @POST /api/images
router.post('/upload', upload)

// @DELETE /api/images/:id
router.delete('images/:id', deleteImage)

// @GET /api/images
router.get('/listImages', listImages)

// @GET /api/images/check/:id
router.get('/check/:id', checkImage)

module.exports = router
