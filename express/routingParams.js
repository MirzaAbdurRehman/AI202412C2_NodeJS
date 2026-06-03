const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Good Morning from express JS!...')
})


app.get('/about', (req,res) => {
    res.send('About Page...')
})


app.get('/contact', (req, res) => {
    res.send('Contact Us Page!...')
})

app.listen(2001, () => {
    console.log('Server is running perfectly on port 2001!')
})




