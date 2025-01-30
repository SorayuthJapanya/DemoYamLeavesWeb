const prisma = require('../config/prisma')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Register Function
exports.register = async (req, res) => {
    try {
        const { username, password, email } = req.body

        // Validate body
        if (!username || !password || !email) {
            return res.status(400).json({ error: "Please provide username and password" })
        }

        // Check Username, Email in DB Already?
        const user = await prisma.user.findFirst({
            where: {
                username: username
            }
        })
        const emailcheck = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (user) {
            return res.status(400).json({ message: "Username already exists!!" });
        }
        if (emailcheck) {
            return res.status(400).json({ message: "Email already exists!!" });
        }

        // hashPassword
        const hashPassword = await bcrypt.hash(password, 10)

        // Register in Databases
        await prisma.user.create({
            data: {
                username: username,
                password: hashPassword,
                email: email
            }
        })

        res.status(201).json({ message: "User registered successfully" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// Login Function
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username, password);

        // ตรวจสอบว่าผู้ใช้กรอกข้อมูลครบ
        if (!username || !password) {
            return res.status(400).json({ error: "Please provide username and password" });
        }

        // ค้นหาผู้ใช้ในฐานข้อมูล
        const user = await prisma.user.findFirst({
            where: { username: username }
        });

        if (!user) {
            return res.status(400).json({ message: "Username not found" });
        }

        // ตรวจสอบรหัสผ่าน
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }


        // Create payload
        const payload = {
            id: user.id,
            username: user.username,
            role: user.role
        }

        // GenToken
        jwt.sign(payload, process.env.SECRET, {expiresIn: '1d'}, (err, token) => {
            if (err) {
                return res.status(500).json({ message:
                    "Server Error"
                })
            }
            res.json ({payload, token})
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// CurrentUser Function
exports.currentUser = async (req, res) => {
    try {
        res.status(200).json({ message: "Current user data" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// CurrentAdmin Function
exports.currentAdmin = async (req, res) => {
    try {
        res.status(200).json({ message: "Current admin data" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// Reset Password Function
exports.resetPassword = async (req, res) => {
    try {
        const { email } = req.body
        if (!email) {
            return res.status(400).json({ error: "Please provide email" })
        }
        res.status(200).json({ message: "Password reset link sent to email" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// Change Password Function
exports.changePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body
        if (!oldPassword || !newPassword) {
            return res.status(400).json({ error: "Please provide old and new password" })
        }
        res.status(200).json({ message: "Password changed successfully" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// Logout Function
exports.logout = async (req, res) => {
    try {
        res.status(200).json({ message: "User logged out successfully" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}
