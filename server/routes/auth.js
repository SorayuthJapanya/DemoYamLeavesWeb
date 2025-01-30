const express = require('express')
const router = express.Router()
const { register, 
        login, 
        currentUser, 
        currentAdmin, 
        resetPassword, 
        changePassword, 
        logout 
} = require('../controllers/auth')

// @POST /api/register
router.post('/register', register)

// @POST /api/login
router.post('/login', login)

// @POST /api/current-user
router.post('/current-user', currentUser)

// @POST /api/current-admin
router.post('/current-admin', currentAdmin)

// @POST /api/reset-password
router.post('/reset-password', resetPassword)

// @PUT /api/change-password
router.put('/change-password', changePassword)

// @POST /api/logout
router.post('/logout', logout)

module.exports = router
