
const { log } = require('console')
const express = require('express')
const app =  express()
const port = 3002

app.get('/home', (req, res) => {
    res.send(
        `
        <h1>Welcome to Home Page</h1>
        <a href='/contact'> Contact</a>
        `
    )
})


app.get('/contact', (req, res) => {
    res.send(
        [
            {name: 'Ansuha', age: 21, isEligible: true},
             {name: 'Shanawaz', age: 21, isEligible: true},
              {name: 'Ali', age: 21, isEligible: true},
        ]
    )
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})



