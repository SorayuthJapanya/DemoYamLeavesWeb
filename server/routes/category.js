const express = require('express')
const router = express.Router()
const { create, 
        list, 
        remove
} = require('../controllers/category')

// @POST /api/category
router.post('/category', create)

// @GET /api/category
router.get('/category', list)

// @DELETE /api/category/:id
router.delete('/category/:id', remove)

module.exports = router
