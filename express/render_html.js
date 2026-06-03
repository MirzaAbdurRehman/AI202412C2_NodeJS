const express = require('express')
const path =  require('path')
const myFolder = path.join(__dirname, '../public')
const app = express()
const port = 7001


console.log(myFolder)


app.use(express.static(myFolder))

// Route to serve 'about.html' without .html in URL
app.get('/about', (req, res) => {
    res.sendFile(`${myFolder}/about.html`);
});

app.get('/', (req, res) => {
    res.sendFile(`${myFolder}/index.html`);
});

app.get('*any', (req, res) => {
    res.sendFile(`${myFolder}/page_not_found.html`);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

