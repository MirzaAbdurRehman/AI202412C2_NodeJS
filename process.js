
const File = require('fs')

const action = process.argv[2] // get the action from command line argumnets
const fileName = process.argv[3] // get the file name from commnad line arguments
const data = process.argv[4] // get data from command line arguments

if (action == 'create'){
    File.writeFileSync(fileName,data)
    console.log(`File ${fileName} Created Successfully`)
}else if (action == 'delete'){
    File.unlinkSync(fileName)
     console.log(`File ${fileName} Deteled Successfully`)
}else {
     console.log('Invalid action!...')
}
// console.log(process)