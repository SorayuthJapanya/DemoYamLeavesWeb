// Upload Image Function
exports.upload = async (req, res) => {
    try {
        res.send('Hello')
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// Delete Image by ID Function
exports.deleteImage = async (req, res) => {
    try {
        res.send('Hello')
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// List All Images Function
exports.listImages = async (req, res) => {
    try {
        res.send('Hello')
        res.status(200).json({ message: "List of images", images: [] })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// Check Image Function
exports.checkImage = async (req, res) => {
    try {
        const { id } = req.params
        res.status(200).json({ message: `Image with id ${id} exists`, exists: true })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}
