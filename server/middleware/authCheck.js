const jwt = require('jsonwebtoken')
const prisma = require('../config/prisma')

exports.authCheck = async (req, res, next) => {
    try {
        const headerToken = req.headers.authorization
        if (!headerToken) {
            return res.status(401).json({ message: "No Token, Authorization Denied" })
        }

        const token = headerToken.split(" ")[1]
        const decode = jwt.verify(token, process.env.SECRET)
        req.user = decode

        const user = await prisma.user.findFirst({
            where: { username: req.user.username }
        })
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!user.enabled) {
            return res.status(403).json({ message: 'This account is disabled' })
        }

        next()
    } catch (err) {
        console.error("Auth Error:", err.message)
        res.status(401).json({ message: 'Token Invalid', error: err.message })
    }
}

exports.adminCheck = async (req, res, next) => {
    try {
        const { username } = req.user
        const adminUser = await prisma.user.findUnique({
            where: { username: username }
        })

        if (!adminUser || adminUser.role !== 'ADMIN') {
            return res.status(403).json({ message: 'Access Denied: Admin Only' })
        }

        next()
    } catch (err) {
        console.error("Admin Check Error:", err.message)
        res.status(500).json({ message: 'Error Admin access denied', error: err.message })
    }
}
