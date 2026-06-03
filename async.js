
// function greeting(){
//     console.log('Hey. How are you!....')
// }

// setTimeout(() => {
//     greeting()
// }, 2000)


// function sayHello() {
//     console.log('Hello From NODE JS....')
// }

// sayHello()



let firstName = 'Usman'
let lastName = ''


console.log(firstName + ' ' + lastName)

const setLastName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastName = 'Arshad'
            resolve()
        }, 3000)
    })
}

const displayFullName = async () => {
    await setLastName()
    console.log(firstName + ' ' + lastName)
}

displayFullName()






