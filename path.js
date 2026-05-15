const File = require('fs')
const path = require('path')

const myFolder1 = path.join(__dirname, 'ABC')


for (let i = 1; i < 25; i++) {

    // Create full file path
    const filePath = path.join(myFolder1, `file${i}.txt`)

    // Write file
    File.writeFileSync(filePath, `This is file ${i}`)

    console.log(`file${i}.txt created successfully`)
}

// if (true) {
//     var leaked = "I escaped!";
//     let contained = "I'm trapped!";
// }
// console.log(leaked);    // Prints: "I escaped!"
// console.log(contained); // Throws ReferenceError



