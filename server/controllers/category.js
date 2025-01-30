const prisma = require("../config/prisma")

// Create Category Function
exports.create = async (req, res) => {
    try {
        //code
        const { name } = req.body
        const category = await prisma.category.create({
            data: {
                name: name
            }
        })

        res.send('Hello')
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// List Category Function
exports.list = async (req, res) => {
    try {
        res.send('Hello')
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// Remove Category Function
exports.remove = async (req, res) => {
    try {
        res.send('Hello')
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

