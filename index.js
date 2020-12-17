const express = require('express')
const app = express()
const connectDB = require('./config/db.js')

const PORT = process.env.PORT || 5000

connectDB();

app.use(express.json({extended: false}))

app.get('/', (req, res) => {
    res.send('API RUNNING')
})

app.use('/api/users', require('./routes/api/users.js'))
app.use('/api/posts', require('./routes/api/posts.js'))
app.use('/api/profile', require('./routes/api/profile.js'))
app.use('/api/auth', require('./routes/api/auth.js'))

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})