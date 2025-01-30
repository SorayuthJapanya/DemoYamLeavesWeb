// Step 1 Import...
const express = require('express');
const app = express();
const morgan = require('morgan');
const { readdirSync } = require('fs') //Auto-load routes
const cors = require('cors')
// const authRouter = require('./routes/auth')
// const categoryRouter = require('./routes/category')

// Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// app.use('/api', authRouter)
// app.use('/api', categoryRouter)

// Auto-load routes from './routes' directory
readdirSync('./routes').map((file) => {
    const route = require(`./routes/${file}`);
    app.use('/api', route);
});

// Step 3 Router
// app.post('/api', (req, res) =>{
//     //code
//     const {username, password} = req.body
//     console.log(username, password)
//     res.send("Hello World!!")
// })

// Step 2 Start Server
app.listen(5000,
    () => console.log('Server is Running On Port 5000'))