const File = require('fs');

const Path = require('path');

const {error} = require('console');
const path = require('path');

const MyFolder = path.join(__dirname, 'CRUD')

const myFile1 = `${MyFolder}/create.txt`;

const myFile2 = `${MyFolder}/hello.txt`


// Create a file
// File.writeFileSync(myFile1, 'This is crud file which was created thorugh NODE JS')

// File.writeFileSync(myFile2, 'This is hello file thorugh NODE JS')

// Read a file

// File.readFile(myFile1, 'utf8', (error, file) => {
//     console.log(file);
// })

// File.readFile(myFile2, 'utf8', (error, file) => {
//     console.log(file);
// })


// update file

// File.appendFile(myFile2, ' Hope you ae doing well', (error) => {
//     if(!error){
//         console.log('File Updated Successfully')
//     }
// })


// Delete File

// File.unlinkSync(myFile2, (error) => {
//     if(!error){
//         console.log('file deleted successfully')
//     }
// })


// Rename File

File.rename(myFile1,`${MyFolder}/abc.txt`, (error) => {
    if(!error){
        console.log('file Rename successfully')
    }
})




